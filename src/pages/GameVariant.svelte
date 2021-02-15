<script>
    import Backdrop from '../components/Backdrop.svelte';
    import HeaderPanel from '../components/HeaderPanel.svelte';
    import Game from '../components/Game.svelte';
    import Rules from '../components/Rules.svelte';
    import VariantToggler from '../components/VariantToggler.svelte';

    export let variant = 'rps', negative = null;
    

</script>
<style>
</style>
<Backdrop>
    <div class="min-h-screen pt-3 pb-0 flex flex-col justify-start items-around max-h-screen">
        <div class="flex justify-center">
            <HeaderPanel
                bind:negative
                {variant}
            />
        </div>
        <div class="flex justify-center relative">
            <VariantToggler bind:variant/>
        </div>
        <div
            class="flex justify-center mx-auto mt-16 md:mt-8"
            style="overflow: none;"
        >
            <Game
                on:result
                {variant}
            />
        </div>
        <div class="flex justify-center md:hidden mx-auto mt-16">
            <Rules bind:variant/>
        </div>
        <div class="hidden md:block md:absolute md:bottom-16 md:right-16 ">
            <Rules bind:variant/>
        </div>
    </div>
</Backdrop>
