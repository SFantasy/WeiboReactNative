// Module dependencies
const React = require('react-native');
const moment = require('moment');

const styles = require('./style');

const {
  View,
  Text,
  Image
} = React;

module.exports = React.createClass({
  render () {
    let data = this.props.data;

    return (
      <View style={styles.card}>
        {this.renderCellHeader(data)}
        <Text style={styles.text}>{data.text}</Text>
        {this.renderPics(data.pic_urls)}
        {
          data.retweeted_status ?
          <View style={{ padding: 5, borderLeftWidth: 4, borderColor: '#e2e2e2' }}>
            <Text style={{ color: '#007aff' }}>{`@${data.retweeted_status.user.screen_name}`}</Text>
            <Text style={styles.text}>{data.retweeted_status.text}</Text>
            {this.renderPics(data.retweeted_status.pic_urls)}
          </View> : null
        }
      </View>
    );
  },

  renderPics (pics) {
    let picView = [];

    if (pics && pics.length) {
      let l = pics.length;

      // Less than 3
      if (l <= 3) {
        pics.forEach((pic, index) => {
          picView.push(
            <Image
              key={`${index}`}
              style={{ height: 80, width: 80, marginRight: 5 }}
              source={{uri: pic.thumbnail_pic }} />);
        });
      }
    }

    return <View style={{ flexDirection: 'row', marginTop: 5 }}>{picView}</View>
  },

  renderCellHeader (data) {
    return (
      <View style={styles.header}>
        <Image style={styles.avatar}
               source={{uri: data.user.profile_image_url}} />
        <View style={styles.headerInfo}>
          <Text style={{color:'#333',fontSize:14}}>{data.user.screen_name}</Text>
          <Text style={{color:'#777',fontSize:12,marginTop:5}}>
            {`${moment(new Date(data.created_at)).format('YYYY-MM-DD')} from ${data.source.replace(/<\/?[^>]+(>|$)/g, '')}`}
          </Text>
        </View>
      </View>
    )
  }
});
