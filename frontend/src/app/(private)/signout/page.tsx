"use client";
import { Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import useAuth from "@/common/hooks/auth/useAuth";
import { useRequestContext } from "@/common/contexts/RequestContext";

export default function SignOutPage() {
  const { data: session, status } = useSession();
  const { signOutUser, loading } = useAuth();
  const { client } = useRequestContext();

  const handleTestButton = async () => {
    try {
      const res = await client?.GET("/test", {});
      console.log(res, "res");
    } catch (error) {
      console.error(error);
    }
  };
  
  if (status !== "authenticated") {
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
          You are not signed in.
        </Typography>
      </Box>
    );
  }

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
      Welcome, {session?.user.email}!
      </Typography>
      <Box>
        <Button variant="contained" onClick={signOutUser} disabled={loading}>
          {loading ? "Signing out..." : "Sign out"}
        </Button>
        <Button variant="contained" onClick={handleTestButton} disabled={loading}>
          Test send request
        </Button>
      </Box>
    </Box>
  );
}
