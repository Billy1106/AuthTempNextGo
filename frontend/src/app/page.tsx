"use client";
import { Box, Button } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          ClientComponent {status}{" "}
          {status === "authenticated" && session.user?.name}
          <Button onClick={() => signIn()}>Sign in</Button>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      </Box>
    </main>
  );
}
