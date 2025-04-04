import { useState } from "react";
import {Box, Button, Typography, Container } from "@mui/material";
import { CyberShieldHeader } from "../src/components/CyberShieldHeader"
import { PhishingDetectorForm } from "./components/PhishingDetectorForm";
import { PhishingResult } from "./components/PhishingResult";
import { NLPResponse } from "./components/Services/NLPResponse";
import { NLPResult } from "./components/NLPResult";
import { Traditional } from "./components/Services/Traditional";
import { TraditionalAnalyzer } from "./components/Services/TraditionalService";
import { PhishingAnalyzer } from "./components/Services/PhishingAnalyzer";
import { TraditionalResult } from "./components/TraditionalResult";
function App() {
  const [url, setUrl] = useState("")
  const [method, setMethod] = useState<PhishingAnalyzer>(TraditionalAnalyzer)
  const [result, setResult] = useState<NLPResponse | Traditional>()
  const [loading, setLoading] = useState(false)
  const getMethodResult = async (url: string) => {
    setLoading(true)
    const r = await method.getResult(url);
    if(r){
      console.log(r);
      setResult(r);
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const url = formData.get("url") as string;
    if (!url) return;
    getMethodResult(url);
  };
  

  return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          position: "relative",
          overflow: "hidden",
          pt: 4,
          pb: 8,
        }}
      >
        {/* Cybernetic background with grid pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.2,
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 255, 196, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 255, 196, 0.15) 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <CyberShieldHeader />

          <Box sx={{ maxWidth: 700, mx: "auto" }}>
            <PhishingDetectorForm
              url={url}
              setUrl={setUrl}
              method={method}
              setMethod={setMethod}
              loading={loading}
              handleSubmit={handleSubmit}
            />

            { result && 'probabilities' in result && <NLPResult result={result as NLPResponse} /> }
            { result && 'virus_total' in result && <TraditionalResult result={result as Traditional} /> }

            <Box sx={{ textAlign: "center", mt: 4, color: "text.secondary" }}>
              <Typography variant="body2">
                This tool analyzes URLs for potential phishing and malware threats.
              </Typography>
              <Typography variant="body2">Always exercise caution when visiting unfamiliar websites.</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
  );
}

export default App;

