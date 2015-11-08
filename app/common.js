var React = require('react-native');

exports.storeItem = async function (key, value) {
  try {
    await React.AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
};
