const App = require('./app');

const app = App.server;

app.listen(8080, () => {
    console.log('Servidor online!');
});