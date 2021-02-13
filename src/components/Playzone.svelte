<script>
    import Action from './Action.svelte'
    import { icons } from '../@compute/data';
    import { gradients } from '../@compute/data';
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    const dispatch = createEventDispatcher();

    export let verdict;
    export let word;
    export let selectedAction;
    export let randomAction;
    // export let winnerHouse = false;
    export let houseVisible = false;


</script>
<style>

</style>
<div
    class="hidden md:flex justify-between items-center w-60 md:w-screen max-w-lg lg:max-w-lg xl:max-w-2xl md:mt-16"
>
    <div
        class="flex flex-col justify-center items-center"
    >
        <span class="hidden md:inline-block uppercase barlow text-white shadow-sm mt-4 whitespace-nowrap md:text-lg md:mb-8"> you picked </span>
        <Action
            icon={icons[selectedAction]}
            gradient={gradients[selectedAction]}
            name={selectedAction}
            xl={60}
            lg={52}
            md={48}
        />
        <span class="inline-block md:hidden uppercase barlow text-white shadow-sm mt-4 whitespace-nowrap text-lg md:text-2xl md:mb-8"> you picked </span>
        <span class="uppercase barlow text-white shadow-sm whitespace-nowrap mt-4 text-lg md:text-2xl"> {selectedAction} </span>
    </div>
    <div
        class="flex flex-col justify-center items-center w-full"
    >
        <span class="uppercase barlow text-white text-center shadow-sm mt-4 text-lg md:text-2xl w-16 md:w-48">
            {#if verdict && houseVisible}
                <span transition:fade={{duration: 1000, easing: cubicInOut}}> {word} </span>
            {:else}
                <span in:fade={{duration: 1000, easing: cubicInOut}} >...</span>
            {/if}      
        </span>
    </div>
    <div
        class="flex flex-col justify-center items-center" 
    >
        <span class="hidden md:inline-block uppercase barlow text-white shadow-sm mt-4 whitespace-nowrap md:text-lg md:mb-8"> the house picked </span>
        <Action
            icon={icons[randomAction]}
            gradient={gradients[randomAction]}
            name={randomAction}
            xl={60}
            lg={52}
            md={48}
            visible={houseVisible}
        />
        <span class="inline-block md:hidden uppercase barlow text-white shadow-sm mt-4 whitespace-nowrap text-lg md:text-2xl md:mb-8"> the house picked </span>
        <span class="uppercase barlow text-white shadow-sm mt-4 text-lg md:text-2xl whitespace-nowrap"> 
            {#if houseVisible}
                <span transition:fade={{duration: 1000, easing: cubicInOut}}>{randomAction}</span>
            {:else}
                <span in:fade={{duration: 1000, easing: cubicInOut}}>...</span>
            {/if}
        </span>
        
        
    </div>
</div>