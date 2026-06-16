export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionData {
  title: string;
  description?: string;
  faqs: FAQItem[];
}

export const tradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about trading, investing, leverage, and how ApexTrade works.",
  faqs: [
    {
      question: "What is trading?",
      answer:
        "Trading is the process of buying and selling financial instruments such as stocks, commodities, futures, and options to benefit from market price movements.",
    },
    {
      question: "What is intraday trading?",
      answer:
        "Intraday trading involves opening and closing all positions within the same trading day, without carrying trades overnight.",
    },
    {
      question: "What is option trading?",
      answer:
        "Option trading gives traders the right, but not the obligation, to buy or sell an underlying asset at a set price before a specific date. It is widely used for speculation and hedging.",
    },
    {
      question: "What is equity trading?",
      answer:
        "Equity trading refers to buying and selling shares of publicly listed companies on stock exchanges such as NSE and BSE.",
    },
    {
      question: "What is margin trading?",
      answer:
        "Margin trading allows traders to use leverage to take larger positions than their available account balance. ApexTrade offers 500X intraday and 60X holding leverage.",
    },
    {
      question: "Which markets can I trade on ApexTrade?",
      answer:
        "ApexTrade provides access to equities, commodities (MCX), futures, and options through a single trading account.",
    },
    {
      question: "How do I start trading in India?",
      answer:
        "Open your ApexTrade account, complete KYC, add funds, choose your market segment, and start placing trades with real-time data and built-in risk tools.",
    },
    {
      question: "Is ApexTrade suitable for beginners?",
      answer:
        "Yes. ApexTrade is designed to be accessible for beginners while offering advanced tools for experienced traders. The platform supports both approaches.",
    },
    {
      question: "How fast are withdrawals on ApexTrade?",
      answer:
        "Withdrawals are processed within 30 minutes, making ApexTrade one of the fastest platforms in the industry.",
    },
    {
      question: "Why is the choice of trading platform important?",
      answer:
        "A reliable platform improves execution speed, provides better market data, simplifies fund management, and protects your capital with built-in risk controls.",
    },
  ],
};
