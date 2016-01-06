// Module dependencies
const React = require('react-native');
const Spinner = require('react-native-spinkit');

const api = require('../api');
const config = require('../config');
const styles = require('./style');
const WeiboCell = require('../components/WeiboCell');

const {
  View,
  Text,
  Image,
  ScrollView,
  AsyncStorage,
  ListView,
  TouchableOpacity
} = React;

module.exports = React.createClass({

  getInitialState () {
    return {
      timelineDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 }),
      loaded: false,
      data: {}
    }
  },

  componentDidMount () {
    this.fetchData();
    this.fetchWeibo();
  },

  async fetchData () {
    let accessToken = await AsyncStorage.getItem(config.token_store_key);
    let uid = await AsyncStorage.getItem(config.uid_store_key);
    let url = `${api.users.show}?access_token=${accessToken}&uid=${uid}`;

    fetch(url)
      .then(resData => resData.json())
      .then(res => {
        this.setState({
          loaded: true,
          data: res
        });
      })
      .catch(err => console.error(err))
      .done();
  },

  async fetchWeibo () {
    let accessToken = await AsyncStorage.getItem(config.token_store_key);
    let uid = await AsyncStorage.getItem(config.uid_store_key);
    let url = `${api.statuses.userTimeline}?access_token=${accessToken}&uid=${uid}`;

    fetch(url)
      .then(resData => resData.json())
      .then(res => {
        this.setState({
          timelineData: this.state.timelineDataSource.cloneWithRows(res.statuses)
        });
      })
      .catch(err => console.error(err))
      .done();
  },

  render () {
    if (!this.state.loaded) {
      return (
        <View style={styles.centerContainer}>
          <Spinner size={36} type="Bounce" color="#5ac8fb" />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderHeader()}
        {this.renderAccountTimeline()}
      </ScrollView>
    );
  },

  renderHeader () {
    return (
      <View style={styles.header}>
        <View style={styles.headerBgWrapper}>
          <Image style={styles.headerBgImg} source={{uri:this.state.data.cover_image_phone}} />
        </View>
        <View>
          <View style={{alignItems:'center'}}>
            <Image style={styles.avatar} source={{uri:this.state.data.avatar_large}} />
          </View>
          <Text style={{marginTop: 10, fontSize:20, color:'white', textAlign: 'center'}}>@{this.state.data.screen_name}</Text>
          <View style={styles.profileCount}>
            <TouchableOpacity style={styles.counts}>
              <Text style={styles.countsNum}>{this.state.data.statuses_count}</Text>
              <Text style={styles.countsText}>Weibo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.counts}>
              <Text style={styles.countsNum}>{this.state.data.friends_count}</Text>
              <Text style={styles.countsText}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.counts}>
              <Text style={styles.countsNum}>{this.state.data.followers_count}</Text>
              <Text style={styles.countsText}>Followers</Text>
            </TouchableOpacity>
          </View>
          <Text numberOfLines={1} style={{marginTop:10,textAlign:'center',color:'white'}}>{this.state.data.description}</Text>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
            <Text style={{color:'white',marginRight:10}}>{this.state.data.location}</Text>
            <Text style={{color:'white'}}>{this.state.data.url}</Text>
          </View>
        </View>
      </View>
    );
  },

  renderAccountTimeline () {
    if (!this.state.timelineData) return null;

    return (
      <ListView
        style={styles.timeline}
        dataSource={this.state.timelineData}
        renderRow={rowData => <WeiboCell data={rowData} />}
      />
    );
  }
});
