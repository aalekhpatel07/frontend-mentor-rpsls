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
        top: -2rem;
        left: -1rem;
    }
    .rock{
        top: 13rem;
        right: 6.5rem;
    }
    .paper{
        top: -2rem;
        right: -1rem;
    }
    .triangle{
        width: 300px;
    }
    .triangle-container{
        margin-top: 1rem;
    } 
    
    @media screen and (min-width: 768px){
        .scissors{
            top: -2rem;
            left: -1rem;
        }
        .paper{
            top: -2rem;
            right: -1rem;
        }
        .rock{
            top: 18rem;
            right: 9rem;
        }
        
        .triangle{
            width: 400px;
        }
    }
    @media screen and (min-width: 1024px){
       .triangle-container{
            margin-top: 4rem;
        } 
        .scissors{
            top: -2rem;
            left: -1rem;
        }
        .paper{
            top: -2rem;
            right: -1rem;
        }
        .rock{
            top: 15rem;
            right: 8.5rem;
        }
    }
    @media screen and (min-width: 1366px){
       .triangle-container{
            margin-top: 4rem;
        } 
        .scissors{
            top: -2rem;
            left: -1rem;
        }
        .paper{
            top: -2rem;
            right: -1rem;
        }
        .rock{
            top: 14rem;
            right: 7.75rem;
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
