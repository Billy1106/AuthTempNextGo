import { signIn, signOut, useSession } from 'next-auth/react';
import { Box, Button } from "@mui/material";
export default function SignIn() {
  const { data: session, status } = useSession();
  
  return (
    <main>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
      ClientComponent {status}{' '}
      {status === 'authenticated' && session.user?.name}
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
      </Box>
    </main>
  );
}