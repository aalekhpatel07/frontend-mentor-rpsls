<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let icon;
    export let gradient;
    export let name;
    export let top;
    export let left;

    export let md = 28, lg = 32, avp = 24, xl = 36;

    let colors = [];

    $: {
        colors = split(gradient);
    }

    function split(grad){
        return grad.split(' to ');
    }

    function handleClick(){
        dispatch('action-selected', { name })
    }

</script>
<div class="w-{avp} h-{avp} md:w-{md} md:h-{md} lg:w-{lg} lg:h-{lg} xl:h-{xl} xl:w-{xl}">
    <button
        class="rounded-full w-full h-full relative flex flex-col items-center justify-center focus:outline-none"
        type="button"
        style="background: {colors[1]}; box-shadow: inset 0px -6px 0px 1px {colors[0]}; top: {top}rem; left: {left}rem;"
        on:click|preventDefault={handleClick}
    >
    <div
        class="rounded-full w-3/4 relative h-3/4 flex justify-center flex-col items-center"
        style="background: white; box-shadow: inset 0px 6px 2px 1px lightgray;"
    >
        <svelte:component this={icon} class="w-1/2 h-1/2"/>
    </div>
</button>
</div>

