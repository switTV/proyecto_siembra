<script lang="ts">
    import { goto } from '$app/navigation';
    import type { PageData } from './$types';

    export let data: PageData;
    function hola() {
        goto("/Verano")
    }


</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
