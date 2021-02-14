<script>
    import GameVariant from './GameVariant.svelte'

    let score = 0;
    let negative;
    let variant = 'rps';

    function handleResult(e){
        const { status } = e.detail;
        if(status === 'win'){
            score = score + 1
            negative = false;
        }else if(status === 'lose'){
            score = score - 1
            negative = true;
        }
    }
</script>
<GameVariant
    on:result={handleResult}
    bind:negative
    bind:score
    bind:variant
/>