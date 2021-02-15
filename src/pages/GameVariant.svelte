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
<div class="hidden w-16 w-20 w-24 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-72 w-90 w-96 md:w-16 md:w-20 md:w-24 md:w-32 md:w-36 md:w-40 md:w-44 md:w-48 md:w-52 md:w-56 md:w-60 md:w-72 md:w-90 md:w-96 lg:w-16 lg:w-20 lg:w-24 lg:w-32 lg:w-36 lg:w-40 lg:w-44 lg:w-48 lg:w-52 lg:w-56 lg:w-60 lg:w-72 lg:w-90 lg:w-96 xl:w-16 xl:w-20 xl:w-24 xl:w-32 xl:w-36 xl:w-40 xl:w-44 xl:w-48 xl:w-52 xl:w-56 xl:w-60 xl:w-72 xl:w-90 xl:w-96 h-16 h-20 h-24 h-32 h-36 h-40 h-44 h-48 h-52 h-56 h-60 h-72 h-90 h-96 md:h-16 md:h-20 md:h-24 md:h-32 md:h-36 md:h-40 md:h-44 md:h-48 md:h-52 md:h-56 md:h-60 md:h-72 md:h-90 md:h-96 lg:h-16 lg:h-20 lg:h-24 lg:h-32 lg:h-36 lg:h-40 lg:h-44 lg:h-48 lg:h-52 lg:h-56 lg:h-60 lg:h-72 lg:h-90 lg:h-96 xl:h-16 xl:h-20 xl:h-24 xl:h-32 xl:h-36 xl:h-40 xl:h-44 xl:h-48 xl:h-52 xl:h-56 xl:h-60 xl:h-72 xl:h-90 xl:h-96"/>
