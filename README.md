# Shack'sNest CMS

Welcome to Shack'sNest CMS! This project is a modern content management system built using cutting-edge technologies to provide a seamless experience for both developers and users. Below, you'll find detailed setup instructions to get started with the project.

---

## Features

- **Frontend**: Built with React and styled using TailwindCSS for a responsive and modern UI.
- **Authentication**: Powered by Clerk for secure and easy user management.
- **Backend**: Developed using Express.js with MongoDB as the database, utilizing Mongoose for schema modeling.
- **Security**: Includes Helmet, CORS, and JWT for secure API interactions.
- **Environment Management**: Configured using dotenv for environment variables.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shacky-me/week-8-capstone_-shacky-me.git
```

---

### 2. Install Dependencies

#### Frontend

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

#### Backend

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

---

### 3. Configure Environment Variables

#### Backend

Create a `.env` file in the `server` directory and add the following variables:

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
CLERK_API_KEY=your-clerk-api-key
PORT=5000
```

Replace the placeholder values with your actual configuration.

---

### 4. Run the Application

#### Backend

Start the backend server:

```bash
cd server
npm start
```

The backend will run on `http://localhost:5000`.

#### Frontend

Start the frontend development server:

```bash
cd client
npm start
```

The frontend will run on `http://localhost:5173`.

---

## Project Structure

### Frontend

- **React**: Component-based architecture for building the UI.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Backend

- **Express.js**: Handles API routes and middleware.
- **MongoDB & Mongoose**: Database and schema modeling.
- **dotenv**: Manages environment variables.
- **Helmet**: Enhances security by setting HTTP headers.
- **CORS**: Enables cross-origin resource sharing.
- **JWT**: Provides secure token-based authentication.

---

## Development Workflow

1. **Frontend**: Modify React components and TailwindCSS styles in the `client` directory.
2. **Backend**: Add or update API routes and database models in the `server` directory.
3. **Testing**: Use tools like Postman or Insomnia to test API endpoints.

---

## Deployment

For deployment, you can use platforms like:

- **Frontend**: Vercel or Netlify.
- **Backend**: Heroku, AWS, or DigitalOcean.

Ensure you update environment variables for production.

---

## Contributing

Feel free to contribute to Shack'sNest CMS by submitting issues or pull requests. Follow the project's coding standards and guidelines.

---

## License

This project is licensed under the MIT License.

---

Thank you for using Shack'sNest CMS! If you have any questions, feel free to reach out to me personally.
