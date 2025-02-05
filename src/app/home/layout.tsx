import Header from "@/src/components/layout/Header";
import Navbar from "@/src/components/layout/Navbar";
import { Container } from "@mui/material";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        height: "auto",
        backgroundColor: "#3E463A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: { xs: "30px 10px", sm: "30px 10px" },
      }}
    >
      <Header />
      {children}
      <Navbar />
    </Container>
  );
};

export default Layout;
