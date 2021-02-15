<script>
    import Action from './Action.svelte'
    import PlayAgainButton from './PlayAgainButton.svelte'
    import Glowable from './Glowable.svelte'

    import { icons as wr_icons } from '../@compute/data';
    import { gradients } from '../@compute/data';
    import { fade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';


    export let verdict = null;
    export let word = '', variant;
    export let selectedAction;
    export let randomAction;
    // export let winnerHouse = false;
    export let houseVisible = false;
    export let status = -1;

    const icons = variant === 'rps' ? wr_icons.rps : wr_icons.rpsls

</script>
<style>
    .mw-70{
        max-width: 70%;
    }
</style>
<div
    class="grid grid-cols-9 gap-4 md:mt-8 mx-auto w-screen mw-70"
>
    <div
        class="col-start-1 col-span-4 flex flex-col justify-center items-center"
    >
        <span class="order-2 md:order-1 uppercase barlow text-white shadow-sm mt-4 whitespace-nowrap md:text-lg md:mb-8"> you picked </span>
        <div class="order-1 md:order-2">
            <Glowable
                glow={status === 1}
            >
                <Action
                    icon={icons[selectedAction]}
                    gradient={gradients[selectedAction]}
                    name={selectedAction}
                    xl={60}
                    lg={52}
                    md={48}
                />
            </Glowable>
            
        </div>
        <span class="order-3 uppercase barlow text-white shadow-sm whitespace-nowrap mt-4 text-lg md:text-2xl"> {selectedAction} </span>
    </div>
    <span class="col-start-5 col-span-1 flex flex-col items-center justify-center uppercase barlow text-white text-center shadow-sm text-lg md:text-2xl whitespace-nowrap">
        {#if verdict && houseVisible}
            <span in:fade={{duration: 1000, easing: cubicInOut}}> {word} </span>
        {:else}
            <span in:fade={{duration: 1000, easing: cubicInOut}} >...</span>
        {/if}      
    </span>
    <div
        class="col-end-10 col-span-4 flex flex-col justify-center items-center" 
    >
        <span class="order-2 md:order-1 uppercase barlow text-white shadow-sm mt-4 whitespace-nowrap md:text-lg md:mb-8"> the house picked </span>
        <div class="order-1 md:order-2">
            <Glowable
                glow={status === 2}
            >
                <Action
                    icon={icons[randomAction]}
                    gradient={gradients[randomAction]}
                    name={randomAction}
                    xl={60}
                    lg={52}
                    md={48}
                    visible={houseVisible}
                />
            </Glowable>
            
        </div>
        <span class="order-3 uppercase barlow text-white shadow-sm mt-4 text-lg md:text-2xl whitespace-nowrap"> 
            {#if houseVisible}
                <span in:fade={{duration: 1000, easing: cubicInOut}}>{randomAction}</span>
            {:else}
                <span in:fade={{duration: 1000, easing: cubicInOut}}>...</span>
            {/if}
        </span>
        
        
    </div>
</div>
<div class="flex flex-col justify-center items-center gap-6">
    
    <span
        class="barlow text-white whitespace-nowrap uppercase w-48 md:w-60 text-center text-xl md:text-6xl"
        in:fade={{duration: 1000, easing: cubicInOut}}
    >
        {#if status === 1}
            you win
        {:else if status === 2} 
            you lose
        {:else}
            game tied
        {/if}
        
    </span>
    <div class="flex justify-center">
        <PlayAgainButton on:play-again/>
    </div>
    
</div>