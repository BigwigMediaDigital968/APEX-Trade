import Link from "next/link";

export interface FAQItem {
  question: string;
  answer: React.ReactNode | string;
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
        (<>Trading is the process of buying and selling financial instruments such as Some useful intraday trading tips include using stop losses, trading liquid Futures and Options Trading involves derivative contracts whose value is derived from an underlying asset such as <Link
          href="/stocks"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >stocks</Link>, indices, commodities, or currencies., following a trading plan, and managing risk carefully., commodities, futures, and options to benefit from market price movements.</>),
    },
    {
      question: "What is intraday trading?",
      answer:
        (<><Link
          href="/intraday-trading"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >Intraday trading</Link> involves opening and closing all positions within the same trading day, without carrying trades overnight.</>),
    },
    {
      question: "What is option trading?",
      answer:
        "Option trading gives traders the right, but not the obligation, to buy or sell an underlying asset at a set price before a specific date. It is widely used for speculation and hedging.",
    },
    {
      question: "What is equity trading?",
      answer: (<>
        <Link
          href="/equity-trading"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Equity trading
        </Link>{" "}
        refers to buying and selling shares of publicly listed companies on stock exchanges such as NSE and BSE.
      </>),
    },
    {
      question: "What is margin trading?",
      answer:
        (<><Link
          href="/margin-trading"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >Margin trading </Link> allows traders to use leverage to take larger positions than their available account balance. ApexTrade offers 500X intraday and 60X holding leverage.</>),
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

export const futuresAndOptionsFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is Futures and Options Trading?",
      answer:
        (<>Futures and Options Trading involves derivative contracts whose value is derived from an underlying asset such as <Link
          href="/stocks"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >stocks</Link>, indices, commodities, or currencies.</>),
    },
    {
      question: "How does F&O trading work?",
      answer:
        "Traders take positions using futures or options contracts based on expected market movements without directly owning the underlying asset.",
    },
    {
      question: "What is the difference between futures and options?",
      answer:
        "A futures contract creates an obligation to buy or sell an asset at a future date, while an options contract provides the right, but not the obligation, to do so.",
    },
    {
      question: "Is F&O trading suitable for beginners?",
      answer:
        "Yes, but beginners should first understand derivatives, market fundamentals, and risk management principles before actively trading.",
    },
    {
      question: "Why choose Apex Trade for F&O trading?",
      answer:
        "Apex Trade offers a modern online trading platform with real-time analytics, advanced derivatives tools, fast execution, and comprehensive trading support designed for active traders.",
    },
  ],
};

export const intradayTradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about intraday trading, leverage, risk management, and how to start trading effectively in India.",
  faqs: [
    {
      question: "What is intraday trading?",
      answer:
        "Intraday trading involves buying and selling financial instruments within the same trading day to benefit from short-term price movements.",
    },
    {
      question: "How does intraday trading work?",
      answer:
        "Traders open and close positions during market hours using market analysis, charts, and trading tools to identify opportunities.",
    },
    {
      question: "What are the best intraday trading tips?",
      answer:
        (<>Some useful intraday trading tips include using stop losses, trading liquid Futures and Options Trading involves derivative contracts whose value is derived from an underlying asset such as <Link
          href="/stocks"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >stocks</Link>, indices, commodities, or currencies., following a trading plan, and managing risk carefully.</>),
    },
    {
      question: "Is intraday trading suitable for beginners?",
      answer:
        "Yes, but beginners should first understand Trading for Beginners India, market fundamentals, and risk management concepts.",
    },
    {
      question: "How can I start intraday trading in India?",
      answer:
        "You can start by opening a trading account, completing KYC verification, funding your account, and accessing the markets through a reliable trading platform.",
    },
    {
      question: "What is leverage in intraday trading?",
      answer:
        "Leverage allows traders to increase market exposure using a smaller amount of capital. Proper risk management is important when using leverage.",
    },
    {
      question: "Which online trading platform is best for intraday trading?",
      answer:
        "A good online trading platform should offer fast execution, real-time market data, advanced charting tools, and reliable performance.",
    },
    {
      question: "Why choose Apex Trade for intraday trading?",
      answer:
        "Apex Trade provides fast execution, advanced trading tools, real-time insights, and a professional Online Trading Platform designed for active traders.",
    },
  ],
};

