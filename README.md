# Vue.js Storybook

## O que é o Storybook?

Storybook é uma ferramenta Open Source que ajuda a desenvolver componentes de interface de forma isolada, ou seja, com o uso do Storybook é possível trabalhar em apenas um componente por vez, abstraindo qualquer stack complexa, e testá-los sem a necessidade de navegar entre telas.

Atualmente ele tem suporte oficial para o Vue.js, React, Angular e Web components, porém também algumas tecnologias são suportadas pela comunidade, entre eles temos: Ember, Svelte, Rax, Preact, Marko e o próprio HTML.

O Storybook usa o que é chamado de "stories" para renderizar cada componente em um canvas, onde é possivel iteragir livremente com seu componente de UI, por padrão ele já vem configurado com HMR, ou seja, você não precisa recarregar a página sempre que realiza alguma alteração. 

## Como usar no seu projeto Vue?

Antes de tudo inicie seu projeto com o Vue CLI (Nesse exemplo estou usando a versão 2.x).
```properties
foo@bar:~$ vue create nome-do-projeto
```

É possível adicionar o Storybook com o próprio Vue CLI:
```properties
foo@bar:~$ vue add storybook
```

Após finalizar essa operação é possível observar que foi criado uma pasta `config/storybook`, nessa pasta é onde podemos manipular as opções do framework, além disso foi adicionado o diretório `src/stories`, com um arquivo `index.stories.js`, se olharmos novamente no `config/storybook` é possível notar que o arquivo main, classifica todos os arquivos com a extensão `**.stories.js` como as stories que são usadas para renderizar o componente, por fim mas não menos importante foi adicionado dois scripts ao nosso `package.json`, `storybook:build` e `storybook:serve` e um componente `MyButton.vue` como exemplo.


### Explorando as stories

Rodando o comando `yarn storybook:serve` o Storybook abre uma nova aba na porta 6006, onde é possível ver no canto direito as variantes do MyButton e iteragir com ele via canvas.

Abrindo o index.stories.js podemos ver que ele exporta 3 constantes, cada uma com uma variação do MyButton, é possível tanto exportar via template string, como via JSX com o método render, a fim de simplificação iremos usar apelas o modo de template string.

### Escrevendo histórias

Agora vamos escrever nossa primeira história, vamos criar um input que iremos chamar de `StoryInput` (o código está em `src/components/StoryInput.vue`), no arquivo `StoryInput.stories.js` basta importar o componente Vue, e exportar como default um objeto com o nome que você deseja que apareca na sua lista de stories e o componente, após isso basta exportar n constantes com cada variante do objeto, no caso exportamos tanto uma variante com placeholder, como uma sem placeholder.