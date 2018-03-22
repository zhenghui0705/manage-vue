<template>
  <div>
      <div class="bg-bubbles">
        <li v-for="i in 10"></li>
      </div>
      <footer-nav v-bind:class="{'lsSet':isNowPage}"></footer-nav>
  </div>
</template>

<script>
import FooterNav from "../../components/footer";
export default {
  components: {
    FooterNav
  },
  data(){
      return{
          isNowPage: true
      }
  }
}
</script>
