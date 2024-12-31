import dynamic from 'next/dynamic';
import { Container, CssBaseline } from '@mui/material';

const SignInForm = dynamic(() => import('../../component/SignInForm'));

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: '#b2b2d4', borderRadius: '3%' }}>
      <CssBaseline />
      <SignInForm />
    </Container>
  );
}
