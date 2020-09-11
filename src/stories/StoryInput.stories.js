import StoryInput from '../components/StoryInput.vue'

export default {
    title: 'Story Input',
    component: StoryInput
}

export const comPlaceholder = () => ({
    components: {StoryInput},
    template: '<story-input placeholder="Ola mundo" />'
})


export const semPlaceholder = () => ({
    components: {StoryInput},
    template: '<story-input />'
})