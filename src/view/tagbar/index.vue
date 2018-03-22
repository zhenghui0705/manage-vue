<template>
  <div class="content">
    <h2>新的页面</h2>
    <input type="button" value="点击就送" @click="setNum">
    <div id="box"></div>
    <footer-nav v-bind:class="{'lsTagbar':isNowpage}"></footer-nav>
  </div>
</template>

<script src="http://apps.bdimg.com/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"></script>
<script>
import FooterNav from "../../components/footer";
export default {
    components: {
        FooterNav
    },
    data(){
      return{
        isNowpage:true,
      }
    },
    methods:{
      setNum(){
        var Odiv = document.getElementById('box')
       
       
      }
    }
  }
</script>

<style scoped>
input{
  margin-top: 10px;
}
#box{
  width: 100px;
  height: 100px;
  background: #000;
  margin: 20px auto 0px;
  transform: translateY(0%);
}


</style>
