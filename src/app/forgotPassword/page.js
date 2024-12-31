import dynamic from 'next/dynamic';
import { Container, CssBaseline } from '@mui/material';
// import ForgotPasswordForm from '../../component/ForgotPasswordForm';

const ForgotPasswordForm = dynamic(() => import('../../component/ForgotPasswordForm'));

export default function ForgotPassword() {
  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: '#b2b2d4', borderRadius: '3%' }}>
      <CssBaseline />
      <ForgotPasswordForm />
    </Container>
  );
}
