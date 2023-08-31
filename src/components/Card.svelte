<script lang="ts">
    import { goto } from "$app/navigation";

    import webStation from "../store/store";

    export let item:any
</script>

<style>
    .Card {
        background-color: #FFC300;
        width: 45%;
        min-height: 100px;
        margin-top: 10px;
        margin-right: 5px;
        margin-left: 5px;
        padding-left: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-radius: 5px;

    }

    .Card .Card_img {
        width: 100%;
        display: flex;
        justify-content: start;
        margin-top: 5px;
    }

    .Card h2 {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .Card img {
        width: 60px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Card" on:click={() => {goto(`/${$webStation}/${item.id}`)}}>
    <div class="Card_img">
        <img src="{item.imagen}" alt="">
    </div>
    <h2>{item.nombre}</h2>
</div>