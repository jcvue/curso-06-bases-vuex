<template>
    <h1>Counter - Vuex</h1>
    <h2>Acceso Ditecto: {{ $store.state.counter.count }}</h2>
    <h2>mapState (counter): {{ count }}</h2>
    <h3>lastMutation: {{ lastMutation }}</h3>
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandom" :disabled="loading">+Random</button>
    <!-- <h3>squareCounter: {{ $store.getters['counter/squareCounter'] }}</h3> -->
    <h3>squareCounter: {{ squareCounter }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import { useStore } from '@/store';

export default defineComponent({
    data() {
        return {
            store: useStore()
        };
    },
    computed: {
        ...mapState('counter', ['count', 'lastMutation', 'loading']),
        ...mapGetters('counter', ['squareCounter'])
    },
    methods: {
        increment() {
            this.store.commit('counter/increment');
        },
        incrementBy() {
            this.store.commit('counter/incrementBy', 5);
        },
        ...mapActions('counter', { incrementRandom: 'incrementRandomAsync' })
    }
})
</script>
