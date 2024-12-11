<script setup lang="ts">
    import { onMounted,ref } from 'vue'
    import GameCard from '../components/GameCard.vue'
    import { gameDataStore } from '../stores/gamedata'

    const games = ref([])

    onMounted(() => {
      games.value = gameDataStore().gamedata
      games.value = games.value.filter((g : any) => g.played === false)
    });


</script>

<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-col v-for="game in games" cols="auto">
          <GameCard :game=game> </GameCard>
      </v-col>
    </v-row>
  </v-container>
</template>