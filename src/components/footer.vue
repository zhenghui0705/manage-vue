<template>
  <div class="footer fixed">
      <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="./manage">人员管理</router-link></li>
          <li><router-link to="./set">泡泡</router-link></li>
          <li><router-link to="./Tagbar">设置</router-link></li>
      </ul>
  </div>
</template>

<style scoped>
    li a{display: inline-block;width: 100%;height: 100%;}
    .footer{width: 100%;height: 50px;bottom: 0;}
    ul{display: flex;height: 100%;line-height: 50px;}
    ul li{flex: 1;background: #f1f1f1;}
    ul li a{font-size: 14px;font-family: "Microsoft YaHei UI Light";font-weight: 700;}
    .lsIndex li:nth-child(1){background: #d3d3d3;}
    .lsIndex li:nth-child(1) a{color: #41b833}
    .lsManage li:nth-child(2){background: #d3d3d3}
    .lsManage li:nth-child(2) a{color: #41b833;}
    .lsSet li:nth-child(3){background: #d3d3d3}
    .lsSet li:nth-child(3) a{color: #41b833;}
    .lsTagbar li:nth-child(4){background:#d3d3d3}
    .lsTagbar li:nth-child(4) a{color: #41b833}
</style>
