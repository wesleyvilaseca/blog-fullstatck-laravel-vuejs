<template>
<div>
    home page component {{ title }}
</div>
</template>

<script>

export default {
    data() {
        return {
            props: {
                title: String
            }
        }
    }
}

</script>