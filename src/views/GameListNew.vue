<script setup lang="ts">
    import axios from 'axios'
    import { onMounted,ref } from 'vue'
    import GameCard from '../components/GameCard.vue'

    const games = ref([])

    onMounted(() => {
        axios.get('/games.json')
            .then((response) => {
                games.value = response.data.filter((g : any) => g.played === false)
                games.value = games.value.sort((a : any, b : any) => a.name.localeCompare(b.name))
            });
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