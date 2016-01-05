// Module dependencies
var React = require('react-native');
var GiftedListView = require('react-native-gifted-listview');

var WeiboCell = require('../components/WeiboCell');
var config = require('../config');
var styles = require('./style');
var api = require('../api');

var {
  View,
  AsyncStorage
} = React;

module.exports = React.createClass({

  componentDidMount () {

  },

  async onFetch (page = 1, callback, options) {
    let accessToken = await AsyncStorage.getItem(config.token_store_key);
    let uid = await AsyncStorage.getItem(config.uid_store_key);
    let url = `${api.statuses.homeTimeline}?access_token=${accessToken}&uid=${uid}&page=${page}`;;

    fetch(url)
      .then(resData => resData.json())
      .then(res => {
        callback(res.statuses);
      })
      .catch(err => console.error(err))
      .done();
  },

  render () {
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={rowData=> <WeiboCell data={rowData} />}
          onFetch={this.onFetch}
          firstLoader={true}
          pagination={true}
          refreshable={true}
        />
      </View>
    );
  }
});
