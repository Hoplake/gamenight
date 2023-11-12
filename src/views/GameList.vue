<script setup lang="ts">
    import axios from 'axios'
    import { onMounted,ref } from 'vue'
    import GameCard from '../components/GameCard.vue'

    const games = ref('')

    onMounted(() => {
        axios.get('/games.json')
            .then((response) => {
                console.log(response.data)
                games.value = response.data.sort((a : String, b : String) => a.name.localeCompare(b.name))
            });
    });

    
</script>

<template>
    <v-row justify="space-around" wrap class="five-cols">
        <v-col v-for="game in games">
            <GameCard :game=game> </GameCard>   
        </v-col>
    </v-row>
</template>
<style>
.five-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>