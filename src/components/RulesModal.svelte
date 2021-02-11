<script>
    
    import RulesSVG from '../../images/image-rules-bonus.svg'

    const rulesColor = 'hsl(229, 25%, 31%)'

</script>

<div class="hidden md:block h-full bg-white flex flex-col justify-between items-center p-8 rounded-2xl">
    <div class="w-full flex flex-row justify-between items-center">
        <span
            class="barlow uppercase tracking-normal font-bold text-3xl"
            style="color: hsl(229, 25%, 31%);"
        >
            rules
        </span>
        <button class="focus:outline-none text-gray-300 hover:text-gray-700" on:click>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    <br>
    <div>
        <RulesSVG/>
    </div>
</div>

<div class="block md:hidden h-screen w-screen bg-white flex flex-col justify-around items-center p-8">
    <div class="w-full text-center">
        <span
            class="barlow uppercase tracking-normal font-bold text-4xl"
            style="color: {rulesColor};"
        >
            rules
        </span>
        
    </div>
    <RulesSVG/>
    <button class="focus:outline-none text-gray-200 hover:text-gray-100 rounded-full bg-gray-400 p-2" on:click>
        
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>
