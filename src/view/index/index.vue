<template>
  <div class="top">
      <h1>欢迎来到小霸王垃圾管理系统</h1>
      <h2>&copy 2018 by zhenghui</h2>
      <footer-nav v-bind:class="{'lsIndex':isNowPage}"></footer-nav>
  </div>
</template>

<style scoped>
    .top{
        margin-top: 60px;
    }
    .top h1{font-size: 14px;font-family: 'Times New Roman', Times, serif;margin-top: 40px;}
    .top h2{margin-top: 150px;font-family: cursive;font-size: 12px;font-weight: 700; }
</style>

<script>
import FooterNav from '../../components/footer'
export default{
  components: {
    FooterNav
  },
  data () {
    return {
      isNowPage: true
    }
  }
}
</script>
