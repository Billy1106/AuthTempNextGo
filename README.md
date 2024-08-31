## What is this

This is a template for a frontend/backend/DB project that leverages NextAuth for session management and Firebase for user authentication. It uses JWT tokens to communicate with the backend and integrates MongoDB as the database through a repository layer. You can use mongo_test to verify the connection. Additionally, you can utilize Swagger to create a schema for frontend requests by generating the schema with Swagger, providing a robust foundation for building secure applications.

## How to use

1. **Set up Firebase**: Create a Firebase project and gather the necessary credentials.
2. **Configure Environment Variables**:
   - For the backend, create a `.env` file in the `backend/` directory and add:
     ```env
     FB_SECRET_CREDENTIAL=
     MONGO_HOST="mongodb://mongo:27017"
     MONGO_USER="mongo"
     MONGO_PASSWORD="mongo"
     MONGO_DB="mongo_example"
     ```
   - For the frontend, create a `.env.local` file in the `frontend/` directory and add:
     ```env
     NEXT_PUBLIC_API_BASE_URL=

     NEXT_PUBLIC_FIREBASE_API_KEY=
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
     NEXT_PUBLIC_FIREBASE_APP_ID=
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
     ```

3. **Server-Side Environment Variables**:
   - Add the following to your server environment variables:
     ```env
     NEXT_PUBLIC_FIREBASE_PRIVATE_KEY=
     NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL=
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=
     ```

4. **Run the Project**:
   - Start the services by running:
     ```bash
     docker-compose up --build
     ```
   - If you encounter any issues, navigate to the `frontend/` directory and run:
     ```bash
     npm install
     ```
