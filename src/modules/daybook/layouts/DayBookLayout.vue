<template>
    <NavBar />

    <div class="d-flex">
        <div class="col-4">
            <Entrylist />
        </div>
        <div class="col">
            <router-view />
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    
    components:{

        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        Entrylist: defineAsyncComponent (() =>import('../components/EntryList.vue') )
    }
}
</script>