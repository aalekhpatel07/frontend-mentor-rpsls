<script>
    import RulesModal from './RulesModal.svelte'
    import RulesButton from './RulesButton.svelte'
    
    import RPSRules from '../../images/image-rules.svg'
    import RPSLSRules from '../../images/image-rules-bonus.svg'
    
    import { fade } from 'svelte/transition'
    import { cubicOut } from 'svelte/easing'

    let modalOpen = false;
    export let variant;

    function handleModalToggle(){
        modalOpen = !modalOpen
    }
</script>
<svelte:window on:click|stopPropagation={() => { modalOpen = false; }}/>
<div
    
>
    <RulesButton
        on:modal-toggle={handleModalToggle}
    >
        rules
    </RulesButton>
    {#if !!modalOpen}
        <div
            transition:fade={{duration: 300, easing: cubicOut}}
        >
            <div
                on:click
                class="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50"
            />
            <div
                on:click|stopPropagation
                class="fixed top-1/2 left-1/2"
                style="transform: translate(-50%, -50%);"
            >
            <RulesModal
                on:click={handleModalToggle}
                logo={variant === 'rps' ? RPSRules : RPSLSRules}
                height={variant === 'rps' ? 330 : 500}
            />
            </div>
        </div>
    {/if}
</div>