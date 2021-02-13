<script>
    import Action from './Action.svelte';
    import { createEventDispatcher } from 'svelte';
    import { gradients } from '../@compute/data';
    import { icons } from '../@compute/data';
    
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
    .lizard{
        top: 13rem;
        left: 0;
    }
    .spock{
        top: 5rem;
        left: -2rem;
    }
    .pentagon{
        width: 250px;
    }
    .pentagon-container{
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
        .lizard{
            top: 13.5rem;
            left: 1rem;
        }
        .spock{
            top: 3.5rem;
            left: -2rem;
        }
        .pentagon{
            width: 300px;
        }
        .pentagon-container{
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
        .lizard{
            top: 18rem;
            left: 2rem;
        }
        .spock{
            top: 5rem;
            left: -3rem;
        }
        .pentagon{
            width: 400px;
        }
    }
    @media screen and (min-width: 1024px){
       .pentagon-container{
            margin-top: 4rem;
        } 
    }
    @media screen and (min-width: 1366px){
       .pentagon-container{
            margin-top: 4rem;
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
