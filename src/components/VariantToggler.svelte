<script>

    export let variant;
    const scoreValueColor = 'hsl(229, 25%, 31%)'
    const bgButtonColor = 'hsl(214, 47%, 23%)';

    function setRPS(){
        variant = 'rps'
    }
    function setRPSLS(){
        variant = 'rpsls'
    }

</script>
<style>
    .active{
        background-color: white;
        color: var(--scoreValueColor);
    }
    .custom-bg{
        background-color: var(--bgColor);
    }
    
    ._bottom{
        bottom: -1rem;
    }
    @media screen and (min-width: 768px){
    ._bottom{
        bottom: -1.25rem;
    }    
    }
</style>
<div
    class="text-white border-2 border-white flex flex-row justify-around items-center mx-auto absolute text-xs md:text-md lg:text-lg _bottom"
    style="--scoreValueColor: {scoreValueColor}; --bgColor: {bgButtonColor}; border-radius: 3px;"
>
    <button
        type="button"
        on:click|preventDefault={setRPS}
        class="text-center uppercase barlow p-2 focus:outline-none"
        class:active={variant === 'rps'}
        class:custom-bg={variant !== 'rps'}
    >
        Rock Paper Scissors
    </button>
    <button
        type="button"
        on:click|preventDefault={setRPSLS}
        class="text-center uppercase barlow p-2 focus:outline-none"
        class:active={variant === 'rpsls'}
        class:custom-bg={variant !== 'rpsls'}
    >
        Lizard Spock
    </button>
</div>