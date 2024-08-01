const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const dbRouter = jsonServer.router(path.join(__dirname, 'db.json'));
const bookRouter = jsonServer.router(path.join(__dirname, 'book.json'));

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes for books
server.use('/books', bookRouter);
server.use('/users', dbRouter);

server.post('/books', (req, res) => {
  const book = { id: Date.now(), ...req.body };
  bookRouter.db.get('books').push(book).write();
  res.status(201).send(book);
});

server.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  bookRouter.db.get('books').remove({ id: Number(id) }).write();
  res.status(204).send();
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  dbRouter.db.get('users').remove({ id: Number(id) }).write();
  res.status(204).send();
});

// Fallback to dbRouter for other routes
server.use(dbRouter);

server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
