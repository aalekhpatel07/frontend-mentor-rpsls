<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    const borderColor = 'hsl(217, 16%, 45%)'

    function handleClick(){
        dispatch('modal-toggle')
    }

</script>
<div>
    <button
        type="button"
        on:click|stopPropagation={handleClick}
        class="border-2 w-32 uppercase tracking-widest barlow rounded-lg text-gray-300 p-2 hover:text-white focus:outline-none"
        style="border-color: {borderColor};"
    >
        <slot></slot>
    </button>
</div>
