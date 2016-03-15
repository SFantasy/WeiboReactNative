const React = require('react-native');
const styles = require('./style');

const {
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

  post () {

  }

});
