<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let icon;
    export let gradient;
    export let name;
    export let top;
    export let left;

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
<div class="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
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

