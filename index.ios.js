/**
 * 一简微博
 *
 * @author Fantasy0 <fantasyshao@icloud.com>
 */

'use strict';

// Module dependencies
var React = require('react-native');
var url = require('url');

var config = require('./app/config');
var HomeView = require('./app/Home');

var {
  AppRegistry,
  View,
  WebView,
  AsyncStorage
} = React;

var OAUTH_URL = [
  'https://api.weibo.com/oauth2/authorize',
  '?client_id=' + config.app_key,
  '&response_type=code',
  '&redirect_uri=' + config.redirect_uri
].join('');

var Yijian = React.createClass({

  getInitialState () {
    return {
      login: false
    }
  },

  render () {
    if (this.state.login) {
      return (
        <HomeView />
      );
    }

    return (
      <View style={{flex: 1}}>
        <WebView
          ref={'webview'}
          url={OAUTH_URL}
          automaticallyAdjustContentInsets={false}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState={true}
          scalesPageToFit={true} />
      </View>);
  },

  onNavigationStateChange (navState) {
    var urlObj = url.parse(navState.url, true);

    if (urlObj.pathname === url.parse(config.redirect_uri).pathname && navState.loading) {
      console.log('Current Path:', urlObj.pathname);
      // 获取code
      var code = urlObj.query.code;
      var auth_url = [config.auth_uri,
        '?client_id=' + config.app_key,
        '&client_secret=' + config.app_secret,
        '&grant_type=authorization_code',
        '&redirect_uri=' + config.redirect_uri,
        '&code=' + code
      ].join('');

      // 获取access_token
      fetch(auth_url, {
        method: 'post'
      }).then((response) => response.json())
        .then((responseData) => {
          this.setState({
            login: true
          });
          // 存储access_token
          this._storeAccessToken(responseData.access_token);
        })
        .catch((err) => console.log(err))
        .done();
    }
  },

  async _storeAccessToken (access_token) {
    try {
      await AsyncStorage.setItem(config.token_store_key, access_token);
    } catch (err) {
      console.error(err);
    }
  }
});

AppRegistry.registerComponent('Yijian', () => Yijian);
