<script>
    // import Pentagon from '../../images/bg-pentagon.svg';

    import Action from './Action.svelte';

    import Scissors from '../../images/icon-scissors.svg';
    import Paper from '../../images/icon-paper.svg';    
    import Rock from '../../images/icon-rock.svg';
    import Lizard from '../../images/icon-lizard.svg';
    import Spock from '../../images/icon-spock.svg';


    const icons = {
        scissors: Scissors,
        paper: Paper,
        rock: Rock,
        lizard: Lizard,
        spock: Spock
    }


    const gradients = {
        scissors: "hsl(39, 89%, 43%) to hsl(44, 84%, 50%)",
        paper: "hsl(240, 89%, 62%) to hsl(230, 89%, 65%)",
        rock: "hsl(349, 71%, 42%) to hsl(349, 70%, 56%)",
        lizard: "hsl(261, 78%, 60%) to hsl(261, 72%, 63%)",
        spock: "hsl(199, 59%, 53%) to hsl(189, 58%, 57%)"
    };

    function handleActionSelected(e){
        const name = e.detail.name;
    }

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
        margin-top: 4rem;
    }

    @media screen and (min-width: 200px){
        .scissors{
            top: -2rem;
            left: calc(300px - 12rem);
        }
        .rock{
            top: 13.5rem;
            right: 0;
        }
        .paper{
            top: 3.5rem;
            right: -2rem;
        }
        .lizard{
            top: 13.5rem;
            left: 0;
        }
        .spock{
            top: 3.5rem;
            left: -2rem;
        }
        .pentagon{
            width: 300px;
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
<div class="mt-16">
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
        <div class="absolute paper">
            <Action
                icon={icons.paper}
                gradient={gradients.paper}
                name={'paper'}
                on:action-selected={handleActionSelected}
            />
        </div>
        <div class="absolute rock">
            <Action
                icon={icons.rock}
                gradient={gradients.rock}
                name={'rock'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
        <div class="absolute lizard">
            <Action
                icon={icons.lizard}
                gradient={gradients.lizard}
                name={'lizard'}
                on:action-selected={handleActionSelected}
            />
        </div>
        <div class="absolute spock">
            <Action
                icon={icons.spock}
                gradient={gradients.spock}
                name={'spock'}
                on:action-selected={handleActionSelected}
            /> 
        </div>
    </div>
</div>
