<script>
    export let data
    import InfoVerduras from '../../../components/Info_verduras.svelte';
    import HeaderSeleccionatedVerdura from '../../../components/Header_seleccionated_verdura.svelte';
</script>

<style>
    img{
        width: 200px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<HeaderSeleccionatedVerdura {data}/>
<InfoVerduras {data}/>