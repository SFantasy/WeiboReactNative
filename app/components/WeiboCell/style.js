const React = require('react-native');

module.exports = React.StyleSheet.create({

  card: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  },

  header: {
    flexDirection: 'row'
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#e2e2e2'
  },

  headerInfo: {
    marginLeft: 10
  }
});
