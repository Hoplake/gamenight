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
    <v-container>
        <v-row align="start" justify="center">
            <v-col v-for="game in games" cols="auto">
                <GameCard :game=game> </GameCard>
            </v-col>
        </v-row>
    </v-container>
</template>