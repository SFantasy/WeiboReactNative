var config = require('./config');

var apiList = {
  account: {
    getUid: '/get_uid.json'
  },
  users: {
    show: '/show.json'
  }
};

for (var api in apiList) {
  if (apiList.hasOwnProperty(api)) {
    for (var key in apiList[api]) {
      if (apiList[api].hasOwnProperty(key)) {
        apiList[api][key] = config.api_prefix + api + apiList[api][key];
      }
    }
  }
}

module.exports = apiList;
