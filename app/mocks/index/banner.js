'use strict';
const data = {
  list: [{
    title: 'banner1',
    img: '/web/asset/images/slide-1.jpg',
    url: 'https://cn.vuejs.org'
  }, {
    title: 'banner1',
    img: '/web/asset/images/slide-1.jpg',
    url: 'https://cn.vuejs.org'
  }]
};

let id = 1;

data.list.forEach(item => {
  item.id = id++;
});

// console.log(data.list);
exports.getBanner = () => {
  return {
    list: data.list
  };
};
