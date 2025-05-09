import { NLPResponse } from "./NLPResponse";
import { Traditional } from "./Traditional";

export interface CombinedResponse{
    IAAnalyzer: NLPResponse;
    TraditionalAnalyzer: Traditional;
}