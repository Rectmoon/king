<template>
  <div :style="{ width: '100%', height: '100%' }">
    <div id="animationWindow" :style="{ width: '100%', height: '100%' }" />
  </div>
</template>

<script>
import bodymovin from 'bodymovin'
export default {
  mounted() {
    const animData = {
      wrapper: document.querySelector('#animationWindow'),
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      animationData: require('./data.json')
    }
    this.anim = bodymovin.loadAnimation(animData)
    this.anim.setSpeed(1.42)
  },
  beforeDestroy() {
    this.anim = null
  }
}
</script>

<style></style>
