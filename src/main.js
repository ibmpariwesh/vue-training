import { createApp } from 'vue'
import App from './App.vue'
import UserForm from './components/UserForm.vue'
import CounterC  from './components/Counter.vue';

const app = createApp(App);
app.component('UserForm123', UserForm);
app.component('CounterC', CounterC);

app.mount('#app')
