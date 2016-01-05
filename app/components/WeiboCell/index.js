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
        <Text>{data.text}</Text>
      </View>
    );
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
