// Module dependencies
const React = require('react-native');
const GiftedListView = require('react-native-gifted-listview');
const Spinner = require('react-native-spinkit');

const WeiboCell = require('../components/WeiboCell');
const config = require('../config');
const styles = require('./style');
const api = require('../api');

const {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity
} = React;

module.exports = React.createClass({

  componentDidMount () {

  },

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

  renderFetchingView () {
    return (
      <View style={styles.loadingView}>
        <Spinner size={36} type="Bounce" color="#5ac8fb" />
      </View>
    );
  },

  renderAllLoadedView () {
    return (
      <View style={styles.loadingView}>
        <Text>加载完成</Text>
      </View>
    );
  },

  renderWaitingView (paginateCallback) {
    return (
      <View style={styles.loadingView}>
        <TouchableOpacity onPress={paginateCallback}>
          <Text style={{color:'#777',fontSize:14}}>点击加载更多</Text>
        </TouchableOpacity>
      </View>
    );
  },

  renderRefreshableFetchingView () {
    return (
      <View style={styles.loadingView}>
        <Spinner size={36} type="Wave" color="#5ac8fb" />
      </View>
    );
  },

  renderRefreshableWillRefreshView () {
    return (
      <View style={styles.loadingView}>
        <Text style={styles.pullText}>⇡ 释放更新</Text>
      </View>
    );
  },

  renderRefreshableWaitingView () {
    return (
      <View style={styles.loadingView}>
        <Text style={styles.pullText}>⇣ 下拉刷新</Text>
      </View>
    );
  },

  renderEmptyView () {
    return (
      <Text>No data yet.</Text>
    );
  },

  render () {
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={rowData=> <WeiboCell data={rowData} />}
          onFetch={this.onFetch}
          firstLoader={true}

          pagination={true}
          paginationFetchigView={this.renderFetchingView}
          paginationAllLoadedView={this.renderAllLoadedView}
          paginationWaitingView={this.renderWaitingView}

          refreshableFetchingView={this.renderRefreshableFetchingView}
          refreshableWillRefreshView={this.renderRefreshableWillRefreshView}
          refreshableWaitingView={this.renderRefreshableWaitingView}

          emptyView={this.renderEmptyView}

          refreshable={true}
        />
      </View>
    );
  }
});
