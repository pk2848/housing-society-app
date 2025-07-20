# Housing Society Application

This is a full-stack application for managing a housing society. It includes a backend built with Spring Boot and a frontend built with React.

## Technologies Used

**Backend:**
* Spring Boot
* Java
* Maven
* Spring Data JPA
* MySQL Connector
* Springdoc OpenAPI
* Spring Boot Starter Validation

**Frontend:**
* React.js
* Tailwind CSS
* React Router DOM

## Getting Started

### Prerequisites

* Java Development Kit (JDK)
* Maven
* Node.js and npm
* MySQL Database

### Backend Setup

1. Navigate to the `housing-society-app/backend/housing-society-backend` directory.
2. Configure your database connection in `src/main/resources/application.properties` (or `application.yml`).
3. Build the project:
   ```bash
   ./mvnw clean install
   ```
4. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup

1. Navigate to the `housing-society-app/frontend/housing-society-frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

* `housing-society-app/backend`: Contains the Spring Boot backend code.
* `housing-society-app/frontend`: Contains the React frontend code.

