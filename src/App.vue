<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const showMenu = ref(false)


</script>

<template>

    
    
    <div  class=" bg-darkModeElements text-xl fixed w-full top-0 shadow-md text-white"
      >
        <div class="flex justify-between items-center my-4 gap-8 w-3/4 mx-auto">
          <a href="#">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-film fa-2xl" style="color: #cf2e26;"></i>
              <h4 class=" text-4xl">Movies<span class="text-primary ">.</span></h4>
            </div>
          </a>
          <div class="hidden xl:flex gap-8 justify-center items-center ">
          
            <ul class="flex space-x-8 justify-center items-center text-lightModeInput ">
              <li>
                <div class="h-min px-6  flex gap-6 rounded-full border border-lightModeInput items-center overflow-hidden">
                <i class="fa-solid fa-magnifying-glass fa-xl text-lightModeInput hover:text-primary transition-colors duration-300" ></i>
                <input
                type="text"
                
                placeholder="Search for a country..."
                class=" placeholder:text-lg bg-transparent p-4 focus:outline-none">
                            </div>
              </li>
              <li><RouterLink to="/" class="  cursor-pointer border-b-4 border-darkModeElements pb-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">Home</RouterLink></li>
              <li><RouterLink to="/" class="  cursor-pointer border-b-4 border-darkModeElements pb-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">Movies</RouterLink></li>
              <li><RouterLink to="/tv-shows" class="  cursor-pointer border-b-4 border-darkModeElements pb-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">TV Shows</RouterLink></li>
              <li><RouterLink to="/" class="  cursor-pointer border-b-4 border-darkModeElements pb-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">News</RouterLink></li>
             
              <li><RouterLink to="/" class="  cursor-pointer border-b-4 border-darkModeElements pb-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">Contact</RouterLink></li>
            </ul>
          </div>
          <svg  @click="showMenu = !showMenu" class=" h-6 lg:h-8  xl:hidden fill-white hover:fill-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
          
          
        </div>
    </div>
    
      <transition 
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform translate-x-48"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform translate-x-48">
        <div v-if="showMenu" class=" fixed top-16 right-0 flex flex-col h-screen w-fit bg-darkModeElements gap-8 p-8 items-center shadow-md text-primary text-xl ">
        
          <ul class="flex flex-col gap-4  justify-center text-lightModeInput ">
              <li>
                <div class="h-min px-6  flex gap-6 rounded-full border border-lightModeInput items-center overflow-hidden">
                <i class="fa-solid fa-magnifying-glass fa-xl text-lightModeInput hover:text-primary transition-colors duration-300" ></i>
                <input
                type="text"
              
                placeholder="Search for a country..."
                class=" placeholder:text-lg bg-transparent p-4 focus:outline-none">
                            </div>
              </li>
              <li><RouterLink to="/" class="  cursor-pointer border-l-4 border-darkModeElements pl-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">Home</RouterLink></li>
              <li><RouterLink to="/" class="  cursor-pointer border-l-4 border-darkModeElements pl-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">Movies</RouterLink></li>
              <li><RouterLink to="/tv-shows" class="  cursor-pointer border-l-4 border-darkModeElements pl-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">TV Shows</RouterLink></li>
              <li><RouterLink to="/" class="  cursor-pointer border-l-4 border-darkModeElements pl-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">News</RouterLink></li>
             
              <li><RouterLink to="/" class="  cursor-pointer border-l-4 border-darkModeElements pl-2 transition-colors duration-500 hover:text-white focus:text-white focus:border-primary">Contact</RouterLink></li>
            </ul>
           
            </div>
      </transition>

  <div class=" bg-darkModeBackground min-h-screen">
    <RouterView />
  </div>
</template>

