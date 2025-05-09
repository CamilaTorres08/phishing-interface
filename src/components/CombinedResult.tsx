import { Box, Card, CardActions, Alert, AlertTitle, Typography, Container, CardHeader } from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import { CombinedResponse } from "./Services/CombinedResponse";
import TabPanel from "./TabPanel";

interface PhishingResultProps {
  result: CombinedResponse;
}

export function CombinedResult({ result }: PhishingResultProps) {
  console.log("CombinedResult", result);
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
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
        <CardHeader
            title="NLP Analyzer"
            titleTypographyProps={{
            variant: "h6",
            sx: { color: "#00e5ff", fontWeight: "bold" },
            }}
            sx={{ borderBottom: "1px solid rgba(0, 229, 255, 0.2)" }}
        />
        <CardActions sx={{ p: 3 }}>
            <Alert
            severity={result.IAAnalyzer.prediction === "Phishing" ? "error" : "success"}
            variant="outlined"
            icon={result.IAAnalyzer.prediction === "Phishing" ? <ShieldOutlinedIcon /> : <ShieldIcon />}
            sx={{
                width: "100%",
                bgcolor: result.IAAnalyzer.prediction === "Phishing" ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)",
                borderColor: result.IAAnalyzer.prediction === "Phishing" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)",
                "& .MuiAlert-icon": {
                color: result.IAAnalyzer.prediction === "Phishing" ? "#ff5252" : "#00ffc2",
                },
            }}
            >
            <AlertTitle>{result.IAAnalyzer.prediction === "Phishing" ? "Potential Threat Detected" : "URL Appears Safe"}</AlertTitle>
            <Typography variant="body2" sx={{ mb: 1 }}>
                {result.IAAnalyzer.prediction}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <Typography variant="caption">Probabilities:</Typography>
                <Typography variant="caption" fontWeight="bold">
                Phishing: { result.IAAnalyzer.probabilities["Phishing"]}
                </Typography>
                <Typography variant="caption" fontWeight="bold">
                No Phishing: {result.IAAnalyzer.probabilities["No Phishing"]}
                </Typography>
            </Box>
            </Alert>
        </CardActions>
        </Card>
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
        <CardHeader
            title="Traditional Analyzer"
            titleTypographyProps={{
            variant: "h6",
            sx: { color: "#00e5ff", fontWeight: "bold" },
            }}
            sx={{ borderBottom: "1px solid rgba(0, 229, 255, 0.2)" }}
        />
        <CardActions sx={{ p: 3 }}>
            <Alert
            severity={result.TraditionalAnalyzer.phishing  ? "error" : "success"}
            variant="outlined"
            icon={result.TraditionalAnalyzer.phishing ? <ShieldOutlinedIcon /> : <ShieldIcon />}
            sx={{
                width: "100%",
                bgcolor: result.TraditionalAnalyzer.phishing ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)",
                borderColor: result.TraditionalAnalyzer.phishing ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)",
                "& .MuiAlert-icon": {
                color: result.TraditionalAnalyzer.phishing ? "#ff5252" : "#00ffc2",
                },
            }}
            >
            <AlertTitle>{result.TraditionalAnalyzer.phishing ? "Potential Threat Detected" : "URL Appears Safe"}</AlertTitle>
            <Typography variant="body2" sx={{ mb: 1 }}>
                {result.TraditionalAnalyzer.phishing ? "This URL shows characteristics of phishing or malware."
                : "No malicious patterns detected in this URL."}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <TabPanel result={result.TraditionalAnalyzer}/>
            </Box>
            </Alert>
        </CardActions>
        </Card>
        
    </Container>
  )
}