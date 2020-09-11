import Vue from 'vue'
import StoryInput from './components/StoryInput.vue'

const Components = {
  StoryInput,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;