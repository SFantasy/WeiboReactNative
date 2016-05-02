const React = require('react-native');
const common_style = require('../../style.common');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 48,
    paddingTop: 64,
    backgroundColor: '#f1f1f1'
  },
  loadingView: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent:'center'
  },
  pullText: {
    fontSize: 14,
    color: common_style.GRAY
  }
});