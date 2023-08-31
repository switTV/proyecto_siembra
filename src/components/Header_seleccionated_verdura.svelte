<script lang="ts">
    export let data:any

    function back_previous_page() {
        history.back()
    }
</script>

<style>
    .Header_seleccionated_verdura {
        width: 100vw;
        height: 400px;

        display: flex;
        justify-content: center;
    }
    .Header_seleccionated_verdura_container {
        width: 90vw;
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-direction: column;
    }

    .Header_seleccionated_verdura_back svg{
        width: 42px;
        height: 42px;
    }

    img {
        width: 200px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Header_seleccionated_verdura">
    <div class="Header_seleccionated_verdura_container">
        <div class="Header_seleccionated_verdura_back" on:click={back_previous_page}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 6l-6 6l6 6"></path>
             </svg>
        </div>
        <img src="{data.verdura.imagen}" alt="">
    </div>
</div>