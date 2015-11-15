/**
 * 一简微博
 *
 * @author FantasyShao <fantasyshao@icloud.com>
 */

'use strict';

// Module dependencies
var React = require('react-native');
var url = require('url');

var config = require('./app/config');
var api = require('./app/api');
var common = require('./app/common');
var HomeView = require('./app/Home');

var {
  AppRegistry,
  View,
  WebView
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
      <View style={{flex: 1, marginTop: 20 }}>
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
          common.storeItem(config.token_store_key, responseData.access_token);
          // 获取登录用户的uid
          fetch(api.account.getUid + '?access_token=' + responseData.access_token)
            .then((res) => res.json())
            .then((data) => {
              common.storeItem(config.uid_store_key, data.uid + '');
            })
            .done();
        })
        .catch((err) => console.log(err))
        .done();
    }
  }
});

AppRegistry.registerComponent('Yijian', () => Yijian);
