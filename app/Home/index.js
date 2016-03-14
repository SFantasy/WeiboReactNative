// HomeView

// Module dependencies
const React = require('react-native');
const Icon = require('react-native-vector-icons/FontAwesome');
const styles = require('./style');

const {
  NavigatorIOS,
  TabBarIOS
} = React;

var HomeTabs = React.createClass({
  getInitialState () {
    return {
      selectedTab: 'home'
    }
  },

  triggerPostView () {
    // TBD
  },

  render () {
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
            navigationBarHidden={false}
            style={styles.navContainer}
            translucent={true}
            rightButtonTitle="╋"
            onRightButtonPress={this.triggerPostView()}
            barTintColor="#fff"
            initialRoute={{
              title: '时间轴',
              component: require('../Timeline')
            }}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="评论"
          iconName="envelope-o"
          iconSize={28}
          selectedIconName="envelope-o"
          selected={this.state.selectedTab === 'comment'}
          onPress={() => {
            this.setState({
              selectedTab: 'comment'
            });
          }}>
          <NavigatorIOS
            navigationBarHidden={false}
            rightButtonTitle="╋"
            onRightButtonPress={this.triggerPostView()}
            style={styles.navContainer}
            initialRoute={{
              title: '评论',
              component: require('../Comment')
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
            navigationBarHidden={false}
            rightButtonTitle="╋"
            onRightButtonPress={this.triggerPostView()}
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

module.exports = React.createClass({
  render () {
    return <HomeTabs />
  }
});
