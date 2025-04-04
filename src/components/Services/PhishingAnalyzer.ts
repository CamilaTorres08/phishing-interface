export interface PhishingAnalyzer {
    API: string;
    getResult: (url: string) => Promise<any>;
  }