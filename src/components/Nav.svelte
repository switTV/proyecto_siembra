<script lang="ts">
    import { goto } from "$app/navigation";
    import webState from "../store/store";
    function change_station(station_name:string) {
        goto(`/${station_name}`)
        webState.set(station_name)
    }
</script>

<style>
    .Nav {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .Nav div {
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #fff;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Nav">
    <div class="Nav_sun" on:click={() => {change_station("Verano")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
            <path d="M6.343 17.657l-1.414 1.414"></path>
            <path d="M6.343 6.343l-1.414 -1.414"></path>
            <path d="M17.657 6.343l1.414 -1.414"></path>
            <path d="M17.657 17.657l1.414 1.414"></path>
            <path d="M4 12h-2"></path>
            <path d="M12 4v-2"></path>
            <path d="M20 12h2"></path>
            <path d="M12 20v2"></path>
        </svg>
    </div>
    <div class="Nav_otoño" on:click={() => {change_station("Otoño")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-leaf" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 21c.5 -4.5 2.5 -8 7 -10"></path>
            <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"></path>
         </svg>
    </div>
    <div class="Nav_snowflake" on:click={() => {change_station("Invierno")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-snowflake" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 4l2 1l2 -1"></path>
            <path d="M12 2v6.5l3 1.72"></path>
            <path d="M17.928 6.268l.134 2.232l1.866 1.232"></path>
            <path d="M20.66 7l-5.629 3.25l.01 3.458"></path>
            <path d="M19.928 14.268l-1.866 1.232l-.134 2.232"></path>
            <path d="M20.66 17l-5.629 -3.25l-2.99 1.738"></path>
            <path d="M14 20l-2 -1l-2 1"></path>
            <path d="M12 22v-6.5l-3 -1.72"></path>
            <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232"></path>
            <path d="M3.34 17l5.629 -3.25l-.01 -3.458"></path>
            <path d="M4.072 9.732l1.866 -1.232l.134 -2.232"></path>
            <path d="M3.34 7l5.629 3.25l2.99 -1.738"></path>
         </svg>
    </div>
    <div class="Nav_flowers" on:click={() => {change_station("Primavera")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flower" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M12 2a3 3 0 0 1 3 3c0 .562 -.259 1.442 -.776 2.64l-.724 1.36l1.76 -1.893c.499 -.6 .922 -1 1.27 -1.205a2.968 2.968 0 0 1 4.07 1.099a3.011 3.011 0 0 1 -1.09 4.098c-.374 .217 -.99 .396 -1.846 .535l-2.664 .366l2.4 .326c1 .145 1.698 .337 2.11 .576a3.011 3.011 0 0 1 1.09 4.098a2.968 2.968 0 0 1 -4.07 1.098c-.348 -.202 -.771 -.604 -1.27 -1.205l-1.76 -1.893l.724 1.36c.516 1.199 .776 2.079 .776 2.64a3 3 0 0 1 -6 0c0 -.562 .259 -1.442 .776 -2.64l.724 -1.36l-1.76 1.893c-.499 .601 -.922 1 -1.27 1.205a2.968 2.968 0 0 1 -4.07 -1.098a3.011 3.011 0 0 1 1.09 -4.098c.374 -.218 .99 -.396 1.846 -.536l2.664 -.366l-2.4 -.325c-1 -.145 -1.698 -.337 -2.11 -.576a3.011 3.011 0 0 1 -1.09 -4.099a2.968 2.968 0 0 1 4.07 -1.099c.348 .203 .771 .604 1.27 1.205l1.76 1.894c-1 -2.292 -1.5 -3.625 -1.5 -4a3 3 0 0 1 3 -3z"></path>
         </svg>
    </div>
</div>