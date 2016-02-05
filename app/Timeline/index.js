// Module dependencies
const React = require('react-native');
const WeiboList = require('../components/WeiboList');

const config = require('../config');
const api = require('../api');

const {
  AsyncStorage
} = React;

module.exports = React.createClass({

  async onFetch (page = 1, callback, options) {
    let accessToken = await AsyncStorage.getItem(config.token_store_key);
    let uid = await AsyncStorage.getItem(config.uid_store_key);
    let url = `${api.statuses.homeTimeline}?access_token=${accessToken}&uid=${uid}&page=${page}`;

    fetch(url)
      .then(resData => resData.json())
      .then(res => {
        callback(res.statuses);
      })
      .catch(err => console.error(err))
      .done();
  },

  render () {
    return <WeiboList onFetch={this.onFetch} />;
  }
});
