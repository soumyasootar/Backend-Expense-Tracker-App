const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// import express from 'express';
// import low from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync';

// const adapter = new FileSync('db.json');
// const db = low(adapter);

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.get('/users', (req, res) => {
//   const users = db.get('users').value();
//   res.json(users);
// });

// app.post('/users', (req, res) => {
//   const user = req.body;
//   db.get('users').push(user).write();
//   res.json(user);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
