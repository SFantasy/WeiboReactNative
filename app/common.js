const React = require('react-native');
const { AsyncStorage } = React;

exports.storeItem = async function (key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
};
