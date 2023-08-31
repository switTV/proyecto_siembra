<script lang="ts">
    import type { PageData } from './$types';
    import verduras from "../../json/verduras.json"
    import Card from '../../components/Card.svelte';
    import Header from '../../components/Header.svelte';
    
    export let data: PageData;
</script>

<style>
    .container_cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
    }
</style>

<!-- markup (zero or more items) goes here -->
<Header></Header>
<div class="container_cards">
    {#each verduras["Invierno"] as item}
        <Card {item}></Card>
    {/each}
</div>