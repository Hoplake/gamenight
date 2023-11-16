<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GameList from './views/GameList.vue'
</script>

<template>
    <v-layout class="rounded rounded-md">
    <v-app-bar title="Game Night" theme="dark"></v-app-bar>

    <v-navigation-drawer theme="dark" expand-on-hover rail>
      <v-list>
        <v-list-item prepend-icon="mdi-filter-cog" title="Filter games" subtitle="Played, new or all"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact">
        <v-list-item prepend-icon="mdi-cards-playing" title="Played Games" to="/played"></v-list-item>
        <v-list-item prepend-icon="mdi-new-box" title="New Games" to="/new"></v-list-item>
        <v-list-item prepend-icon="mdi-all-inclusive" title="All Games" to="/"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px; max-width: 1300px;">
      <RouterView/>
    </v-main>
  </v-layout>
</template>
