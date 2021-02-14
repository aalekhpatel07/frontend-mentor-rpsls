<script>
    import Action from './Action.svelte';
    import { createEventDispatcher } from 'svelte';
    import { gradients } from '../@compute/data';
    import { icons as wr_icons } from '../@compute/data';
    
    const icons = wr_icons.rps;
    const dispatch = createEventDispatcher();
        

    function handleActionSelected(e){
        selectedAction = e.detail.name;
        dispatch('new-game', {
            player: selectedAction
        })
    }

    let selectedAction = null;

</script>
<style>
    .scissors{
        top: 0rem;
        left: 5rem;
    }
    .rock{
        top: 13rem;
        right: 0;
    }
    .paper{
        top: 5rem;
        right: -2rem;
    }
    .triangle{
        width: 250px;
    }
    .triangle-container{
        margin-top: 0rem;
    }

    @media screen and (min-width: 200px){
        .scissors{
            top: -1.5rem;
            left: calc(300px - 12rem);
        }
        .rock{
            top: 13.5rem;
            right: 1rem;
        }
        .paper{
            top: 3.5rem;
            right: -2rem;
        }
        .triangle{
            width: 300px;
        }
        .triangle-container{
            margin-top: 0rem;
        } 
    }

    
    @media screen and (min-width: 768px){
        .scissors{
            top: -3rem;
            left: calc(400px - 16rem);
        }
        .rock{
            top: 18rem;
            right: 2rem;
        }
        .paper{
            top: 5rem;
            right: -3rem;
        }
        .triangle{
            width: 400px;
        }
    }
    @media screen and (min-width: 1024px){
       .triangle-container{
            margin-top: 4rem;
        } 
    }
    @media screen and (min-width: 1366px){
       .triangle-container{
            margin-top: 4rem;
        } 
    }
    
</style>
<div class="mt-0 md:mt-16 lg:mt-4">
    <div
        class="flex relative mx-auto triangle-container "
    >
        <img
            class="triangle select-none"
            src="images/bg-triangle.svg"
            alt="Triangle"
        />
        <div
            class="absolute scissors"
        >
            <Action
                icon={icons.scissors}
                gradient={gradients.scissors}
                name={'scissors'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
        <div class="absolute paper"
        >
            <Action
                icon={icons.paper}
                gradient={gradients.paper}
                name={'paper'}
                on:action-selected={handleActionSelected}
            />
        </div>
        <div class="absolute rock"
        >
            <Action
                icon={icons.rock}
                gradient={gradients.rock}
                name={'rock'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
    </div>
</div>
