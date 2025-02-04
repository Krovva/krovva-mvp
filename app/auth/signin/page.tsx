"use client";
import { Box, Button, Typography, Link, Snackbar, Alert } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { WalletAuthBlock } from "@/components/WalletAuth";
import { useState } from "react";
import Image from "next/image";

export default function SignInPage() {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSuccess = (address: any) => {
    console.log("Successfully authenticated with address:", address);
  };

  const handleError = (error: { message: any }) => {
    console.error("Authentication error:", error);
    setError(error.message || "Authentication failed");
    setShowError(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "white",
        color: "black",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Hero Image Section */}
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src="/signin.png"
          alt="Fitness athlete using gym equipment"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.66%, white 100%)",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          px: 3,
          pb: 4,
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            mb: 1,
            textAlign: "center",
          }}
        >
          Wherever You Are{" "}
          <Box component="span" sx={{ display: "block" }}>
            <Box
              component="span"
              sx={{
                bgcolor: "#9fff00",
                px: 1,
                mx: -1,
              }}
            >
              Health
            </Box>{" "}
            Is Number One
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "16px",
            mb: 4,
            textAlign: "center",
          }}
        >
          There is no instant way to a healthy life
        </Typography>

        {/* WalletAuth Integration */}
        <WalletAuthBlock
          onSuccess={handleSuccess}
          onError={handleError}
          buttonComponent={
            <Button
              variant="contained"
              fullWidth
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: "#192126",
                color: "white",
                borderRadius: "100px",
                py: 2,
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#253136",
                },
                mb: 2,
              }}
            >
              Get started
            </Button>
          }
        />

        {/* Terms and Privacy */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "14px",
          }}
        >
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            underline="hover"
            sx={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            underline="hover"
            sx={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Box>

      {/* Error Snackbar */}
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
