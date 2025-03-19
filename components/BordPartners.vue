<template>
  <div class="py-[66px] bg-black">
    <div class="grid place-items md:flex mt-0 gap-[71px] md:h-[121px] justify-center">
      <div v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['partners1.png', 'partners2.png', 'partners3.png', 'partners4.png']
    }
  }
}
</script>
