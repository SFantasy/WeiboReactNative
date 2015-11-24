'use strict';

// Module dependencies
var React = require('react-native');
var Spinner = require('react-native-spinkit');
var api = require('../api');
var config = require('../config');
var styles = require('./style');

var {
  View,
  Text,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
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
        <View style={styles.centerContainer}>
          <Spinner size={36} type="Bounce" color="#5ac8fb" />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {this._renderHeader()}
      </ScrollView>
    );
  },

  _renderHeader () {
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
          <Text style={{marginTop:10,textAlign:'center',color:'white'}}>{this.state.data.description}</Text>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
            <Text style={{color:'white',marginRight:10}}>{this.state.data.location}</Text>
            <Text style={{color:'white'}}>{this.state.data.url}</Text>
          </View>
        </View>
      </View>
    );
  }
});
