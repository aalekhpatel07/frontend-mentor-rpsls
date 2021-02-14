<script>
    export let glow;

</script>
<style>
    @keyframes ripple {
        0% {
            box-shadow: 0 0 0 0rem rgba(104, 110, 196, 0.2);
        }
        100% {
            box-shadow: 0 0 0 8rem rgba(255,255,255, 0);
        }
    }

    .ripple-container{
        animation: ripple 3s linear infinite;
    }
    .ripple-container::after, .ripple-container::before{
        content: "";
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        animation: inherit;
        animation-delay: 1s;
    }
    .ripple-container::after{
        animation-delay: 2s;
    }


</style>

<div
    class="ripple-container relative rounded-full"
    style="animation: {!glow ? 'ripple 3s linear infinite' : ''};"
>
    <slot></slot>
</div>