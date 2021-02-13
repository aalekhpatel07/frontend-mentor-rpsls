<script>
    import Backdrop from '../components/Backdrop.svelte';
    import HeaderPanel from '../components/HeaderPanel.svelte';
    import Game from '../components/Game.svelte';
    import Rules from '../components/Rules.svelte';

    let score = 12;
    
    function handleResult(e){
        const { status } = e.detail;
        if(status === 'win')score++;
        else if(status === 'lose')score--;
    }

</script>
<style>
</style>
<Backdrop>
    <div class="min-h-screen pt-3 pb-0 flex flex-col justify-start items-around">
        <div class="flex justify-center"   >
            <HeaderPanel
                score={score}
            />
        </div>
        <div
            class="flex justify-center mx-auto mt-16 md:mt-0"
            style="overflow: none;"
        >
            <Game
                on:result={handleResult}
            />
        </div>
        <div class="flex justify-center md:hidden mx-auto mt-16">
            <Rules />
        </div>
        <div class="hidden md:block md:absolute md:bottom-16 md:right-16 ">
            <Rules />
        </div>
    </div>
</Backdrop>
