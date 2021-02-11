<script>
    import Backdrop from '../components/Backdrop.svelte';
    import HeaderPanel from '../components/HeaderPanel.svelte';
    import Pentagon from '../components/Pentagon.svelte';

    let score = 12;
    
</script>
<style>
</style>
<Backdrop>
    <div class="min-h-screen min-w-full pt-6 flex flex-col justify-start items-between">
        <div class="flex justify-center">
            <HeaderPanel
                score={score}
            />
        </div>
        <div class="flex justify-center">
            <Pentagon />
        </div>
    </div>
</Backdrop>
