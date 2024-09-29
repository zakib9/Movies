<template>
    <div class=" mt-20 flex flex-col gap-4 bg-darkModeBackground w-full min-h-full text-white items-start justify-start p-10">
  <div class=" flex justify-between">
    <div class="flex flex-col gap-6">
      <h4 class=" text-2xl font-bold">Upcomming TV Shows</h4>
      <div v-for="date in store.state.upCommingTVShows.list" :key="date.date">
        <div class="flex flex-col gap-4">
            <h4 class=" text-xl font-bold">{{ date.date }}</h4>
         <div v-for="show in date.list " :key="show.link">
            <div class="flex gap-4">
            <img :src="show.image" alt="" class=" h-40 w-24">
            <div class="flex flex-col text-lg">
                <p><span class=" font-bold">Title: </span> {{show.title}}</p>
            </div>
            </div>

         </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';


const store = inject("store")
</script>
