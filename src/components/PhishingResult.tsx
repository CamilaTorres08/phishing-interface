import { Box, Card, CardActions, Alert, AlertTitle, Typography } from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"

interface PhishingResultProps {
  result: {
    isPhishing: boolean
    confidence: number
  }
}

export function PhishingResult({ result }: PhishingResultProps) {
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
          severity={result.isPhishing ? "error" : "success"}
          variant="outlined"
          icon={result.isPhishing ? <ShieldOutlinedIcon /> : <ShieldIcon />}
          sx={{
            width: "100%",
            bgcolor: result.isPhishing ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)",
            borderColor: result.isPhishing ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)",
            "& .MuiAlert-icon": {
              color: result.isPhishing ? "#ff5252" : "#00ffc2",
            },
          }}
        >
          <AlertTitle>{result.isPhishing ? "Potential Threat Detected" : "URL Appears Safe"}</AlertTitle>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {result.isPhishing
              ? "This URL shows characteristics of phishing or malware."
              : "No malicious patterns detected in this URL."}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Typography variant="caption">Confidence:</Typography>
            <Box sx={{ flexGrow: 1, bgcolor: "rgba(0, 0, 0, 0.3)", borderRadius: 5, height: 8, overflow: "hidden" }}>
              <Box
                sx={{
                  width: `${result.confidence}%`,
                  bgcolor: result.isPhishing ? "#ff5252" : "#00ffc2",
                  height: "100%",
                }}
              />
            </Box>
            <Typography variant="caption" fontWeight="bold">
              {result.confidence}%
            </Typography>
          </Box>
        </Alert>
      </CardActions>
    </Card>
  )
}

