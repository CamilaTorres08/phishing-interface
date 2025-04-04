"use client"

import type React from "react"

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Radio,
  TextField,
  Button,
  LinearProgress,
} from "@mui/material"
import ShieldIcon from "@mui/icons-material/Shield"
import BoltIcon from "@mui/icons-material/Bolt"
import { TraditionalAnalyzer } from "./Services/TraditionalService"
import { PhishingAnalyzer } from "./Services/PhishingAnalyzer"
import { IAAnalyzer } from "./Services/NLPService"

interface PhishingDetectorFormProps {
  url: string
  setUrl: (url: string) => void
  method: PhishingAnalyzer
  setMethod: (method: PhishingAnalyzer) => void
  loading: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  result?: any 
}

export function PhishingDetectorForm({
  url,
  setUrl,
  method,
  setMethod,
  loading,
  handleSubmit,
  result,
}: PhishingDetectorFormProps) {
  
  return (
    <Card
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 229, 255, 0.2)",
        boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
        borderRadius: 2,
        mb: result ? 0 : 4,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" color="#00e5ff">
            URL Malware Scanner
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            Detect phishing and malicious URLs using advanced detection methods
          </Typography>
        }
      />

      <CardContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <FormControl>
            <FormLabel sx={{ color: "#00e5ff", mb: 2 }}>Detection Method</FormLabel>
            <Grid container spacing={2} sx={{
                justifyContent: "center",
            }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  onClick={() => setMethod(TraditionalAnalyzer)}
                  sx={{
                    p: 2,
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    border: "2px solid",
                    borderColor: method === TraditionalAnalyzer ? "#00e5ff" : "rgba(0, 229, 255, 0.2)",
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      borderColor: "rgba(0, 229, 255, 0.5)",
                      bgcolor: "rgba(0, 229, 255, 0.05)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%"
                  }}
                >
                  <ShieldIcon sx={{ color: "#00e5ff", fontSize: 32, mb: 1 }} />
                  <Typography variant="subtitle2">Traditional</Typography>
                  <Typography variant="caption" color="text.secondary">
                    BlackList method with VirusTotal
                  </Typography>
                  <Radio
                    checked={method === TraditionalAnalyzer}
                    onChange={() => setMethod(TraditionalAnalyzer)}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: method === TraditionalAnalyzer ? "#00e5ff" : "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  />
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  onClick={() => setMethod(IAAnalyzer)}
                  sx={{
                    p: 2,
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    border: "2px solid",
                    borderColor: method === IAAnalyzer ? "#00ffc2" : "rgba(0, 255, 196, 0.2)",
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      borderColor: "rgba(0, 255, 196, 0.5)",
                      bgcolor: "rgba(0, 255, 196, 0.05)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%"
                  }}
                >
                  <BoltIcon sx={{ color: "#00ffc2", fontSize: 32, mb: 1 }} />
                  <Typography variant="subtitle2">AI-Powered</Typography>
                  <Typography variant="caption" color="text.secondary">
                    NLP enhanced detection
                  </Typography>
                  <Radio
                    checked={method === IAAnalyzer}
                    onChange={() => setMethod(IAAnalyzer)}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: method === IAAnalyzer ? "#00ffc2" : "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </FormControl>

          <FormControl>
            <FormLabel sx={{ color: "#00e5ff", mb: 1 }}>URL to Scan</FormLabel>
            <TextField
                name="url"
              fullWidth
              placeholder="Enter URL to analyze (e.g., https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                  "& fieldset": {
                    borderColor: "rgba(0, 229, 255, 0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(0, 229, 255, 0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00e5ff",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            disabled={!url || loading}
            sx={{
              py: 1.5,
              background: "linear-gradient(to right, #00e5ff, #00ffc2)",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(to right, #33eaff, #33ffd0)",
              },
              "&.Mui-disabled": {
                background: "rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            {loading ? "Analyzing..." : "Scan URL"}
          </Button>

          {loading && (
            <LinearProgress
              sx={{
                mt: -2,
                mb: 2,
                height: 4,
                borderRadius: 2,
                bgcolor: "rgba(0, 229, 255, 0.1)",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#00e5ff",
                },
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  )
}