export const equityTradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Learn the fundamentals of equity trading, stock market investing, brokerage charges, portfolio tracking, and how to start trading equities in India.",
  faqs: [
    {
      question: "What is equity trading?",
      answer:
        "Equity trading refers to buying and selling shares of publicly listed companies through stock exchanges such as NSE and BSE, with the aim of profiting from changes in share price.",
    },
    {
      question: "What is the difference between equity trading and investing?",
      answer:
        "Equity trading typically involves shorter holding periods and frequent buying and selling to profit from price movements, while investing focuses on holding shares for the long term to benefit from a company's growth.",
    },
    {
      question: "What is intraday equity trading?",
      answer:
        "Intraday equity trading means buying and selling the same stock within a single trading session, with all positions closed before the market closes.",
    },
    {
      question: "Which exchanges can I trade on with ApexTrade?",
      answer:
        "ApexTrade provides real-time access to both the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).",
    },
    {
      question: "Is equity trading suitable for beginners?",
      answer:
        "Yes. Equity trading is one of the most accessible ways to enter the stock market. ApexTrade's user-friendly platform and smart portfolio tracking make it easier for beginners to get started.",
    },
    {
      question: "What documents do I need to start equity trading in India?",
      answer:
        "You will need a trading account, a demat account, and to complete KYC verification, which typically requires PAN, Aadhaar, and bank account details.",
    },
    {
      question: "How does ApexTrade keep brokerage low for equity trading?",
      answer:
        "ApexTrade's ultra-low brokerage structure is designed to reduce the cost per trade, so a larger share of your profits stays with you.",
    },
    {
      question: "Can I track my entire portfolio in one place?",
      answer:
        "Yes. Smart Portfolio Tracking gives you a consolidated view of all your equity holdings, gains, and losses in a single dashboard.",
    },
  ],
};

export const commodityTradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Learn how commodity trading works in India, understand MCX and NCDEX markets, trading hours, taxation, leverage, and key risks before getting started.",
  faqs: [
    {
      question: "Is commodity trading legal in India?",
      answer:
        "Yes. Commodity trading is fully legal and regulated by SEBI, conducted through recognised exchanges such as MCX for metals and energy products and NCDEX for agricultural commodities. Always trade through a SEBI-registered platform.",
    },
    {
      question: "How much money do I need to start commodity trading?",
      answer:
        "With mini contracts, it is possible to begin with a relatively small amount of capital. Contracts such as Gold Mini or Crude Oil Mini require significantly lower margins than full-sized contracts, making them accessible for newer traders.",
    },
    {
      question: "Which commodity is best for beginners in India?",
      answer:
        "Gold Mini and Crude Oil Mini are commonly recommended for beginners. Gold often exhibits cleaner trends, while crude oil offers larger intraday opportunities but comes with higher volatility. Natural gas and base metals are generally better suited to experienced traders.",
    },
    {
      question: "What are the commodity trading hours in India?",
      answer:
        "Non-agricultural commodities generally trade from 9:00 AM to 11:30 PM IST on MCX, with extended hours during US daylight saving periods. Agricultural commodities on NCDEX typically trade until around 9:00 PM IST.",
    },
    {
      question: "Do I need a Demat account for commodity trading?",
      answer:
        "No. Retail commodity futures trading on MCX is generally cash-settled, so a traditional Demat account is not required. You only need a trading account with a broker that provides access to the commodity segment.",
    },
    {
      question: "What is the difference between MCX and NCDEX?",
      answer:
        "MCX focuses on non-agricultural commodities such as gold, silver, crude oil, natural gas, copper, and other base metals. NCDEX specializes in agricultural commodities including cotton, soybean, chana, jeera, and mustard.",
    },
    {
      question: "How is commodity trading taxed in India?",
      answer:
        "Profits and losses from commodity trading on recognised exchanges are generally treated as non-speculative business income. Depending on individual circumstances, losses may be offset against other business income. It is advisable to consult a qualified tax professional for guidance.",
    },
    {
      question: "Can I trade commodities without taking physical delivery?",
      answer:
        "Yes. Most retail commodity traders close their positions before contract expiry, with profits and losses settled in cash. Physical delivery is typically relevant only for businesses dealing with the actual commodity.",
    },
    {
      question: "What is the biggest risk in commodity trading?",
      answer:
        "Over-leverage is one of the biggest risks in commodity trading. While leverage can amplify gains, it can also magnify losses during sudden market movements caused by economic data, inventory reports, or geopolitical events. Using stop-loss orders and proper position sizing is essential.",
    },
  ],
};

