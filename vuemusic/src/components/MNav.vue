<template>
  <div class="mnav">
  	<ul>
  		<router-link tag="li" to="/index">
        <span>首页</span>  
      </router-link>
      <router-link tag="li" to="/category">
        <span>分类</span>  
      </router-link>
  		<router-link tag="li" to="/hotmusic">
        <span>热歌曲</span>  
      </router-link>
  		<router-link tag="li" to="/search">
        <span>搜索</span>  
      </router-link>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'MNav'
}
</script>

<style scoped>
.mnav{
	height: 44px;
  width: 100%;

}
.mnav	ul{
	position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 8888;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  display: flex;
  text-align: center;
  border-bottom: 2px solid #F5F5F5;
}
.mnav ul li{
	flex: 1;
  font-size: 17px;
  height: 40px;
  text-align: center;
}
.mnav ul li span{
  position: relative;
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  color: #333;
  font-size: 15px;
  line-height: 40px;
}
.active span{
  color: #d33a31 !important;
  border-bottom: 2px solid #d33a31;
}
</style>
