import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'primeicons/primeicons.css';
import getData from './utilities/getNewsJSONData.js';

//Cria a instância da aplicação com o Componente App
const application = createApp(App);

/*
Se der algum erro de produção, irá gerar um alert na tela que vai mostrar o que foi o erro
*/
application.config.errorHandler = ((err, instance, info)=>{
  alert(`Erro: ${JSON.stringify(err.message)}\n
        Error info: ${info}`);
});

//Inserindo o plugin de rotas para a aplicação
application.use(router);

//Provendo alguns dados e métodos globalmente para que todos componentes possam usar
application.provide('NewsData', getData());

//Monta a aplicação no elemento com id app
application.mount('#app');
