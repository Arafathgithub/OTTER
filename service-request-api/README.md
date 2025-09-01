# Service Request API

This project is a REST API application designed to manage service requests. It allows users to create, retrieve, update, and delete service requests, which include various details such as request number, description, status, timestamp, assigned personnel, attachments, work notes, and CTI.

## Features

- Create new service requests
- Retrieve existing service requests
- Update service request details
- Delete service requests
- Attach files to service requests
- Log work notes related to service requests

## Project Structure

```
service-request-api
├── src
│   ├── models
│   │   └── serviceRequest.ts        # Defines the ServiceRequest model
│   ├── controllers
│   │   └── serviceRequestController.ts # Handles HTTP requests for service requests
│   ├── routes
│   │   └── serviceRequestRoutes.ts   # Defines API endpoints for service requests
│   ├── services
│   │   └── serviceRequestService.ts   # Contains business logic for service requests
│   ├── config
│   │   └── database.ts                # Database connection configuration
│   ├── utils
│   │   └── logger.ts                  # Logger utility for logging messages
│   └── app.ts                         # Entry point of the application
├── package.json                       # npm configuration file
├── tsconfig.json                      # TypeScript configuration file
└── README.md                          # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd service-request-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `src/config/database.ts`.

4. Start the application:
   ```
   npm start
   ```

## API Usage

### Endpoints

- **POST /api/service-requests**: Create a new service request
- **GET /api/service-requests/:id**: Retrieve a service request by ID
- **PUT /api/service-requests/:id**: Update a service request by ID
- **DELETE /api/service-requests/:id**: Delete a service request by ID

## Logging

The application uses a logger utility to log messages and errors. Logs can be viewed in the console or directed to a log file as configured in `src/utils/logger.ts`.

## License

This project is licensed under the MIT License.