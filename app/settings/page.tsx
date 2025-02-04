"use client";
import Image from "next/image";
import { Container, Box, Typography, Button } from "@mui/material";

export default function Settings() {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#364033",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {/* Main Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "389px",
          borderRadius: "37.924px",
          backgroundColor: "#364033",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          gap: 3,
        }}
      >
        {/* Profile Section */}
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <Box
            sx={{
              position: "relative",
              width: "169.661px",
              height: "169.661px",
              borderRadius: "50%",
              border: "5px solid #FFC9E9",
              backgroundImage: 'url("/profile-picture.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "0 auto",
            }}
          >
            {/* Edit Button */}
            <Button
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                minWidth: "30.94px",
                height: "30.94px",
                backgroundColor: "#F5F2B8",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
              aria-label="Edit Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#5F5F5F"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9.5-9.5zm-.646.646L2 11.146V13h1.854l9.5-9.5L11.5 2 8 5.5 7.5 5 11 1.5l-.5-.5z" />
              </svg>
            </Button>
          </Box>
          <Typography
            variant="h5"
            sx={{ mt: 2, fontWeight: "bold", color: "white" }}
          >
            Youssef Labidi
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            172 CM
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            62 KG
          </Typography>
        </Box>

        {/* App Settings */}
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "white", mb: 2 }}
          >
            Account
          </Typography>
          <Box
            sx={{
              width: "100%",
              borderRadius: "27px",
              border: "1px solid #2B2A2D",
              backgroundColor: "#2B2A2D",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Account Informations */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 3,
                py: 2,
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                Account Information
              </Typography>
              <Image
                src="/arrow.svg"
                alt="Arrow Icon"
                width={17}
                height={17}
                style={{ marginLeft: "auto" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Support Section */}
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", color: "white", mb: 2 }}
          >
            Support
          </Typography>
          <Box
            sx={{
              width: "100%",
              borderRadius: "27.445px",
              border: "1px solid #2B2A2D",
              backgroundColor: "#2B2A2D",
              display: "flex",
              flexDirection: "column",
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid gray",
                pb: 2,
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                Terms Of Service
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 2,
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                Privacy Policy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
