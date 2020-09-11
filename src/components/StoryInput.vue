<template>
    <div>
        <input type="text" class="storybutton" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    props: {
        placeholder: String
    }
}
</script>

<style scoped>
.storybutton {
    outline: none;
    border: 2px solid rgb(255, 12, 128);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: sans-serif;
    transition: all 500ms linear;
}

.storybutton:hover {
    border-color: rgb(21, 176, 23);
}
</style>