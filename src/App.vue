<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import MobileNav from '@/components/MobileNav.vue'
</script>

<template>
  <MobileNav />
  <div
    class="h-full bg-[url('../images/hero-bg-img.png')] bg-cover bg-no-repeat bg-center bg-[#DAEEF1] dark:bg-[url('../images/home2-hero-bg-dark.png')] dark:bg-dark_primary_bg md:pb-[90px]"
  >
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
