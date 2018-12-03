import express from 'express';
import router from './routes';

const app = express();

app.use(router);

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  res.render('test');
})

app.use('*', (req, res, next) => {
  res.render('404');
});

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

let server;
export const startServer = (port) => {
  server = app.listen(port);
  console.log('Server listening on port ' + port);
}

export const stopServer = () => server.close();
