<template>
  <div class="home">
    <div class="main">
    <ImageSlider/>
    <News/>
    </div>
  <div class="sidebar">
    <FeaturedShows/>  
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider.vue'
import News from '@/components/News.vue'
import FeaturedShows from '@/components/FeaturedShows.vue'

export default {
  name: 'Home',
  components: {
    ImageSlider,
    News,
    FeaturedShows
  }
}
</script>
<style>
.home{
background:white ;
margin: auto;
width: 1000px;
display: flex;
flex-direction: row;
margin-top: 26px;
}
.main{
  width: 63%;
}
</style>
