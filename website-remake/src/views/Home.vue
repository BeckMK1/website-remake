<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
background:#f2f2f2 ;
}
</style>