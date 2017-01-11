const React = require('react-native');
const DEVICE_WIDTH = React.Dimensions.get('window').width;

module.exports = React.StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flex: 1
  },

  header: {
    padding: 10,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d7d7d7',
    backgroundColor: 'transparent'
  },

  headerBgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0
  },

  headerBgImg: {
    width: DEVICE_WIDTH,
    height: 260
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#1AD6FD',
    borderWidth: 1
  },

  profileCount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },

  counts: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10
  },

  countsNum: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },

  countsText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },

  timeline: {
    backgroundColor: 'white',
    margin: 10,
    paddingBottom: 42
  }

});