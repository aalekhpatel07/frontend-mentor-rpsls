<script>
    import Backdrop from '../components/Backdrop.svelte';
    import HeaderPanel from '../components/HeaderPanel.svelte';
    import Pentagon from '../components/Pentagon.svelte';
    import Rules from '../components/Rules.svelte';

    let score = 12;
    
</script>
<style>
</style>
<Backdrop>
    <div class="min-h-screen min-w-full pt-3 flex flex-col justify-start md:justify-start items-between">
        <div class="flex justify-center">
            <HeaderPanel
                score={score}
            />
        </div>
        <div
            class="flex justify-center max-w-4xl mx-auto mt-12 md:mt-0 "
            style="overflow: none;"
        >
            <Pentagon />
        </div>
        <div class="flex justify-center mt-8 md:justify-end md:mr-10 md:-mt-16">
            <Rules />
        </div>
    </div>
</Backdrop>
