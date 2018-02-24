<template>
  <div>
      <h2>this is new content!</h2>
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
