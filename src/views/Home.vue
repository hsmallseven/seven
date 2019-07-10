<template>
  <div class="home">
    <router-view/>
    <ul class="honelist">
      <li>
        <router-link to="/home/Film">影片</router-link>
      </li>
      <li>
        <router-link to="/home/Cinema">影院</router-link>
      </li>
      <li>
        <router-link to="/home/Preferential">特惠</router-link>
      </li>
      <li>
        <router-link to="/home/my">我的</router-link>
      </li>
      
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  // name: "home",
  components: {

  }
};
</script>
<style>
  .honelist{
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    display: flex;
  }
  .honelist>li{
    width:25%;
    height:49px;
    text-align: center;
    line-height: 49px;
  }
</style>
