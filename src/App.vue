<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GameList from './views/GameList.vue'
</script>

<template>
    <v-layout class="rounded rounded-md">
    <v-app-bar title="Game Night" theme="dark"></v-app-bar>

    <v-navigation-drawer theme="dark">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px; max-width: 1300px;">
      <GameList/>
    </v-main>
  </v-layout>
</template>
