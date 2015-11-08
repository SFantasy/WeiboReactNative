// HomeView

'use strict';

var React = require('react-native');
var Icon = require("react-native-vector-icons/FontAwesome");

var {
  NavigatorIOS,
  TabBarIOS
} = React;

var HomeView = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'home'
    }
  },

  render: function () {
    return (
      <TabBarIOS tintColor={'#5ac8fb'}>
        <Icon.TabBarItem
          title="Home"
          iconName="home"
          selectedIconName="home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}>
          <NavigatorIOS
            initialRoute={{
              title: 'Timeline',
              component: require('../Timeline')
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Post"
          iconName="plus"
          selectedIconName="plus"
          selected={this.state.selectedTab === 'post'}
          onPress={() => {
            this.setState({
              selectedTab: 'post'
            });
          }}>
          <NavigatorIOS
            initialRoute={{
              title: 'Post',
              component: require('../Post')
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Me"
          iconName="user"
          selectedIconName="user"
          selected={this.state.selectedTab === 'user'}
          onPress={() => {
            this.setState({
              selectedTab: 'user'
            });
          }}>
          <NavigatorIOS
            initialRoute={{
              title: 'Me',
              component: require('../Account')
            }}/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
});

module.exports = HomeView;
