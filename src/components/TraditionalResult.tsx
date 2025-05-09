import { Box, Card, CardActions, Alert, AlertTitle, Typography } from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import { Traditional } from "./Services/Traditional";
import TabPanel from "./TabPanel";

interface PhishingResultProps {
  result: Traditional;
}

export function TraditionalResult({ result }: PhishingResultProps) {
  console.log("TraditionalResult", result);
  return (
    <Card
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 229, 255, 0.2)",
        boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
        borderRadius: 2,
        mt: 3,
        mb: 4,
      }}
    >
      <CardActions sx={{ p: 3 }}>
        <Alert
          severity={result.phishing  ? "error" : "success"}
          variant="outlined"
          icon={result.phishing ? <ShieldOutlinedIcon /> : <ShieldIcon />}
          sx={{
            width: "100%",
            bgcolor: result.phishing ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)",
            borderColor: result.phishing ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)",
            "& .MuiAlert-icon": {
              color: result.phishing ? "#ff5252" : "#00ffc2",
            },
          }}
        >
          <AlertTitle>{result.phishing ? "Potential Threat Detected" : "URL Appears Safe"}</AlertTitle>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {result.phishing ? "This URL shows characteristics of phishing or malware."
              : "No malicious patterns detected in this URL."}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <TabPanel result={result}/>
          </Box>
        </Alert>
      </CardActions>
    </Card>
  )
}