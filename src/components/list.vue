<template>
    <div class="list1">
        <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="(item,index) in list" :key="index" @click="godetails(item.filmId)">
       <img :src="item.poster" alt="">
                <div class="details">
                    <p class="name">{{item.name}}{{item.item.name}}</p>
                    <span class="audience" v-show="type==='now'">观众:{{item.grade}}</span>
                    <p class="protagonist">导演:{{item.director}}</p>
                    <span class="nation">{{item.nation}}</span>|<span>{{item.runtime}}</span>
                </div>
                <div class="content">
                    购票
                </div>
  </li>
</ul>
        <!-- <ul>
            <li v-for="(item,index) in list" :key=index>
            </li>
        </ul> -->
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
export default {
    data(){
        return {
            type:'',
            list:[],
            loading:false,//表示可以发请求  true不可以发请求
            page:1,//当前得页码
        }
    },
    created(){
        this.getdata();
    },
    methods:{
        loadMore(){
             this.page++
             this.getdata();
        },
        getdata(){
            if(this.page>5){
                Toast({
                message:'已经到底了',
                position:'bottom',
                duration:2000
              })
              return;
            }
            var type = this.type==='now'?1:2;
            this.loading=true;//表示同时只能发一次请求
            this.$axios.get(`/mz/gateway?`,
            {
                params:{
                    cityId:110100,
                    pageNum:this.page,
                    pageSize:10,
                    type:type,
                    k:Date.now()
                },
   	   				headers:{
   	   					"X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"154399058310458245367575"}`,
						"X-Host": `mall.film-ticket.film.list`
   	   				}
   	   			}).then((res)=>{
                          this.list=this.list.concat(res.data.data.films);
                           this.loading=false;
   	   			})
        },
        godetails(id){
            this.$router.push("/dodetails/"+id)
        },
        restlist(){
            this.list=[];
            this.loading=false;
            this.page=1;
        },
    },
    watch:{
        $route:{
            handler(newv){
                console.log(newv)
                this.type = newv.params.type;
                this.getdata();
                this.restlist();
            },
            deep:true,
            immediate:true
        }
    }
}
</script>
<style>
.list1>ul>li{
    
    /* height:124px; */
    padding: 15px 15px 15px 0;
    height: 94px;
    display: flex;
}
.list1>ul>li>img{
    width:66px;
    height:90.83px;
}
.details{
    width:268.4px;
    height:81.2px;

    padding: 0 10px;
}
.content{
    width:50px;
       border: 1px solid #ff5f16;
    height:25px;
    margin-top:34.5px;
    text-align: center;
    line-height: 25px;
    color: #ff5f16;
}
.name{
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
}
.audience{
        font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
.protagonist{
        font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
.nation{
        font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
</style>