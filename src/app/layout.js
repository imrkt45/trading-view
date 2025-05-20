import { Inter } from "next/font/google";
import "./globals.css";
import { Box} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'; 
import theme from "../component/theme/theme";
import CustomFooter from "../component/Footer";
import CustomHeader from "../component/Header"
import Loading from "../component/Loading"




const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"

            sx={{
              margin: '0px',
              marginLeft:"30px",
              marginRight:"30px"
            }}
          >
            <CustomHeader />
            <Box component="main" flexGrow={1} sx={{ py: 2 }}>
              {children}
            </Box>
             <CustomFooter />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
