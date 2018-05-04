<template>
  <div>
    <el-carousel class="banner">
      <el-carousel-item v-for="item in bannerList" :key="item.id"  >
        <div class="bg" :style="{backgroundImage: 'url('+ item.img +')'}">

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
