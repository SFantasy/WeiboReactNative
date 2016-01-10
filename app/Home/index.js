// HomeView

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var styles = require('./style');

var {
  NavigatorIOS,
  TabBarIOS
} = React;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'home'
    }
  },

  render: function () {
    return (
      <TabBarIOS tintColor={'#5ac8fb'} translucent={true}>
        <Icon.TabBarItem
          title="首页"
          iconName="home"
          iconSize={28}
          selectedIconName="home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}>
          <NavigatorIOS
            navigationBarHidden={true}
            style={styles.navContainer}
            translucent={true}
            barTintColor="#fff"
            initialRoute={{
              title: '',
              component: require('../Timeline')
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="写微博"
          iconName="plus"
          iconSize={28}
          selectedIconName="plus"
          selected={this.state.selectedTab === 'post'}
          onPress={() => {
            this.setState({
              selectedTab: 'post'
            });
          }}>
          <NavigatorIOS
            navigationBarHidden={true}
            style={styles.navContainer}
            initialRoute={{
              title: 'Post',
              component: require('../Post')
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="消息"
          iconName="envelope-o"
          iconSize={28}
          selectedIconName="envelope-o"
          selected={this.state.selectedTab === 'message'}
          onPress={() => {
            this.setState({
              selectedTab: 'message'
            });
          }}>
          <NavigatorIOS
            style={styles.navContainer}
            initialRoute={{
              title: '消息',
              component: require('../Message/List')
            }} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="我"
          iconName="user"
          iconSize={28}
          selectedIconName="user"
          selected={this.state.selectedTab === 'user'}
          onPress={() => {
            this.setState({
              selectedTab: 'user'
            });
          }}>
          <NavigatorIOS
            navigationBarHidden={true}
            style={styles.navContainer}
            initialRoute={{
              title: '我',
              component: require('../Account')
            }}/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
});
