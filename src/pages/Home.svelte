<script>
    import Backdrop from '../components/Backdrop.svelte';
    import HeaderPanel from '../components/HeaderPanel.svelte';

    let score = 12;
    
</script>
<style>
</style>
<Backdrop>
    <div class="min-h-screen min-w-full pt-12 flex flex-col justify-start">
        <div class="flex justify-center">
            <HeaderPanel
                score={score}
            />
        </div>
        <!-- <div class="flex justify-center border-4 border-red-600">
            <HeaderPanel score={score}/>
        </div> -->
    </div>
</Backdrop>
