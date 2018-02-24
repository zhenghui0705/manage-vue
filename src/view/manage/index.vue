<template>
  <div class="manage tc">
      <!-- v-show指令与v-if指令的区别就在于，前者一开始就加载，更适用于频繁的切换，后者需首先判断布尔值，为true才加载渲染 -->
      <button v-on:click="add">新增</button>
      <div class="input-area" v-show="showAdd">
          <input type="text" placeholder="请输入人员姓名" v-model="nameValue">
          <button v-on:click="addName">确认</button>
      </div>
      <div class="input-text">
        <table>
          <tr>
              <th>姓名</th>
              <th>操作</th>
          </tr>
          <tr v-for="(item,index) in peoples">
              <td>
                  {{item.name}}
                </td>
              <td v-bind:id="index">
                  <span v-on:click="edit">编辑</span>
                  <span v-on:click="del">删除</span>
              </td>
          </tr>
       </table>
       <div class="wrap" v-show="showEdit">
           <div class="content">
               <input type="text" placeholder="请输入姓名" v-model="newName">
               <button v-on:click="cancel">取消</button>
               <button v-on:click="editName">确定</button>
           </div>
       </div>
      </div>
      <footer-nav v-bind:class="{'lsManage':isNowPage}"></footer-nav>
  </div>
</template>
<style scoped>
.manage {
  margin-top: 24px;
}
table {
  text-align: center;
  margin: 2rem auto;
  width: 100%;
}
.input-area {
  margin: 20px auto;
}
.input-area input {
  border: 2px solid #c3b8b8;
  padding: 2px 10px;
  width: 100px;
  margin: 0 10px;
}
.manage button {
  border: none;
  padding: 2px 10px;
  background: cornflowerblue;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
}

.input-text {
  font-size: 14px;
  text-indent: 2em;
}

.wrap{
    display: table;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
.wrap .content{display:table-cell; vertical-align:middle;}
.wrap .content input{height: 40px;line-height: 40px;display: block;margin: 0 auto;padding: 0 5px;width: 66%;}
.wrap .content button{height: 30px;width: 100px;line-height: 30px;font-size: 12px;color: #fff;margin: 20px 0px;}
</style>

<script>
import FooterNav from "../../components/footer";
export default {
  components: {
    FooterNav
  },
  data() {
    return {
      isNowPage: true,
      showAdd: false,
      showEdit: false,
      peoples: [{ name: "周杰伦" }, { name: "方文山" }],
      nameValue: '',
      newName: '',
      editId: 0
      
    };
  },
  methods: {
    add() {
      this.showAdd = true;
    },
    addName() {
      var v = this.nameValue;
      if (v.trim() == "") {
        // trim函数自动过滤首尾空白字符
        alert("请输入新增人员姓名");
      } else {
        var data = {};
        data.name = v;
        this.peoples.push(data);
      }
    },
    del(e) {
      var id = e.target.offsetParent.id;
      this.peoples.splice(id, 1);
    },
    edit(e){
        var id = e.target.offsetParent.id
        this.showEdit = true
        this.editId = id
        this.newName = this.peoples[id].name
    },
    cancel(){
        this.showEdit = false
    },
    editName(){
        var v = this.newName
        if(v.trim() == ""){
            alert("请输入姓名")
        }else{
            this.peoples[this.editId].name = this.newName
            this.showEdit = false
        }
    }
    
  }
};
</script>
