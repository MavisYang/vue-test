<template>
    <div class="ym-register-view">
         <input v-model.trim.lazy='params.userName' type="text" name="userName"  placeholder="请输入用户名">
          <input v-model.lazy='params.phone'  maxlength="11" type="text" name="phone"  placeholder="请输入手机号">
          <button class="btn" @click="submitFunc">提交</button>

          
    </div>
</template>

<script>
    export default {
        name:'register',
        props:[],
        data(){
            return{
                params:{
                    userName:'',
                    phone:''
                },
            }
        },
        
        methods:{
            submitFunc(){
                let userName = this.params.userName;
                let phone = this.params.phone;
                if(userName!=''&&phone!=''&&/^1\d{10}/.test(phone)){
                    console.log(this.params,'params');
                }else{
                    alert('格式不正确')
                }
            }
        }
    }
</script>

<style scoped lang='less'>
@color-FFFFFF:#fff;
.bgImg{
    background-image: linear-gradient(-133deg, #F95639 0%, #F03340 50%, #F03340 100%);
    box-shadow: 0 14px 29px 0 rgba(224,44,56,0.36);
}
.ym-register-view{
    input{
        margin: 20px 50px;
        width: 640px;
    }
}
button,input{
 font-size: 30px;
}
input {
    -webkit-appearance: none;
    outline: 0;
    border: 1px solid #F03340;
    font-size: 30px;
    color: #444444;
    text-indent: 40px;
    // width: 100%;
    height: 86px;
    line-height: 86px;
}
.btn{
    &:extend(.bgImg);
    border-radius: 100px;
    text-align: center;
    cursor: pointer;
    color: @color-FFFFFF;
    height: 88px;
    line-height: 88px;
    width: 640px;
    // width: 100%;
}
</style>