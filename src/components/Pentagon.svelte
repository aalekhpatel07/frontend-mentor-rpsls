<script>
    import Action from './Action.svelte';

    import Scissors from '../../images/icon-scissors.svg';
    import Paper from '../../images/icon-paper.svg';    
    import Rock from '../../images/icon-rock.svg';
    import Lizard from '../../images/icon-lizard.svg';
    import Spock from '../../images/icon-spock.svg';

    import { cubicOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';

    const [send, receive] = crossfade({
        duration: d => Math.sqrt(d * 500),
        fallback: (node, params) => {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return {
                duration: 600,
                easing: cubicOut,
                css: t => `
                    transform: ${transform} scale(${t});
                    opacity: ${t};
                `
            }
        }
    })


    const icons = {
        scissors: Scissors,
        paper: Paper,
        rock: Rock,
        lizard: Lizard,
        spock: Spock
    }

    
    const fetchRandomAction = () => {
        const keys = Object.keys(icons)
        const idx = Math.floor(Math.random() * keys.length)
        return keys[idx]
    }

    const gradients = {
        scissors: "hsl(39, 89%, 43%) to hsl(44, 84%, 50%)",
        paper: "hsl(240, 89%, 62%) to hsl(230, 89%, 65%)",
        rock: "hsl(349, 71%, 42%) to hsl(349, 70%, 56%)",
        lizard: "hsl(261, 78%, 60%) to hsl(261, 72%, 63%)",
        spock: "hsl(199, 59%, 53%) to hsl(189, 58%, 57%)"
    };

    function handleActionSelected(e){
        selectedAction = e.detail.name;
        randomAction = fetchRandomAction();
        playzone = true;
    }

    let selectedAction = null;
    let randomAction = null;

    let playzone = false;


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
<div class="mt-0 md:mt-16">
    <div
        class="flex relative mx-auto pentagon-container "
        class:hidden={playzone}
        class:flex={!playzone}

    >
        <img
            class="pentagon select-none"
            src="images/bg-pentagon.svg"
            alt="Pentagon"
        />
        <div
            class="absolute scissors"
            out:send={{key: 'scissors'}}
        >
            <Action
                icon={icons.scissors}
                gradient={gradients.scissors}
                name={'scissors'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
        <div class="absolute paper"
            out:send={{key: 'paper'}}
        >
            <Action
                icon={icons.paper}
                gradient={gradients.paper}
                name={'paper'}
                on:action-selected={handleActionSelected}
            />
        </div>
        <div class="absolute rock"
            out:send={{key: 'rock'}}
        >
            <Action
                icon={icons.rock}
                gradient={gradients.rock}
                name={'rock'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
        <div class="absolute lizard"
            out:send={{key: 'lizard'}}
        >
            <Action
                icon={icons.lizard}
                gradient={gradients.lizard}
                name={'lizard'}
                on:action-selected={handleActionSelected}
            />
        </div>
        <div class="absolute spock"
            out:send={{key: 'spock'}}
        >
            <Action
                icon={icons.spock}
                gradient={gradients.spock}
                name={'spock'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
    </div>
    {#if selectedAction && randomAction}
        <div class="flex justify-between items-center w-60 md:w-screen max-w-lg lg:max-w-md ">
            <div
                in:receive={{key: selectedAction}}
            >
                <Action
                    icon={icons[selectedAction]}
                    gradient={gradients[selectedAction]}
                    name={selectedAction}
                />
            </div>
            <div
                in:receive={{key: randomAction}}
            >
                <Action
                    icon={icons[randomAction]}
                    gradient={gradients[randomAction]}
                    name={randomAction}
                />
            </div>
        </div>
    {/if}
</div>
