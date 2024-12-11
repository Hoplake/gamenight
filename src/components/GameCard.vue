<script setup lang="ts">
    const props = defineProps({
        game: {type: Object, required: true}
    })
</script>

<template>
    <v-card width="300px"
        theme="dark">
        <a :href="game.bgg">
            <v-img
                class="align-end text-white"
                :src="'/images/' + game.image"
                height="300px"
                width="100%"
                cover>
            </v-img>
        </a>
        <div v-if="!game.played">
            <v-divider></v-divider>
            <v-card-item class="text-center">
                <v-chip class="ma-2" color="cyan" to="/new"> <v-icon start icon="mdi-shimmer"></v-icon> New Game to Try</v-chip>
            </v-card-item>
            <v-divider></v-divider>
        </div>
        <v-card-item>
            <v-card-title>{{ game.name }}</v-card-title>
            <v-card-subtitle v-if="game.subtitle != null">{{ game.subtitle }}</v-card-subtitle>
            <v-card-text class="text-center">
                <v-chip class="ma-1" color="primary" label>
                    <v-icon start icon="mdi-account-group"></v-icon>
                    {{ game.minplayers }} - {{ game.maxplayers }} Players
                </v-chip>
                <v-chip class="ma-1" color="primary" label>
                    <v-icon start icon="mdi-clock-time-eight"></v-icon>
                    {{ game.gametime }} min.
                </v-chip>
            </v-card-text>
            <v-card-text v-if="game.description != null">
                {{ game.description }}
            </v-card-text>
        </v-card-item>
        <v-card-actions v-if="game.guidevideos != null">
            <v-btn color="orange" v-for="(video, index) in game.guidevideos">
                <a :href="video.link" target="_blank">How to Play <sup v-if="index > 0">#{{ index + 1 }}</sup></a>
            </v-btn>
        </v-card-actions>
        <v-card-actions class="align-center">
            <v-btn color="orange">
                <a :href="game.bgg">BoardGameGeek</a>
            </v-btn>
        </v-card-actions>
        <v-card-text class="text-center">
            <v-chip variant="tonal" class="ma-1" color="orange" text-color="white" v-for="tag in game.tags">
                {{ tag.name }}
            </v-chip>
        </v-card-text>
    </v-card>
</template>