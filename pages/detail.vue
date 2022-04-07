<template>
    <div class="detail-page">
        <a-button type="primary" @click="$router.back()">Index Page</a-button>

        <div class="h-3" />
        <a-button type="primary" @click="$message.success('success')" class="mr-4">
            message
        </a-button>
        <a-button
            type="primary"
            @click="$notification.success({ message: 'success' })"
            class="mr-4"
        >
            notification
        </a-button>
        <a-button type="primary" @click="$info({ title: 'success' })" class="mr-4">info</a-button>
        <a-button type="primary" @click="$success({ title: 'success' })" class="mr-4">
            success
        </a-button>
        <a-button type="primary" @click="$error({ title: 'success' })" class="mr-4">error</a-button>
        <a-button type="primary" @click="$warning({ title: 'success' })" class="mr-4">
            warning
        </a-button>
        <a-button type="primary" @click="$confirm({ title: 'success' })" class="mr-4">
            confirm
        </a-button>

        <div class="h-3" />
        <a-button type="primary" @click="ok">fetch</a-button>
        <!-- 
        <div class="h-3" />
        <div class="h-3" /> -->
        <h3>detals page - langue</h3>

        <Hello />

        <a-button @click="counter++">+</a-button>
        {{ counter }}
        <a-button @click="counter--">-</a-button>

        <div class="h-3" />

        <a-empty />
    </div>
</template>

<script setup>
    const counter = useCounter();
    const { $axios } = useNuxtApp();
    async function ok() {
        console.log('axios', $axios);
        const { data } = await useFetch('https://test.elfinkingdom.com/contract/coin/contract');
        const data2 = await $axios.$get('/contract/coin/contract');
        console.log(data, data2);
    }
</script>