export const marginTradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Understand how margin trading works in India, its benefits, risks, leverage mechanics, and the risk management practices every trader should know before using margin facilities.",
  faqs: [
    {
      question: "What is margin trading?",
      answer:
        "Margin trading is a facility that allows traders to take larger positions in the market by using funds borrowed from their broker. Rather than trading solely with your own capital, you gain additional buying power to participate in bigger market opportunities while keeping your own funds working efficiently.",
    },
    {
      question: "How does margin trading work in practice?",
      answer:
        "A trader deposits funds into their trading account, and the broker extends additional buying power through a margin facility. The trader can then open positions larger than their deposited capital. Profits and losses are calculated on the full position size, and risk management tools help maintain account stability during market fluctuations.",
    },
    {
      question: "What financial instruments can I trade using margin in India?",
      answer:
        (<>Margin trading can be used across a range of asset classes including <Link
          href="/stocks"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >stocks</Link>, commodities, and indices, giving traders the flexibility to respond to opportunities across different markets and conditions.</>),
    },
    {
      question: "What are the main advantages of margin trading?",
      answer:
        "The key benefits include enhanced buying power, more efficient use of capital, the ability to participate in short-term market movements, flexibility across multiple asset classes, and the potential for higher returns when leverage is used responsibly and with proper risk management.",
    },
    {
      question: "Can margin trading result in losses?",
      answer:
        "Yes. Because profits and losses are calculated on the full position size rather than just your deposited capital, losses can exceed what they would be in regular trading. This is why disciplined risk management and a solid understanding of leverage are essential before using margin facilities.",
    },
    {
      question: "Who is margin trading best suited for?",
      answer:
        "Margin trading is generally most suitable for active intraday traders, short-term market participants, and experienced traders who understand leverage and have disciplined risk management practices in place. It is most effective when combined with proper market knowledge and a well-defined trading strategy.",
    },
    {
      question: "Is margin trading suitable for beginners?",
      answer:
        "Margin trading carries additional risk compared to regular trading because of the leverage involved. Beginners are advised to first build a strong understanding of how markets work, how leverage amplifies both gains and losses, and how to apply sound risk management before using margin facilities.",
    },
    {
      question: "What risk management tools are available for margin traders?",
      answer:
        "A well-designed margin trading platform includes advanced risk controls to help traders manage their exposure. These may include automatic position monitoring, margin call alerts, and mechanisms to maintain account stability during volatile market conditions.",
    },
    {
      question: "How is margin trading different from regular stock trading?",
      answer:
        "In regular trading, you can only buy securities up to the value of the funds in your account. With margin trading, your broker extends additional buying power, allowing you to control larger positions. This amplifies both potential gains and potential losses compared to trading with your own capital alone.",
    },
    {
      question: "What should I keep in mind before starting margin trading?",
      answer:
        "Before using margin facilities, it is important to understand how leverage works, set clear risk limits, use stop-loss orders to manage downside exposure, avoid over-leveraging your account, and continuously monitor open positions. Margin trading works best as part of a disciplined, well-planned trading strategy.",
    },
  ],
};

