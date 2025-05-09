import axios from "axios";
import { PhishingAnalyzer } from "./PhishingAnalyzer";
import { CombinedResponse } from "./CombinedResponse";
import { Traditional } from "./Traditional";
import { NLPResponse } from "./NLPResponse";

export const CombinedAnalyzer : PhishingAnalyzer = {
    API: "http://localhost",

    async getResult(url: string): Promise<CombinedResponse | undefined> {
      try {
        const API1 = this.API + ":5000/nlp/phishing/analyze";
        const API2 = this.API + ":8080/v1/phishing/text";

        const nlp = await axios.post<NLPResponse>(API1, { content: url });
        const traditional = await axios.post<Traditional>(API2, { text: url });
        const combinedResponse: CombinedResponse = {
          IAAnalyzer: nlp.data,
          TraditionalAnalyzer: traditional.data,
        };
        return combinedResponse;
      } catch (error) {
        console.error("IAAnalyzer error:", error);
      }
    }
}
