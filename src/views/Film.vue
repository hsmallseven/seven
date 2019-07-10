<template>
    <div id="box1" v-gd="flag" dis=210>
        <div id="top" v-show="flag.vis">电影
            <div id="box5">
            <ul id="box5list">
                <p class="gocity" @click="gocitys">北京</p>
                <li><router-link to="/home/Film/now">正在上映</router-link></li>
                <li><router-link to="/home/Film/coming">即将上映</router-link></li>
            </ul>
         </div>
        </div>
        <div id="heade" >
             <p class="gocity" @click="gocitys">北京</p>
            <myswiper>
               
            </myswiper>
        </div>
        <div id="box5">
            <ul id="box5list">
                
                <li><router-link to="/home/Film/now">正在上映</router-link></li>
                <li><router-link to="/home/Film/coming">即将上映</router-link></li>
            </ul>
            <router-view />
         </div>
    </div>
</template>
<script>

import myswiper from './myswiper'
export default {
    components:{
        myswiper,
        
    },
    methods:{
        gocitys(){
            this.$router.push("/citys")

        }
    },
    data(){
        return {
            flag:{vis:false}
        }
    }
}
</script>
<style lang="scss">
    #box1{
        overflow: auto;
        // position: fixed;
        // top:0;
        height:12.36rem;
        width:100%;
        // height:100%;    
    }
    #heade{
        width:100%;
        height:4.2rem;
        position: relative;
    }
    #heade>img{
        width:100%;
        height:100%;
    }
        #box5list{
        width:100%;
        height:0.98rem;
        display: flex;
        position: relative;
        li{
            width:50%;
            height:100%;
            text-align: center;
            line-height:0.98rem;
        }
    }
    #top{
      position: fixed;
      width:100%;
      top:0;
      left:0;
      text-align: center;
      background: #FFF;  
      
    }
    .gocity{
        position: absolute;
        top:0.2rem;
        left:0.2rem;
        background: #f5f5f5;
        z-index: 100;
        width:0.5rem;
        opacity: 0.5;
        height:0.3rem;
        font-size: 12px;
        border-radius:20%; 

    }
</style>
