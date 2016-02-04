const React = require('react-native');
const commonStyle = require('../../style.common');

module.exports = React.StyleSheet.create({

  card: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: commonStyle.BORDER_COLOR
  },

  header: {
    flexDirection: 'row'
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: commonStyle.BORDER_COLOR
  },

  headerInfo: {
    marginLeft: 10
  },

  textWrapper: {
    flex: 1,
    flexWrap: 'wrap'
  },

  text: {
    fontFamily: 'Helvetica',
    color: '#233',
    fontSize: 14,
    marginTop: 5,
    lineHeight: 16
  }
});
