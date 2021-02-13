<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    import { cubicInOut } from 'svelte/easing';
    import fadeScale from '../transitions/fadeScale';

    export let icon, gradient, name, top, left;
    export let visible = true;
    export let md = 28, lg = 32, avp = 24, xl = 36;


    const darkColor = 'rgba(0,0,0,0.2)';
    let colors = [];

    $: {
        colors = split(gradient);
    }

    function split(grad){
        return grad.split(' to ');
    }

    function handleClick(){
        if(visible){
            dispatch('action-selected', { name })
        }
    }

</script>
<div class="w-{avp} h-{avp} md:w-{md} md:h-{md} lg:w-{lg} lg:h-{lg} xl:h-{xl} xl:w-{xl}">
    <button
        class="rounded-full w-full h-full relative flex flex-col items-center justify-center focus:outline-none"
        type="button"
        style="background: {visible ? colors[1] : darkColor}; box-shadow: inset 0px -6px 0px 1px {visible ? colors[0] : 'transparent'}; top: {top}rem; left: {left}rem;"
        on:click|preventDefault={handleClick}
    >
    
        <div
            class="rounded-full w-3/4 relative h-3/4 flex justify-center flex-col items-center"
            style="background: white; box-shadow: inset 0px 6px 2px 1px lightgray;"

            in:fadeScale={{
                easing: cubicInOut,
                duration: 1000,
                delay: 0,
                baseScale: 0.1
            }}
            
        >
            {#if visible}
                <svelte:component this={icon} class="w-1/2 h-1/2"/>
            {/if}
        </div>
    </button>
</div>

