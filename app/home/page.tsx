import { Box, Button, Container, Typography, Link } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function SignInPage() {
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
          Welcome To
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

        {/* Get Started Button */}
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
          Sign In
        </Button>

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
    </Box>
  );
}

