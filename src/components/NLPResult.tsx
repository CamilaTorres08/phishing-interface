import { Box, Card, CardActions, Alert, AlertTitle, Typography } from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import { NLPResponse } from "./Services/NLPResponse"

interface PhishingResultProps {
  result: NLPResponse;
}

export function NLPResult({ result }: PhishingResultProps) {
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
          severity={result.prediction === "Phishing" ? "error" : "success"}
          variant="outlined"
          icon={result.prediction === "Phishing" ? <ShieldOutlinedIcon /> : <ShieldIcon />}
          sx={{
            width: "100%",
            bgcolor: result.prediction === "Phishing" ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)",
            borderColor: result.prediction === "Phishing" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)",
            "& .MuiAlert-icon": {
              color: result.prediction === "Phishing" ? "#ff5252" : "#00ffc2",
            },
          }}
        >
          <AlertTitle>{result.prediction === "Phishing" ? "Potential Threat Detected" : "URL Appears Safe"}</AlertTitle>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {result.prediction}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Typography variant="caption">Probabilities:</Typography>
            <Typography variant="caption" fontWeight="bold">
            Phishing: { result.probabilities["Phishing"]}
            </Typography>
            <Typography variant="caption" fontWeight="bold">
              No Phishing: {result.probabilities["No Phishing"]}
            </Typography>
          </Box>
        </Alert>
      </CardActions>
    </Card>
  )
}