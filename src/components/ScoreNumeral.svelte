<script>

    const scoreValueColor = 'hsl(229, 25%, 31%)';
    export let score, negative;

    import fly from '../transitions/fly';
    import { cubicInOut } from 'svelte/easing';
    
    function handleComplete(){
        negative = false;
    }

</script>
<style>
    @keyframes grow-and-shrink{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(2);
        }
        90%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }

    .score-numeral{
        animation: grow-and-shrink 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

</style>
{#key score}
    <span
        class="mx-auto barlow text-4xl transform-y-scale md:text-6xl font-bold score-numeral"
        style="color: {scoreValueColor};"
    >
        {score}
    </span>
    {#if negative}
        <div class="relative text-center" >
            <span
                class="absolute text-center text-4xl md:text-6xl barlow text-red-700 opacity-70"
                style="transform: translate(-50%, 0);"
                in:fly={{y:200, duration: 2000, easing: cubicInOut}}
                on:introend={handleComplete}
            > -1 </span>
        </div>
    {/if}
    
{/key}