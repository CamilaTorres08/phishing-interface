export interface NLPResponse{
    prediction: string;
    probabilities: {
        "Phishing": number;
        "No Phishing": number;
    };
}