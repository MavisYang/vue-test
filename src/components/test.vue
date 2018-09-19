<template>
    <div class="test-view">
        <p>{{now}}</p>
        <p><span>{{msg}}</span></p>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <p>
            adkakan
            <a href="https://translate.google.cn/#en/zh-CN/scoped">link</a>
            <!-- <a v-on:click="doSomething">doSomething</a>     -->
        </p>
        <p>{{message.split('').reverse().join('')}} {{isActive}}</p>
        <p class="static" :class="{'active':isActive,'numColor':isNum==1}">
          active: "{{ message }}"
        </p>
        <p v-bind:style="styleObject">
          Computed reversed message: "{{ reversedMessage }}"
        </p>
        <ul>
          <li v-for="(item,index) in evenNumbers" :key="index">{{ item }}</li>
        </ul>
        <div>
          <button v-on:click='greet'>Greet click</button>
          <button @click.stop='greet'>Greet click @</button>
          <button @keyup.enter='warn("Form cannot be submitted yet",$event)'>submit</button>
        </div>
        <ButtonCom :propsMsg='initParams' :handleChangeProps='handleChangeProps'/>
    </div>
</template>

<script>
import RegisterMain from "./registerProtal/registerMain";
import ButtonCom from "./ButtonCom";
export default {
  name: "test",
  components:{
    RegisterMain,ButtonCom
  },
  data() {
    return {
      msg: "我是test",
      rawHtml: "this should be red",
      message: "我是计算属性",
      isActive: true,
      isNum:1,
      styleObject:{
        color: 'red',
        fontSize: 30
      },
      numbers: [ 1, 2, 3, 4, 5 ],
      initParams:{
        userName:'mavis',
        phone:1839283923
      }
      
    };
  },
  //计算属性
  computed: {
    now() {
      return new Date(); //Date.now() 时间戳
    },
    evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  },
    // 计算属性的 getter
    reversedMessage() {
      // `this` 指向 vm 实例
      return this.message .split("") .reverse() .join("");
    }
  },
//   侦听属性
  watch:{
    // firstName: function (val) {
    //   this.fullName = val + ' ' + this.lastName
    // },
    // lastName: function (val) {
    //   this.fullName = this.firstName + ' ' + val
    // }
  },
  // 在 `methods` 对象中定义方法
  methods:{
    greet(e){
      console.log('Hello ' +this.msg + this.message);
      if(e){
        console.log(e.target.tagName);
      }
    },
    warn(message,event){
      if(event) event.preventDefault()
      console.log(message);
    },
    handleChangeProps(index){
      this.initParams.userName = 'click name'+index
    }
  }
};

</script>

<style scoped lang='scss'>
$red:red;
$yellowgreen:yellowgreen;
$blue:blue;
%font-36px-Regular{
 font-family: PingFangSC-Regular;
 font-size: 36px;
}
@mixin border-radius {
     -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
.test-view {
  @extend %font-36px-Regular;
}
.static{
  color: $blue;
}
.active{
  color:$red;
  @include border-radius;
}
.numColor{
  color: $yellowgreen;
}
button{
   @extend %font-36px-Regular;
}
</style>