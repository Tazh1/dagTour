<script setup lang="ts">
import { TOP_MENU } from '~/constants'
</script>
<template>
  <nav class="bg-white border-gray-200 bg-transparent">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo.svg" class="h-12 pt-2 -mt-4" alt="Flowbite Logo" />
      </NuxtLink>
      <UButton
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </UButton>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
        class="font-medium  flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li v-for="item in TOP_MENU">
            <NuxtLink
              :to="item.link"
              class="block py-2 px-3 !text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              aria-current="page"
              >{{ item.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
