const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Configuración de los encabezados CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // O reemplaza '*' con el origen específico de tu aplicación React
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Montar JSON Server con las configuraciones de CORS
server.use(middlewares);
const router = jsonServer.router('db.json');
server.use('/api', router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server está escuchando en el puerto ${PORT}`);
});
