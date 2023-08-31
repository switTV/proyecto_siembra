<script>
    import HeaderSeleccionatedVerdura from '../../../components/Header_seleccionated_verdura.svelte';
    export let data
    import InfoVerduras from '../../../components/Info_verduras.svelte';
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<HeaderSeleccionatedVerdura {data}/>
<InfoVerduras {data}/>