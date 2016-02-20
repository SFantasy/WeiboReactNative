// Module dependencies
const React = require('react-native');
const GiftedListView = require('react-native-gifted-listview');
const Spinner = require('react-native-spinkit');

const styles = require('./style');

const {
  View,
  Text,
  TouchableOpacity
} = React;

module.exports = React.createClass({
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
    let CellView = this.props.cell;

    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={rowData=> <CellView data={rowData} />}
          onFetch={this.props.onFetch}
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
    )
  }
});