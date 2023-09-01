<script lang="ts">
    import Nav from "./Nav.svelte";
    import webStation from "../store/store"
</script>

<style>

    .Header {
        position: relative;
    }

    .Header_img {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
    }

    .Header_text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 300px;
    }

    .Header_text h2 , p{
        font-family: Montserrat, sans-serif;
        color: #fff;
        text-shadow: 2px 2px 2px #524e4d;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Header">
    <Nav></Nav>
    <div class="Header_text">
        <p>Calendario de</p>
        <h2>{$webStation}</h2>
    </div>
    <div class="Header_img" style="background-image: url('https://raw.githubusercontent.com/switTV/verduras_imgs/main/assets/{$webStation}.jpg');">
        
    </div>
</div>