<script>
    import GameVariant from './GameVariant.svelte'
    import { score } from '../store/store'
    let negative;
    let variant = 'rps';

    function handleResult(e){
        const { status } = e.detail;
        if(status === 'win'){
            score.update(n => n + 1)
            negative = false;
        }else if(status === 'lose'){
            score.update(n => n - 1)
            negative = true;
        }
    }
</script>
<GameVariant
    on:result={handleResult}
    bind:negative
    bind:variant
/>