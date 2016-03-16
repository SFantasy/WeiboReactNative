const React = require('react-native');
const styles = require('./style');
const config = require('../config');
const api = require('../api');

const {
  AlertIOS,
  View,
  Text,
  TextInput,
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
      text: ''
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
            <Text style={styles.btn}>发布</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholderTextColor="#ccc"
          placeholder="想说点啥?"
          returnKeyType="done"
          style={styles.textArea}
          multiline={true} />
      </View>
    );
  },

  async post () {
    let accessToken = await AsyncStorage.getItem(config.token_store_key);
    let url = `${api.statuses.update}?access_token=${accessToken}&status=${this.state.text}`;

    fetch(url, {
      method: 'POST'
    })
    .then(responseText => responseText.json())
    .then(response => {
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
    })
    .done();

  }

});
