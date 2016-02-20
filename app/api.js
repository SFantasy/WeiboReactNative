const config = require('./config');

const apiList = {
  account: {
    getUid: '/get_uid.json'
  },
  statuses: {
    userTimeline: '/user_timeline.json',
    homeTimeline: '/home_timeline.json'
  },
  users: {
    show: '/show.json'
  },
  comments: {
    toMe: '/to_me.json'
  }
};

for (let api in apiList) {
  if (apiList.hasOwnProperty(api)) {
    for (let key in apiList[api]) {
      if (apiList[api].hasOwnProperty(key)) {
        apiList[api][key] = config.api_prefix + api + apiList[api][key];
      }
    }
  }
}

module.exports = apiList;
