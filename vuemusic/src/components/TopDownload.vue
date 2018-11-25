<template>
  <div class="m-hometop">
    <div class="topfix">
    	<router-link tag="h1" to="/index" class="topfl">
            <img src="../assets/logo.jpg" alt="" />
            <span>网易云音乐</span>
        </router-link>
    	<div class="topfr">
    		<span>下载APP</span>
    	</div>
    </div>   
  </div>
</template>

<script>


export default {
  name: 'TopDownload'
}
</script>

<style>
.m-hometop{
	height: 64px;
}
.m-hometop .topfix{
	position: fixed;
	top: 0;
	left: 0;
    z-index: 9999;
	display: flex;
	align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 64px;
    background-color: #d43c33;
    box-sizing: border-box;
}
.topfl{
	position: relative;
	width: 142px;
	height: 25px;
	color: #fff;
	font-weight: normal;
	font-size: 20px;
}
.topfl img{
    width: 25px;
    height: 25px;
    border-radius: 5px;
}
.topfix .topfr{
	border: 1px solid #fff;
	border-radius: 20px;
	position: absolute;
	right: 10px;
}
.topfr span{
	position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #fff;
    font-size: 15px;
}

</style>
