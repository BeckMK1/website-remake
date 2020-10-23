<template>
  <div class="home">
    <ImageSlider/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Home',
  components: {
    ImageSlider
  }
}
</script>
<style>
.home{
background:white ;
margin: auto;
margin-left: 200px;
margin-right: 200px;
}
</style>
