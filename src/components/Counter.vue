<template>
    <h1>Counter - Vuex</h1>
    <h2>Acceso Ditecto: {{ $store.state.root.counter }}</h2>
    <h2>mapState (counter): {{ counter }}</h2>
    <h3>lastMutation: {{ lastMutation }}</h3>
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandom" :disabled="loading">+Random</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import { useStore } from '@/store';

export default defineComponent({
    data() {
        return {
            store: useStore()
        };
    },
    computed: {
        ...mapState('root', ['counter', 'lastMutation', 'loading']),

    },
    methods: {
        increment() {
            this.store.commit('root/increment');
        },
        incrementBy() {
            this.store.commit('root/incrementBy', 5);
        },
        ...mapActions('root', { incrementRandom: 'incrementRandomAsync' })
    }
})
</script>
