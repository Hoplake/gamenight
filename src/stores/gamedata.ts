import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const gameDataStore = defineStore('gamedata', () => {
  const gamedata = ref([])

  axios.get('/games.json')
  .then((response) => {
      gamedata.value = response.data;
  });

  return { gamedata }
})
