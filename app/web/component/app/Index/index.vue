<template>
  <div>
    <el-carousel class="banner">
      <el-carousel-item v-for="item in bannerList" :key="item.id"  >
        <div class="bg" >
          <img :src="item.img" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="container" style="height:5000px;"></div>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    computed: {
      isLoading(){
       return false;
      },
      bannerList() {
        this.$store.state.bannerList.forEach(item => {
          // console.log(window.location.origin + item.img);
          // item.img = require('../../../asset/images/slide-1.jpg');
        });
        return this.$store.state.bannerList;
      }
    },
    preFetch ({ state, dispatch, commit }) {
      return Promise.all([
        dispatch('FETCH_BANNER_LIST')
      ])
    },
    beforeMount() {
      return Promise.all([
        this.$store.dispatch('FETCH_BANNER_LIST')
      ]);
    }
  }
</script>
  <style lang="sass" >
    @import "./index.scss";
  </style>
