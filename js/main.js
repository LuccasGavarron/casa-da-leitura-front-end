const { createApp, ref, computed, onMounted, onUnmounted } = Vue;
import { projects } from './modules/data.js';
import { readInterests, saveInterests } from './modules/storage.js';
import { validateInterest } from './modules/validation.js';

const routes = ['inicio', 'projetos', 'participar', 'meus-interesses'];
const routeFromHash = () => { const route = location.hash.slice(1); return routes.includes(route) ? route : 'inicio'; };

createApp({
  setup() {
    const route = ref(routeFromHash());
    const interests = ref(readInterests());
    const form = ref({name:'', email:'', project:''});
    const errors = ref({});
    const feedback = ref('');
    const filteredProjects = computed(() => projects.filter(p => interests.value.includes(p.id)));
    const changeRoute = () => { route.value = routeFromHash(); feedback.value = ''; errors.value = {}; document.title = `${({inicio:'Início',projetos:'Projetos',participar:'Participar','meus-interesses':'Meus interesses'})[route.value]} | Casa da Leitura`; };
    onMounted(() => {window.addEventListener('hashchange', changeRoute);changeRoute();});
    onUnmounted(() => window.removeEventListener('hashchange', changeRoute));
    function toggleInterest(id) {
      interests.value = interests.value.includes(id) ? interests.value.filter(item=>item!==id) : [...interests.value,id];
      saveInterests(interests.value);
      feedback.value = 'Preferências atualizadas neste navegador.';
    }
    function submitInterest() {
      errors.value = validateInterest(form.value);
      if(Object.keys(errors.value).length) {feedback.value='Corrija os campos indicados para continuar.'; return;}
      if(!interests.value.includes(form.value.project)) {interests.value.push(form.value.project);saveInterests(interests.value);}
      feedback.value = 'Interesse registrado apenas neste navegador. Nome e e-mail não foram salvos nem enviados.';
      form.value = {name:'',email:'',project:''};
    }
    return {route, projects, interests, filteredProjects, form, errors, feedback, toggleInterest, submitInterest};
  },
  template: `
  <header><a class="marca" href="#inicio">Casa da Leitura<span>Biblioteca comunitária</span></a><nav aria-label="Navegação principal"><a href="#inicio" :aria-current="route==='inicio'?'page':null">Início</a><a href="#projetos" :aria-current="route==='projetos'?'page':null">Projetos</a><a href="#participar" :aria-current="route==='participar'?'page':null">Participar</a><a href="#meus-interesses" :aria-current="route==='meus-interesses'?'page':null">Meus interesses</a></nav></header>
  <main id="conteudo">
    <section v-if="route==='inicio'" aria-labelledby="titulo-inicio" class="hero"><div><h1 id="titulo-inicio">Uma comunidade que lê junta.</h1><p class="intro">Livros que circulam, histórias compartilhadas e espaços para aprender em todas as idades.</p><a class="button" href="#projetos">Conheça os projetos</a></div><img src="../imagens/livro-aberto.svg" alt="Ilustração de um livro aberto" width="480" height="420"></section>
    <section v-else-if="route==='projetos'" aria-labelledby="titulo-projetos"><h1 id="titulo-projetos">Histórias que saem da estante.</h1><p class="intro">Escolha uma iniciativa para guardar em seus interesses.</p><div class="projetos"><article v-for="project in projects" :key="project.id"><h2>{{project.title}}</h2><p>{{project.description}}</p><button type="button" @click="toggleInterest(project.id)" :aria-pressed="interests.includes(project.id)">{{interests.includes(project.id)?'Remover dos interesses':'Guardar interesse'}}</button></article></div><p role="status">{{feedback}}</p></section>
    <section v-else-if="route==='participar'" aria-labelledby="titulo-participar"><h1 id="titulo-participar">Participe da história.</h1><p class="intro">Demonstração acadêmica. Use dados fictícios. Nome e e-mail não são armazenados nem enviados.</p><form @submit.prevent="submitInterest" novalidate><fieldset><legend>Cadastro de interesse</legend><label for="nome">Nome</label><input id="nome" v-model="form.name" autocomplete="name" :aria-invalid="Boolean(errors.name)" :aria-describedby="errors.name?'erro-nome':null"><small v-if="errors.name" id="erro-nome" class="erro">{{errors.name}}</small><label for="email">E-mail</label><input id="email" type="email" v-model="form.email" autocomplete="email" :aria-invalid="Boolean(errors.email)" :aria-describedby="errors.email?'erro-email':null"><small v-if="errors.email" id="erro-email" class="erro">{{errors.email}}</small><label for="project">Iniciativa</label><select id="project" v-model="form.project" :aria-invalid="Boolean(errors.project)" :aria-describedby="errors.project?'erro-project':null"><option value="">Selecione</option><option v-for="project in projects" :key="project.id" :value="project.id">{{project.title}}</option></select><small v-if="errors.project" id="erro-project" class="erro">{{errors.project}}</small></fieldset><button class="button" type="submit">Registrar interesse de demonstração</button><p role="status">{{feedback}}</p></form></section>
    <section v-else aria-labelledby="titulo-interesses"><h1 id="titulo-interesses">Meus interesses.</h1><p>As escolhas ficam apenas neste navegador.</p><ul v-if="filteredProjects.length"><li v-for="project in filteredProjects" :key="project.id"><strong>{{project.title}}</strong> — {{project.description}} <button type="button" @click="toggleInterest(project.id)">Remover</button></li></ul><p v-else>Nenhuma iniciativa guardada. <a href="#projetos">Conheça os projetos</a>.</p><p role="status">{{feedback}}</p></section>
  </main><footer><p><strong>Casa da Leitura</strong><br>ONG fictícia para projeto acadêmico.</p><p>Casa da Leitura<br>Setembro de 2026</p></footer>`
}).mount('#app');
