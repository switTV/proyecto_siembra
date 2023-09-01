<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    function back_to_verano() {
        goto("/Verano")
    }
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<button on:click={back_to_verano}></button>