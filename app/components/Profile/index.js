const React = require('react-native');
const styles = require('./style');

const {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} = React;

var Profile = React.createClass({
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

  render () {
    return <View></View>;
  }
});

module.exports = Profile;