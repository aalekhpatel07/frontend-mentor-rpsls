<script>
    import Pentagon from './Pentagon.svelte';
    import Playzone from './Playzone.svelte';
    import Triangle from './Triangle.svelte';

    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition'
    import { getFancyWord } from '../@compute/vocab';
    // import { cubicInOut } from 'svelte/easing';
    // import fadeScale from '../transitions/fadeScale';
    import { move } from '../@compute/move';
    import { delay } from '../utils/delay';

    const dispatch = createEventDispatcher();

    $:{
        if(gameInProgress && player && house){
            const res = getFancyWord(player, house);
            verdict = true;
            word = res.word;
            winner = res.winner
            sendResult(winner)
            

        }
    }

    

    export let word;
    export let verdict;
    export let variant = 'rpsls';
    
    let player = null;
    let house = null;
    let gameInProgress = false;
    let processing = false;
    let winner = null;

    function sendResult(_player){
        dispatch('result', { status: _player === 1 ? 'win' : (_player === 2 ? 'lose' : 'tie') });
        return true;
    }

    async function compute(){
        
        gameInProgress = true;
        house = move(variant)
        // await delay(500);
        
        processing = false;
        
    }

    function startNewGame(e){
        if(!gameInProgress){
            player = e.detail.player
            processing = true;
            compute()
        }
    }

    function handlePlayAgain(){
        gameInProgress = false
        player = null
        house = null
        processing = false
        winner = null
        verdict = null
    }
    

</script>
{#if gameInProgress}
    <div
    >
        <Playzone
            selectedAction={player}
            randomAction={house}
            word={word}
            verdict={verdict}
            winnerHouse={winner === 2}
            houseVisible={!processing}
            status={winner}
            on:play-again={handlePlayAgain}
        />
    </div>
{:else}
    <div
    >
        {#if variant == 'rps'}
            <Triangle
                on:new-game={startNewGame}
            />
        {:else}
            <Pentagon
                on:new-game={startNewGame}
            />
        {/if}
    </div>
    
{/if}


