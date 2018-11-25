<template>
  <div class="index">
  	<MNav />
    <CommandType :url="TodayCommand" title="今日推荐" :isMore="mfalse" />
    <CommandType :url="HotMusic" title="热门歌曲" :isMore="mtrue" />
    <CommandType :url="NewsMusic" title="新歌速递" :isMore="mtrue" />
    <Swipers />
    <MusicTab />
   </div>
</template>

<script>

import MNav from "../components/MNav"
import CommandType from "./Index/CommandType"
import Swipers from "../components/Swipers"
import MusicTab from "./Index/MusicTab"

export default {
  name: 'Index',
  data(){
  	return{
      mtrue:true,
      mfalse:false,
  		TodayCommand:this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6",
  		HotMusic:this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=6",
  		NewsMusic:this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=3"
  	}
  },
  components:{
  	MNav,
  	CommandType,
    Swipers,
    MusicTab
  }
}
</script>

<style>

</style>
