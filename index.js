import 'dotenv/config';
import express from 'express';
import bukuRoutes from './routes/buku.routes.js';
import logger from './middlewares/logger.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());
app.use(logger);
app.use('/buku', bukuRoutes);
// Urutan penting: notFound setelah semua router, errorHandler paling akhir.
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
