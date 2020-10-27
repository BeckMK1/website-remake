<template>
  <div class="home">
    <ImageSlider/>
    <News/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider.vue'
import News from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    ImageSlider,
    News
  }
}
</script>
<style>
.home{
background:white ;
margin: auto;
width: calc(570px + 300px);
}
</style>
