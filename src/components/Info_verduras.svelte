<script lang="ts">
    export let data:any
    let toggle_info_text = false
    
    const read_info_text = () => {
        toggle_info_text = !toggle_info_text
        let utterance = new SpeechSynthesisUtterance(data.verdura.descripcion);
        let voices = window.speechSynthesis.getVoices()

        utterance.lang = "ES"
        utterance.voice = voices[4]
        speechSynthesis.speak(utterance)
        
        utterance.onend = (e) => {
            toggle_info_text = false
        }
        
        if(toggle_info_text === false) {
            speechSynthesis.cancel()
        }

        
    }
</script>

<style>
    
    .Info_verduras_middle_section p {
        color: #000814;
        font-family: "Montserrat", sans-serif;
    }
    
    .Info_verduras_top_section {
        display: flex;
        justify-content: start;
        padding-bottom: 20px;
        width: 90%;
    }
    
    .Info_verduras_top_section h2{
        font-family: Montserrat, sans-serif;
        color: #000814;
        margin-top: 20px;
        border-bottom: 2px solid #FFC300;
    }
    
    .Info_verduras_middle_section {
        display: grid;
        width: 90%;
        grid-auto-columns: 1fr; 
        grid-auto-rows: 1fr; 
        grid-template-columns: 1.3fr 0.7fr; 
        grid-template-rows: 1fr; 
        height: 80px;
        gap: 10px 10px; 
        grid-template-areas: 
        "Info_verduras_nombre_cientifico Info_verduras_temperatura_suelo"; 
    }
    .Info_verduras_nombre_cientifico { 
        grid-area: Info_verduras_nombre_cientifico;
        background-color: #FFC300;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Info_verduras_temperatura_suelo {
        grid-area: Info_verduras_temperatura_suelo;
        background-color: #FFC300;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000814;
        padding: 5px;
    }
    
    .container_Info_verduras {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .Info_verduras_bottom_container {
        padding: 10px;
        border-radius: 5px;
        background-color: #FFC300;
        margin-top: 10px;
        width: 90%;
    }

    .Info_verduras_bottom_container p{
        color: #000814;
        font-family: "Montserrat", sans-serif;
        line-height: 25px;
        margin-bottom: 10px;
    }

    .Info_verduras_apart_section {
        width: 90%;
        height: 60px;
        background-color: #FFC300;
        margin-top: 10px;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat", sans-serif;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="Info_verduras">
    <div class="container_Info_verduras">
        <div class="Info_verduras_top_section">
            <h2>{data.verdura.nombre}</h2>
        </div>
        <div class="Info_verduras_middle_section">
            <p class="Info_verduras_nombre_cientifico">{data.verdura.nombre_cientifico}</p>
            <p class="Info_verduras_temperatura_suelo">temperatura suelo: <br>{data.verdura.temperatura_suelo}</p>
        </div>
        <div class="Info_verduras_bottom_container">
            <p>{data.verdura.descripcion}</p>
            <div class="Info_verduras_bottom_loudspeaker" on:click={read_info_text}>
                {#if toggle_info_text == false}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-volume-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                        <path d="M16 10l4 4m0 -4l-4 4"></path>
                    </svg>
                    {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-volume" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 8a5 5 0 0 1 0 8"></path>
                        <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                    </svg>
                {/if}
            </div>
        </div>
        <div class="Info_verduras_apart_section">
            <p>Dias de germinación: {data.verdura.promedio_dias_germinado}</p>
        </div>
    </div>
</div>