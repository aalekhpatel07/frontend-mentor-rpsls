<script>
    const backgroundGradient = 'radial-gradient(ellipse at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))';
</script>
<style lang="scss">
    .backdrop{
        min-height: calc(max(100vh, 100%));
    }
</style>
<div
    class="backdrop min-w-full"
    style="background: {backgroundGradient}; "
>
    <slot></slot>
</div>
