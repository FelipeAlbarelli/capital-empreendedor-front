This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Cria o dir 'build', com a parte frontend do projeto. Como front e backend estão em dir independentes, a cada nova build de frontend é preciso atualizar manualmente o dir 'public' do backend.

## Sobre o projeto ##

Como o front-end é uma SPA em react, o servidor tem como função apenas servir o diretório estático e ser uma API. Para isso foi utilizado react-router. 

Usualmente react-router é utilizado junto com react-redux, facilitando a comunicação entre componentes de diferentes páginas. Isso não foi feito nesse projeto, dado o pequeno escopo. Assim, as páginas ficaram com o trabalho de aramzenar um state, solucionando o pequeno problema.

Aproveitando a capacidade de modularidade dos componentes react, foi utilizado @material-ui, componentes com estilo material desing. Isso simplificou o tempo para estilizar os componentes. 