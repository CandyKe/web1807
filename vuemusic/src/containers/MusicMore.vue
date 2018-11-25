<template lang="html">
  <div class="music-more">
    <MNav />
    <MoreList :data="musicData" :loadEvent="loadEvent" />
  </div>
</template>

<script>

import MNav from "../components/MNav"
import MoreList from "../components/MoreList"

export default {
	name:"MusicMore",
	data(){
		return{
			musicData:[],
			offset:0
		}
	},
	components:{
		MNav,
		MoreList
	},
	methods:{
		loadEvent(){
			this.http(this.offset);
		},
		http(os){
			this.$axios.get(this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset="+os)
			.then(res => {
				let allMusicData = this.musicData.concat(res.data.song_list)
				this.musicData = allMusicData,
				this.offset += 10
			})
			.catch(error => {
				console.log(error)
			})
		}
	},
	mounted(){
		this.http(0)
	}
}
</script>

<style lang="css" scoped>
</style>
