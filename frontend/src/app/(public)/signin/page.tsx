"use client";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import useAuth from "@/common/hooks/auth/useAuth";

export default function SignInPage() {
  const { signIn, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
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
        Please Sign In
      </Typography>
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}
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
    </Box>
  );
}
