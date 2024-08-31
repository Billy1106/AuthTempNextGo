"use client";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import useAuth from "@/common/hooks/auth/useAuth";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useRequestContext } from "@/common/contexts/RequestContext";

export default function Home() {
  const { data: session, status } = useSession();

  const isSignedIn = useMemo(() => status === "authenticated", [status]);

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
        {isSignedIn ? (
          <>
            <Typography variant="h4" gutterBottom>
              Welcome, {session?.user.email}!
            </Typography>
            <Button variant="contained" href="/signout">
              Go to Sign out
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              You are not signed in.
            </Typography>
            <Button variant="contained" href="/signin">
              Go toSign in
            </Button>
          </>
        )}
      </Box>
    </main>
  );
}
