<template lang="html">
  <div class="category">
    <MNav />
    <HotCategory @hotCategoryEvent="getHotCategory" />
    <CategoryList :title="title" />
  </div>
</template>

<script>

import MNav from "../components/MNav"
import HotCategory from "../components/HotCategory"
import CategoryList from "./Category/CategoryList"


export default {
  name:"Category",
  data(){
  	return{
  		title:{
        categoryName:"流行",
        value:1
      }
  	}
  },
  components:{
    MNav,
    HotCategory,
    CategoryList
  },
  methods:{
  	getHotCategory(data){
  		this.title = data
  	}
  }
}
</script>

<style lang="css" scoped>
</style>
