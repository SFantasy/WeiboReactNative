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
  StyleSheet,
  Text,
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
  getInitialState: function () {
    return {
      login: false
    }
  },

  render: function() {
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
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          startInLoadingState={true}
          scalesPageToFit={true} />
      </View>);
  },

  onNavigationStateChange: function (navState) {
    var urlObj = url.parse(navState.url, true);
    if (urlObj.pathname == url.parse(config.redirect_uri).pathname) {
      // 获取code
      var code = urlObj.query.code;
      var auth_url = [config.auth_uri,
        '?client_id=' + config.app_key,
        '&client_secret=' + config.app_secret,
        '&grant_type=authorization_code',
        '&redirect_uri=' + config.redirect_uri,
        '&code=' + code
      ].join('');

      fetch(auth_url, {
        method: 'post'
      }).then((response) => response.json())
        .then((responseData) => {
          this.setState({
            login: true,
            token: responseData.access_token
          });
        })
        .catch((err) => console.log(err))
        .done();
    }
  }
});

AppRegistry.registerComponent('Yijian', () => Yijian);
