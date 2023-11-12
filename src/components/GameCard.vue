<script setup lang="ts">
    const props = defineProps({
        game: Object
    })
</script>

<template>
    <v-card max-width="400px"
        theme="dark">
        <v-img
            class="align-end text-white"
            :src="'/images/' + game.image"
            height="400px"
            width="100%"
            cover>
        </v-img>
        <v-card-item>
            <v-card-title>{{ game.name }}</v-card-title>
            <v-card-subtitle>{{ game.minplayers }} - {{ game.maxplayers }} Players, {{ game.gametime }} minutes</v-card-subtitle>
        </v-card-item>
        <v-card-actions>
            <v-btn color="orange">
                How to Play
            </v-btn>
            <v-btn color="orange">
                How to Play #2
            </v-btn>
        </v-card-actions>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="text-center">
            <v-chip variant="tonal" class="ma-2" color="orange" text-color="white" v-for="tag in game.tags">
                {{ tag.name }}
            </v-chip>            
        </v-card-text>
    </v-card>
</template>