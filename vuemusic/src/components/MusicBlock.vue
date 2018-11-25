<template lang="html">
  <div class="collection-block">
    <div class="block-padding">
    	<div class="title">
    		<h3>{{title}}</h3>
    		<router-link to="/musicmore" class="btn-more" v-if="isMore">更多</router-link>
    	</div>
    	<div class="list clearfix">
    		<router-link tag="div" :to="{name:'PlayMusic',params:{id:item.song_id}}" :key="index" v-for="(item,index) in data" class="item" :class="{'clear-padding':index%3 !== 1}">
    			<div class="img-wrapper">
    				<img :src="item.pic_s500" alt="">
    			</div>
    			<div class="main">{{item.title}}</div>
    			<div class="gray">{{item.author}}</div>
    		</router-link>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  name:"MusicBlock",
  data(){
    return{

    }
  },
  props:{
  	data:{
  		type:Array,
  		default:function(){
  			return []
  		}
  	},
  	title:{
  		type:String,
  		default:""
  	},
  	isMore:{
  		type:[String,Boolean],
  		default:false
  	}
  }
}
</script>

<style lang="css" scoped>

.collection-block{
  background-color: #f8f8f8;
  padding-bottom: 10px;
}
.block-padding{
  padding: 10px 17px;
  background-color: #fff;
}

.title{
  display: flex;
  margin: 14px 0 18px;
}

.title h3{
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}

.list{
  width: 100%;
}

.list .item{
  float: left;
  width: 31.33%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.clear-padding{
  padding: 0 !important;
}

.main{
  margin-top: 4px;
  font-size: 12px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.gray{
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}

.btn-more{
  font-size: 12px;
  text-align: right;
  color: #333;
}

</style>
