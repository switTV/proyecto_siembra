<script lang="ts">
    import type { LayoutData } from './$types';
    import Header from '../components/Header.svelte';
    
    export let data: LayoutData;
</script>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>

<slot></slot>