mport express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

// Use routes defined in full_server/routes/index.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
export default app;

