"use client";

import { pageData } from "@/src/constants/phrases/header-items";
import { Avatar, Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "home";

  const currentPage = pageData[lastSegment] || {
    subtitle: "Welcome to your fitness journey!",
    title: lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1),
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "389px",
        marginBottom: 4,
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#FCFCFC",
            opacity: 0.8,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {currentPage.subtitle}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#FCFCFC",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: 1,
            fontSize: { xs: "20px", sm: "24px" },
          }}
        >
          {currentPage.title}
        </Typography>
      </Box>
      <Avatar
        alt="User Avatar"
        src="/User/avatar.svg"
        sx={{
          width: { xs: 48, sm: 56 },
          height: { xs: 48, sm: 56 },
          border: "1px solid white",
        }}
      />
    </Box>
  );
};

export default Header;
