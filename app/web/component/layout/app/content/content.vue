<template>
  <main >
    <el-scrollbar>
      <slot name="content"></slot>
    </el-scrollbar>
  </main>
</template>
<style>
  @import "content.css";
</style>
<script type="text/babel">
  export default{
    name:'v-content',
    data(){
      return {

      }
    },
    components: {},
    mounted() {

    }
  }
</script>
