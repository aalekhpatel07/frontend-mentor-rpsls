<script>
    import RulesModal from './RulesModal.svelte'
    import RulesButton from './RulesButton.svelte'    
    import { fade } from 'svelte/transition'
    import { cubicOut } from 'svelte/easing'

    let modalOpen = false;

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
                class="fixed top-0 left-0 h-screen w-screen bg-gray-100 bg-opacity-10"
            />
            <div
                on:click|stopPropagation
                class="fixed top-1/2 left-1/2"
                style="transform: translate(-50%, -50%);"
            >
            <RulesModal
                on:click={handleModalToggle}
            />
            </div>
        </div>
    {/if}
</div>