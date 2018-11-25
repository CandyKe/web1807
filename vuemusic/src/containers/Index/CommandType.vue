<template lang="html">
  <div class="command-type">
    <MusicBlock :data="msuicData" :title="title" :isMore="isMore" />
  </div>
</template>

<script>

import MusicBlock from "../../components/MusicBlock"

export default {
  name:"CommandType",
  data(){
    return{
      msuicData:[]
    }
  },
  components:{
    MusicBlock
  },
  props:{
    url:{
      type:String,
      default:""
    },
    title:{
      type:String,
      default:""
    },
    isMore:{
      type:[String,Boolean],
      default:""
    }
  },
  mounted(){
    this.$axios.get(this.url)
    .then(res => {
      console.log(res.data)
      this.msuicData = res.data.song_list
    })
    .catch(error => {
      console.log(error);
    })
  }

}
</script>

<style lang="css" scoped>
</style>
