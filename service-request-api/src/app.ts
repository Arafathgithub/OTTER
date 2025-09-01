import express from 'express';
import bodyParser from 'body-parser';
import { logger } from './utils/logger';
// Use a default import for the database config
import databaseConfig from './config/database';
// Import the router
import serviceRequestRoutes from './routes/serviceRequestRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

databaseConfig.connect()
    .then(() => {
        logger.info('Database connected successfully');
    })
    .catch((err: Error) => { // Add type for the error parameter
        logger.error('Database connection error:', err);
        process.exit(1);
    });

// Use the router directly without calling it as a function
app.use('/api/service-requests', serviceRequestRoutes);

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});