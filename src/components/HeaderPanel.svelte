<script>
    import ScoreNumeral from './ScoreNumeral.svelte'
    import TrashSVG from '../../images/trash-2.svg'
    import { score } from '../store/store'

    const scale = 1.3;
    const borderRadius = '20px';
    const borderColor = 'hsl(217, 16%, 45%)';
    const scoreColor = 'hsl(229, 64%, 46%)';
    
    const letterSpacing = '2px';

    export let negative, variant;
    

</script>
<style>
    :global(.barlow){
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
    /* .barlow-c{
        font-family: 'Barlow Semi Condensed', sans-serif;
    } */
    .score{
        color: var(--scoreColor);
        letter-spacing: var(--letterSpacing);
        transform: scale(1, 1.4);
    }
    .transform-y-scale{
        transform: scale(1, var(--scale));
    }
</style>

<div
    class="border-4 flex justify-between w-4/6 items-center "
    style="border-radius: {borderRadius}; --scale: {scale}; border-color: {borderColor};"
>

    
        <div class="flex flex-col justify-center py-6 px-8 w-2/5 sm:w-1/2 md:w-2/3 lg:w-3/4 text-white h-32">
            <span class="barlow text-xs md:text-xl transform-y-scale uppercase font-bold">Rock</span>
            <span class="barlow text-xs md:text-xl transform-y-scale uppercase font-bold">Paper</span>
            <span class="barlow text-xs md:text-xl transform-y-scale uppercase font-bold">Scissors</span>
            {#if variant === 'rpsls'}
                <span class="barlow text-xs md:text-xl transform-y-scale uppercase font-bold">Lizard</span>
                <span class="barlow text-xs md:text-xl transform-y-scale uppercase font-bold">Spock</span>
            {/if}
        </div>
    <div class="flex flex-col justify-center p-6 w-3/5 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div
            class="relative bg-white h-100 py-3 md:py-6 lg:py-4 rounded-lg flex flex-col align-center justify-center"
        >
            <div class="absolute top-2 right-2">
                <button type="button" on:click|preventDefault={() => score.set(0)} class="rounded-full focus:outline-none">
                    <TrashSVG class="rounded-full bg-transparent text-white hover:text-red-600 w-4 h-4 md:h-6 md:w-6"/>
                </button>
                
            </div>
            <span
                class="mx-auto barlow uppercase score text-xs mb-2 md:mb-6 font-semibold"
                style="--scoreColor:{scoreColor}; --letterSpacing: {letterSpacing};"
            >
                Score
            </span>
            
            <ScoreNumeral
                bind:negative
            />
                
        </div>
    </div>
</div>
