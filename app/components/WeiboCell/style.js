const React = require('react-native');
const commonStyle = require('../../style.common');

module.exports = React.StyleSheet.create({

  card: {
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: commonStyle.BORDER_COLOR
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 10
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
    lineHeight: 16,
    paddingHorizontal: 10
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: commonStyle.BORDER_COLOR,
    borderBottomColor: commonStyle.BORDER_COLOR,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },

  footerCell: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
