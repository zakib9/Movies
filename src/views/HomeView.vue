<script setup>
import { inject } from 'vue';


const store = inject("store")
</script>

<template>
 <div class=" mt-20 flex flex-col gap-4 bg-darkModeBackground w-full min-h-full text-white items-start justify-start p-10">
  <div class=" flex justify-between">
    <div class="flex flex-col gap-6">
      <h4 class=" text-2xl font-bold">Top Movies</h4>
      <div v-for="movie in store.state.topMovies.movies" :key="movie.link">
        <div class="flex gap-4">
          <img :src="movie.image" alt="" class=" h-40 w-24">
          <div class="flex flex-col text-lg">
            <p><span class=" font-bold">Title: </span> {{movie.title}}</p>
            <p><span class=" font-bold">Year: </span>{{movie.year}}</p>
            <p><span class=" font-bold">Rating: </span> {{movie.imdbRating}}</p>
            <p><span class=" font-bold">Timeline: </span> {{movie.timeline}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <h4 class=" text-2xl font-bold">Trending</h4>
      <div v-for="movie in store.state.trending.movies" :key="movie.link">
        <div class="flex gap-4">
          <img :src="movie.image" alt="" class=" h-40 w-24">
          <div class="flex flex-col text-lg">
            <p><span class=" font-bold">Title: </span> {{movie.title}}</p>
            <p><span class=" font-bold">Year: </span>{{movie.year}}</p>
            <p><span class=" font-bold">Rating: </span> {{movie.imdbRating}}</p>
            <p><span class=" font-bold">Timeline: </span> {{movie.timeline}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
