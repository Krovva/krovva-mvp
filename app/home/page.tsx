"use client";
import { Box, Button, Container, Typography, Link, Snackbar, Alert } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { WalletAuthBlock } from "@/components/WalletAuth";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignInPage() {
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSuccess = (address: any) => {
    console.log('Successfully authenticated with address:', address);
  };

  const handleError = (error: { message: any; }) => {
    console.error('Authentication error:', error);
    setError(error.message || 'Authentication failed');
    setShowError(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(145deg, #ff7043 0%, #e65100 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          px: 3,
        }}
      >
        {/* Welcome Text */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          Krovva
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          Your personal fitness AI Assistant 🏋️
        </Typography>

        {/* WalletAuth Integration */}
        <WalletAuthBlock
          onSuccess={handleSuccess}
          onError={handleError}
          buttonComponent={
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: "#ff7043",
                color: "white",
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                borderRadius: 28,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f4511e",
                },
                mb: 4,
              }}
            >
              Sign In with World ID
            </Button>
          }
        />

        {/* Terms and Privacy */}
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "text.secondary" }}
        >
          By continuing, you agree to our{" "}
          <Link href="/terms" underline="hover" sx={{ color: "text.secondary" }}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" underline="hover" sx={{ color: "text.secondary" }}>
            Privacy Policy
          </Link>
        </Typography>
      </Container>

      {/* Error Snackbar */}
      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowError(false)} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}