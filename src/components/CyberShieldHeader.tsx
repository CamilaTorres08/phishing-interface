import { Box, Typography } from "@mui/material"
import ShieldIcon from '@mui/icons-material/Shield';

export function CyberShieldHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 6,
        pb: 3,
        borderBottom: "1px solid",
        borderColor: "rgba(0, 255, 196, 0.2)",
      }}
    >
      <ShieldIcon sx={{ color: "#00e5ff", mr: 2, fontSize: 40 }} />
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(to right, #00e5ff, #00ffc2)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 10px rgba(0, 229, 255, 0.3)",
        }}
      >
        Phishing Detector
      </Typography>
    </Box>
  )
}

