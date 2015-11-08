var React = require('react-native');
var api = require('../api');
var config = require('../config');
var common = require('../common');

var {
  Text,
  AsyncStorage
} = React;

module.exports = React.createClass({

  getInitialState () {
    return {
      loaded: false,
      data: {}
    }
  },

  componentDidMount () {
    this.fetchData().done();
  },

  async fetchData () {
    let accessToken = await AsyncStorage.getItem(config.token_store_key);
    let uid = await AsyncStorage.getItem(config.uid_store_key);
    let url = api.users.show + '?access_token=' + accessToken + '&uid=' + uid;

    fetch(url)
      .then((resData) => resData.json())
      .then((res) => {
        console.log(res);
        this.setState({
          loaded: true,
          data: res
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .done();
  },

  render () {
    if (!this.state.loaded) {
      return (
        <Text>Data Not loaded</Text>
      );
    }

    return (
      <Text>User</Text>
    );
  }
});
