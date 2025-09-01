import { createLogger, format, transports } from 'winston';

// Add the 'export' keyword here
export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
  ],
});