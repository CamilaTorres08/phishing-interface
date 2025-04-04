import axios from "axios";
import { NLPResponse } from "./NLPResponse";
import { PhishingAnalyzer } from "./PhishingAnalyzer";


export const IAAnalyzer: PhishingAnalyzer = {
    API: "http://127.0.0.1:5000/nlp/phishing/analyze",
    async getResult(url: string): Promise<NLPResponse | undefined> {
      try {
        const response = await axios.post<NLPResponse>(this.API, { content: url });
        return response.data;
      } catch (error) {
        console.error("IAAnalyzer error:", error);
      }
    }
  };