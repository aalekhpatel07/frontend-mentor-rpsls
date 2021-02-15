<script>
    import Action from './Action.svelte';
    import { createEventDispatcher } from 'svelte';
    import { gradients } from '../@compute/data';
    import { icons as wr_icons } from '../@compute/data';
    
    const icons = wr_icons.rpsls;
    
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
        top: -1.25rem;
        left: 6.5rem;
    }
    .paper{
        top: 4.5rem;
        right: -2rem;
    }
    .rock{
        top: 14rem;
        right: 1rem;
    }
    
    .lizard{
        top: 14rem;
        left: 1rem;
    }
    .spock{
        top: 4.5rem;
        left: -2rem;
    }
    .pentagon{
        width: 300px;
    }
    .pentagon-container{
        margin-top: 0rem;
    } 

    @media screen and (min-width: 768px){
        .scissors{
            top: -2rem;
            left: 9rem;
        }
        .paper{
            top: 6rem;
            right: -2rem;
        }
        .rock{
            top: 19rem;
            right: 2rem;
        }
        
        .lizard{
            top: 19rem;
            left: 2rem;
        }
        .spock{
            top: 6rem;
            left: -2rem;
        }
        .pentagon{
            width: 400px;
        }
    }
    @media screen and (min-width: 1024px){
       .pentagon-container{
            margin-top: 4rem;
        }
        .scissors{
            top: -2.5rem;
            left: 9rem;
        }
        .paper{
            top: 6rem;
            right: -2rem;
        }
        .rock{
            top: 19rem;
            right: 1rem;
        }
        
        .lizard{
            top: 19rem;
            left: 1rem;
        }
        .spock{
            top: 6rem;
            left: -2rem;
        }
        
    }
    @media screen and (min-width: 1366px){
       .pentagon-container{
            margin-top: 4rem;
        }
        .scissors{
            top: -2.5rem;
            left: 8rem;
        }
        .paper{
            top: 6rem;
            right: -3rem;
        }
        .rock{
            top: 19rem;
            right: 1rem;
        }
        
        .lizard{
            top: 19rem;
            left: 1rem;
        }
        .spock{
            top: 6rem;
            left: -3rem;
        }
    }
    
</style>
<div class="mt-0 md:mt-16 lg:mt-4">
    <div
        class="flex relative mx-auto pentagon-container "
    >
        <img
            class="pentagon select-none"
            src="images/bg-pentagon.svg"
            alt="Pentagon"
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
        <div class="absolute lizard"
        >
            <Action
                icon={icons.lizard}
                gradient={gradients.lizard}
                name={'lizard'}
                on:action-selected={handleActionSelected}
            />
        </div>
        <div class="absolute spock"
        >
            <Action
                icon={icons.spock}
                gradient={gradients.spock}
                name={'spock'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
    </div>
</div>
