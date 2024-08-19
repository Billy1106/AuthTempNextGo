## What is this

This is a template for an authenticated frontend/backend service using Firebase. It leverages NextAuth for session management and Firebase for user authentication, providing a robust foundation for building secure applications.

## How to use

1. **Set up Firebase**: Create a Firebase project and gather the necessary credentials.
2. **Configure Environment Variables**:
   - For the backend, create a `.env` file in the `backend/` directory and add:
     ```env
     FB_SECRET_CREDENTIAL=
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

## How it works

### Frontend Sign-In Logic

1. **Enter Password and Email**:
   - The user inputs their email and password into the provided fields.

2. **Attempt Sign-In with `signInWithEmailAndPassword`**:
   - These credentials are used to authenticate with Firebase. Upon successful authentication, Firebase returns an ID token.

3. **Use ID Token to Sign in via NextAuth**:
   - The authenticated ID token is then passed to `signInByNextAuth` to establish a session with NextAuth.

4. **NextAuth Verifies the ID Token**:
   - NextAuth uses its authentication API to verify the ID token provided by Firebase.

5. **User Data Returned to JWT and Session**:
   - Upon successful verification, NextAuth returns the user data, which is stored in both the JWT (JSON Web Token) and the session.

6. **Fetch User Data with `useSession`**:
   - The `useSession` hook can then be used to fetch the authenticated user's data within your application.

### Backend Logic

1. **Token Verification**:
   - When the backend receives a request from the frontend (e.g., for testing purposes), it checks whether the provided token is verified before processing the request.
