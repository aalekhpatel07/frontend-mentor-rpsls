<script>

    const bgColor = 'white';
    const textColor = 'hsl(214, 47%, 23%)';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function handlePlayAgain(){
        dispatch('play-again')
    }
</script>
<button
    type="button"
    class="uppercase barlow shadow-2xl whitespace-nowrap text-md md:text-lg text-center w-48 md:w-60 h-12 rounded-xl tracking-widest font-semibold"
    style="background: {bgColor}; color: {textColor};"
    on:click={handlePlayAgain}
>
    <span>play again</span>
</button>