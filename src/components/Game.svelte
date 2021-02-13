<script>
    import Pentagon from './Pentagon.svelte';
    import Playzone from './Playzone.svelte';
    import { createEventDispatcher } from 'svelte';
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
    
    let player = null;
    let house = null;
    let gameInProgress = false;
    let processing = false;
    let winner;

    function sendResult(_player){
        dispatch('result', { status: _player === 1 ? 'win' : (_player === 2 ? 'lose' : 'tie') });
        return true;
    }

    async function compute(){
        
        gameInProgress = true;
        house = move()
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
    function resetGame(){

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
            on:reset-game={resetGame}
            houseVisible={!processing}
            status={winner}
        />
    </div>
{:else}
    <div
    >
        <Pentagon
            on:new-game={startNewGame}
        />
    </div>
    
{/if}


