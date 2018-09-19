<!-- 模板文件 -->
<template>
  <div>
          <div @click="handleChangeProps(1)">{{propsMsg.userName}}</div>
          <div>{{propsMsg.phone}}</div>

          <div >{{changePropsMsg.userName}}</div>
          <div>{{changePropsMsg.phone}}</div>
  </div>
</template>
<script>
export default {
  props:['propsMsg','handleChangeProps'],
  data() {
    return {
      propsMsgs:this.propsMsg
    }
  },
  created() {},
  // 使用 prop 的值来定义一个计算属性：
  computed:{
    // 改变props值最好先定义在data中，然后在进行计算
    changePropsMsg(){
      // console.log(this.propsMsg,'propsMsg');
      return this.propsMsgs = Object.assign({},{userName:'YangMiaomiao',phone:139283022323},{});
    }
  },
  
  methods: {

  }
}

</script>
<style lang='less' scoped>


</style>
<style type="text/css">


</style>
