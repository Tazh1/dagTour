<script setup>
const cards = [
  {
    title: 'Hisma Desert',
    descriptiom: 'The hisma desert is a true marvel of nature, and several desert oasis.',
    bg: "bg-[url('/Destinations1.jpg')]",
    avatar: '/WazeemAlMulk.jpg',
    name: 'Wazeem',
    prof: 'Traveler'
  },
  {
    title: 'Kafd World Trade Centre, Riyadh.',
    descriptiom: 'The Towering Structure stands as a testament to Saudi Arabia’s vision for a thriving business hub.',
    bg: "bg-[url('/Benjamin.jpg')]",
    avatar: 'kafd.jpg',
    name: 'Kafd',
    prof: 'Traveler'
  },
  {
    title: 'Al Qarah Mountain',
    descriptiom: 'The Mountain’s distractive rocks formations inviting adventures to explore its hidden treasure.',
    bg: "bg-[url('/Mountain.jpg')]",
    avatar: 'John .jpg',
    name: 'John',
    prof: 'Traveler'
  },
  {
    title: 'The best of Tabuk',
    descriptiom: 'Tabuk also spelled Tabouk, the capital city of the Tabuk Region in northwestern Saudi Arabia.',
    bg: "bg-[url('/Tabuk.jpg')]",
    avatar: 'Jonatan.jpg',
    name: 'Jonatan',
    prof: 'Traveler'
  },
  {
    title: 'AlUIa',
    descriptiom: 'AIUIa is located deep in the desert in the northwest of Saudi Arabia',
    bg: "bg-[url('/AlUIa.jpg')]",
    avatar: 'garrett.jpg',
    name: 'Garrett',
    prof: 'Traveler'
  },
  {
    title: 'The best things To do in Taif',
    descriptiom: 'Taif is a city and governorate in the Makkah Region of Saudi Arabia.',
    bg: "bg-[url('/Taif.jpg')]",
    avatar: 'Cristina.jpg',
    name: 'Cristina',
    prof: 'Traveler'
  }
]
</script>
<template>
  <div class="bg-black font-noraml text-5 text-center text-white flex-row">
    <h2 class="text-[32px]">Best Destinations</h2>
    <div class="text-[16px]">
      Explore the enchanting landscapes of saudi Arabia, from <br />
      the breathtaking deserts to the stunning coastal shores.<br />
    </div>
  </div>

  <div class="bg-black text-white px-[54px] grid-rows-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="item in cards" class="bg-no-repeat bg-cover aspect-[45/64] rounded-[16px] p-12" :class="[item.bg]">
      <div class="flex flex-col h-full">
        <div>
          <h2 class="text-[32px]">{{ item.title }}</h2>
          <div class="text-[16px] w-[270px]">
            {{ item.descriptiom }}
          </div>
        </div>
        <div class="flex mt-auto h-[80px]">
          <img class="rounded-[50%]" :src="item.avatar" alt="" />
          <div>
            <div>{{ item.name }}</div>
            <div>{{ item.prof }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
