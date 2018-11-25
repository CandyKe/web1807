<template lang="html">
  <div class="swipers">
    <swiper :options="swiperOption">
    	<swiper-slide v-for="(item,index) in imgs" :key="index">
    		<img :src="item" alt="">
    	</swiper-slide>
    	<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
	name:"Swipers",
	data(){
		return{
			imgs:[
				require("../assets/img/b1.jpg"),
				require("../assets/img/b2.jpg"),
				require("../assets/img/b3.jpg")
			],
			swiperOption:{
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:true,
        loop:true
      }
		}
	}
}
</script>

<style lang="css" scoped>
.swipers{
  padding: 10px;
}
</style>