export const stockTradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Learn the fundamentals of stock trading in India, understand market terminology, trading strategies, stock exchanges, risk management tools, and how to build a successful investing journey.",
  faqs: [
    {
      question: "What is stock trading?",
      answer:
        "Stock trading is the buying and selling of shares in publicly listed companies to benefit from changes in market prices. When you buy a stock, you own a small stake in that company and participate in its potential growth over time.",
    },
    {
      question: "What is the difference between a stock, a share, and equity?",
      answer:
        "These terms are often used interchangeably. A stock refers to ownership in a company, a share is a single unit of that ownership, and equity broadly refers to the ownership interest a shareholder holds in a company.",
    },
    {
      question: "What types of stock trading are available?",
      answer:
        "Traders can participate in markets in several ways, including intraday trading (buying and selling within the same day), swing trading (holding positions for days or weeks), positional trading (holding for weeks or months), and long-term investing (holding investments over extended periods).",
    },
    {
      question: "What are the different types of stocks I can invest in?",
      answer:
        (<>The market offers various categories of <Link
          href="/stocks"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >stocks</Link>. Blue chip and large-cap stocks belong to well-established companies, while mid-cap and small-cap stocks may offer higher growth potential with varying levels of risk. Investors can also choose growth stocks, value stocks, and dividend-paying stocks depending on their objectives.</>),
    },
    {
      question: "What causes stock prices to move?",
      answer:
        "Stock prices are influenced by company earnings, financial performance, industry trends, economic conditions, interest rates, inflation, investor sentiment, and global geopolitical developments.",
    },
    {
      question: "What is a Demat account and do I need one?",
      answer:
        "A Demat account holds your securities electronically in digital form. It is required for buying and selling shares on Indian stock exchanges and enables secure, paperless transactions.",
    },
    {
      question: "What is the difference between NSE and BSE?",
      answer:
        (<>The National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE) are India's two primary stock exchanges. Both provide access to listed companies, and most major <Link
          href="/stocks"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >stocks</Link> are available on both exchanges.</>),
    },
    {
      question: "What is a stop-loss order?",
      answer:
        "A stop-loss order is a risk management tool that automatically exits a position when a stock reaches a predefined price level. It helps traders and investors limit potential losses and manage risk more effectively.",
    },
    {
      question: "What is a dividend?",
      answer:
        "A dividend is a portion of a company's profits distributed to shareholders, typically on a quarterly or annual basis. Dividend payments depend on the company's profitability and dividend policy.",
    },
    {
      question: "Can I trade both Indian and global stocks from one platform?",
      answer:
        "Yes. Platforms like Apex Trade provide access to major Indian exchanges such as NSE and BSE, along with international markets like NASDAQ and NYSE, allowing investors to manage domestic and global portfolios from a single account.",
    },
    {
      question: "What tools can help me make better trading decisions?",
      answer:
        "Investors commonly use fundamental analysis and technical analysis. Fundamental analysis evaluates a company's financial health through metrics such as earnings growth, P/E ratio, and return on equity, while technical analysis uses charts and indicators such as RSI, MACD, moving averages, and support and resistance levels to identify trading opportunities.",
    },
    {
      question: "Is online stock trading in India safe?",
      answer:
        "Yes, when conducted through a regulated and secure platform. It is important to choose a platform that offers strong security measures, transparent processes, reliable customer support, and compliance with applicable regulations.",
    },
  ],
};

export const commodityBasicsFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Learn the basics of commodity trading, understand popular commodities in India, trading regulations, capital requirements, and how beginners can get started.",
  faqs: [
    {
      question: "What is Commodity Trading?",
      answer:
        "Commodity trading involves buying and selling raw materials such as gold, silver, crude oil, and agricultural products to benefit from price movements in the market.",
    },
    {
      question: "Is Commodity Trading Legal in India?",
      answer:
        "Yes. Commodity trading is conducted through regulated exchanges and follows established market regulations.",
    },
    {
      question: "Which Commodities Are Most Popular in India?",
      answer:
        "Gold, silver, crude oil, natural gas, copper, and agricultural commodities are among the most actively traded.",
    },
    {
      question: "Can Beginners Start Commodity Trading?",
      answer:
        "Yes. Beginners can start by learning market fundamentals, practicing risk management, and using a reliable trading platform.",
    },
    {
      question: "How Much Capital Is Required for Commodity Trading?",
      answer:
        "The required capital varies depending on the commodity, trading strategy, and risk management approach.",
    },
  ],
};

export const indexTradingFaqs: FAQSectionData = {
  title: "Frequently Asked Questions",
  description:
    "Learn the fundamentals of index trading, explore popular Indian and global indices, and understand why many traders use indices to gain diversified market exposure.",
  faqs: [
    {
      question: "What is Index Trading?",
      answer:
        "Index trading involves speculating on the price movement of a stock market index rather than trading individual company shares.",
    },
    {
      question: "Is Index Trading Suitable for Beginners?",
      answer:
        "Many beginners choose index trading because indices provide exposure to multiple companies and broader market trends.",
    },
    {
      question: "Which Indices Are Most Popular in India?",
      answer:
        "Nifty 50, Sensex, and Bank Nifty are among the most actively followed and traded indices.",
    },
    {
      question: "Can I Trade Global Indices Online?",
      answer:
        "Yes. Modern trading platforms provide access to several global benchmark indices, including the S&P 500, Nasdaq, and Dow Jones.",
    },
    {
      question: "Why Is Index Trading Popular?",
      answer:
        "Index trading offers diversification, liquidity, market-wide exposure, and opportunities across various economic conditions.",
    },
  ],
};
