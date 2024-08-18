"use client";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import useAuth from "@/common/hooks/auth/useAuth";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const { signIn, signOutUser, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn(email, password);
  };

  useEffect(() => {
    console.log(session, status, session?.user);
  }, [session, status, session?.user]);

  return (
    <main>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {status === "authenticated"
            ? `Welcome, ${session.user?.name}!`
            : "Please Sign In"}
        </Typography>
        {error && (
          <Typography variant="body1" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        {status === "authenticated" ? (
          <Button
            variant="contained"
            onClick={signOutUser}
            disabled={loading}
          >
            {loading ? "Signing out..." : "Sign out"}
          </Button>
        ) : (
          <form onSubmit={handleSignIn}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              margin="normal"
              fullWidth
              required
            />
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ marginTop: 2 }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        )}
      </Box>
    </main>
  );
}
