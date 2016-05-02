const React = require('react-native');
const StyleCommon = require('../style.common');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f1f1f1'
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
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: StyleCommon.BORDER_COLOR,
    backgroundColor: 'white'
  },

  postActions: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: StyleCommon.BORDER_COLOR,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center'
  },

  actionText: {
    color: '#777',
    fontSize: 14,
    marginRight: 5
  }
});