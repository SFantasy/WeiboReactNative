const React = require('react-native');
const StyleCommon = require('../style.common');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff'
  },

  postTitle: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: StyleCommon.BORDER_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textArea: {
    height: 200,
    padding: 10,
    fontSize: 14
  },

  btn: {
    fontSize: 14,
    color: '#999'
  }
});