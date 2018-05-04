<template>
  <div>
    <el-carousel class="banner">
      <el-carousel-item v-for="item in banner" :key="item"  >
        <div class="bg" >
          <img src="../../../asset/images/slide-1.jpg" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="container" style="height:5000px;">

    </div>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    data () {
      return {
        banner:[{
          title: 'banner1',
          img:'',
          url: 'https://cn.vuejs.org'
        },
        {
          title: 'banner1',
          img:'',
          url: 'https://cn.vuejs.org'
        }]
      }
    },
    computed: {
      isLoading(){
       return false;
      }
    }
  }
</script>
  <style lang="sass" >
    @import "./index.scss";
  </style>
