const React = require('react-native');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 48,
    paddingTop: 20
  },
  loadingView: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent:'center'
  },
  pullText: {
    fontSize: 14,
    color: '#777'
  }
});