<template>
  <div class="">
    <Header></Header>
    <main>
      <div class="contner">
        <keep-alive>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </keep-alive>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Common/Header.vue'
  import Footer from './Common/Footer.vue'
  export default {
    name: 'Layout',
    components: {
      Header,
      Footer
    },
    data: function(){
      return {
        welcomeText: 'Welcome, old friend!'
      }
    },
    methods: {
      _someSillyMethod() {
        console.log('I bet you can not be as silly as me!')
      }
    },
    mounted() {
    },
    created() {
      this._someSillyMethod();
    }
  }
</script>

<style scoped lang="scss">

</style>
