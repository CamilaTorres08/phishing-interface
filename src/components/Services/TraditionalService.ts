import axios from "axios";
import { Traditional } from "./Traditional";
import { PhishingAnalyzer } from "./PhishingAnalyzer";


export const TraditionalAnalyzer: PhishingAnalyzer = {
    API: "http://localhost:8080/v1/phishing",
    async getResult(url: string): Promise<Traditional | undefined> {
      try {
        const response = await axios.post<Traditional>(this.API, { url: url });
        return response.data;
      } catch (error) {
        console.error("TraditionalAnalyzer error:", error);
      }
    }
  };
