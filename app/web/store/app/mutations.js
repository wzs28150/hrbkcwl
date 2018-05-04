'use strict';

import {
  SET_BANNER_LIST,
  SET_ARTICLE_LIST,
  SET_ARTICLE_DETAIL
} from './mutation-type'

const mutations = {
  [SET_BANNER_LIST] (state, items){
    state.bannerList = items;
  },
  [SET_ARTICLE_LIST] (state, items){
    state.articleList = items;
  },
  [SET_ARTICLE_DETAIL](state, data) {
    state.article = data;
  }
};
export default mutations
