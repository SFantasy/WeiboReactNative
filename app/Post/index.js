const React = require('react-native');

const styles = require('./style');
const config = require('../config');
const api = require('../api');

const {
  AlertIOS,
  View,
  Text,
  Switch,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} = React;

module.exports = React.createClass({

  getDefaultProps () {
    return {
      onCancel () {}
    }
  },

  getInitialState () {
    return {
      text: '',
      isFriendCircle: false
    }
  },

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.postTitle}>
          <TouchableOpacity onPress={this.props.onCancel.bind(this)}>
            <Text style={styles.btn}>取消</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#666' }}>写微博</Text>
          <TouchableOpacity onPress={() => { this.post() }}>
            <Text style={{ color: this.state.text.length > 0 ? '#2477b3' : '#999' }}>发布</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholderTextColor="#ccc"
          placeholder="想说点啥?"
          returnKeyType="done"
          style={styles.textArea}
          onChangeText={text => { this.setState({ text: text }); }}
          multiline={true} />
        <View style={styles.postActions}>
          <Text style={styles.actionText}>好友圈发布</Text>
          <Switch value={this.state.isFriendCircle}
                  onValueChange={(value) => {
                    this.setState({
                      isFriendCircle: value
                    });
                  }}
          />
        </View>
      </View>
    );
  },

  async post () {
    if (this.state.text.length === 0) return;

    let accessToken = await AsyncStorage.getItem(config.token_store_key);

    try {
      fetch(api.statuses.update, {
        method: 'POST',
        body: JSON.stringify({
          access_token: '' + accessToken,
          source: config.app_key,
          status: encodeURIComponent(this.state.text),
          visible: this.state.isFriendCircle ? 2 : 0
        })
      })
      .then(responseText => responseText.json())
      .then(response => {
        if (!response.id) {
          AlertIOS.alert(
            '发布失败',
            `一定是哪里出问题了..快联系@FantasyShao (${response.error})`
          );
        } else {
          AlertIOS.alert(
            null,
            '发布成功',
            [
              {
                text: '嗯, 快退下吧',
                onPress: () => {
                  this.props.onCancel();
                }
              }
            ]
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
    } catch (e) {
      console.log(e);
    }
  }

});
