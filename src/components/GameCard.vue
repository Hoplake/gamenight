<script setup lang="ts">
    const props = defineProps({
        game: Object
    })
</script>

<template>
    <v-card width="300px"
        theme="dark">
        <v-img
            class="align-end text-white"
            :src="'/images/' + game.image"
            height="300px"
            width="100%"
            cover>
        </v-img>
        <v-card-item>
            <v-card-title>{{ game.name }}</v-card-title>
            <v-card-subtitle v-if="game.subtitle != null">{{ game.subtitle }}</v-card-subtitle>
            <v-card-subtitle>{{ game.minplayers }} - {{ game.maxplayers }} Players, {{ game.gametime }} minutes</v-card-subtitle>
        </v-card-item>
        <v-card-actions v-if="game.guidevideos != null">
            <v-btn color="orange" v-for="(video, index) in game.guidevideos">
                <a :href="'{{ video.link }}'">How to Play <sup v-if="index > 0">#{{ index + 1 }}</sup></a>
            </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-text class="text-center">
            <v-chip variant="tonal" class="ma-1" color="orange" text-color="white" v-for="tag in game.tags">
                {{ tag.name }}
            </v-chip>
        </v-card-text>
    </v-card>
</template>