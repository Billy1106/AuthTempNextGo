import styles from "./page.module.css";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
    </main>
  );
}
