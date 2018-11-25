<template lang="html">
	<div @click="backtopHander" class="backtop" v-show="showHide" ref="backtop">top</div>
</template>

<script>
	export default{
		name:"Backtop",
		data(){
			return{
				showHide:false
			}
		},
		methods:{
			backtopHander(event){
				document.documentElement.scrollTop = 0;
			}
		},
		mounted(){
			const _this = this;
			//监听滚动事件
			window.addEventListener("scroll",function(event){
				if(document.body.scrollTop || document.documentElement.scrollTop > window.screen.height){
					_this.showHide = true;
				}else{
					_this.showHide = false;
				}
			})
		}
	}
</script>

<style lang="css" scoped>

.backtop{
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  background: #999;
  border-radius: 5px;
  position: fixed;
  right: 10px;
  bottom: 20px;
  z-index: 999;
}

</style>