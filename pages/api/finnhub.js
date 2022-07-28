const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cbba74qad3i91bfqh760";
const finnhubClient = new finnhub.DefaultApi();

const fiftyTwoWeekHigh = null;
const fiftyTwoWeekLow = null;
const dividendYield = null;
const peRatio = null;
const beta = null;
const yearlyReturn = null;
const weeklyReturn = null;
const companyName = null;
const symbol = null;
const industry = null;
const webURL = null;
const logo = null;

export const getStockData = async (stock) => {
  stock = stock.toUpperCase();
  // stock = "AMZN";
  finnhubClient.companyBasicFinancials(
    stock,
    "all",
    (error, data, response) => {
      fiftyTwoWeekHigh = data.metric["52WeekHigh"];
      // console.log("52W High " + fiftyTwoWeekHigh);

      fiftyTwoWeekLow = data.metric["52WeekLow"];
      // console.log("52W Low " + fiftyTwoWeekLow);

      dividendYield = data.metric.dividendYieldIndicatedAnnual;
      // console.log("Div. Yield " + dividendYield);

      peRatio = data.metric.peInclExtraTTM;
      // console.log("PE Ratio " + peRatio);

      beta = data.metric.beta;
      // console.log("Beta " + beta);

      yearlyReturn = data.metric["52WeekPriceReturnDaily"];
      // console.log("Yearly Return " + yearlyReturn);

      weeklyReturn = data.metric["5DayPriceReturnDaily"];
      // console.log("Weekly Return " + weeklyReturn);

      //   console.log(data.metric);
    }
  );

  finnhubClient.quote(stock, (error, data, response) => {
    const currentPrice = data.c;
    // console.log("Current Price " + currentPrice);
    //   console.log(data);
  });

  finnhubClient.companyProfile2({ symbol: stock }, (error, data, response) => {
    companyName = data.name;
    // console.log("Company Name from API " + companyName);

    symbol = data.ticker;
    // console.log("Symbol " + symbol);

    industry = data.finnhubIndustry;
    // console.log("Industry " + industry);

    webURL = data.weburl;
    // console.log("Web URL " + webURL);

    logo = data.logo;
    // console.log("Logo " + logo);

    //   console.log(data);
  });

  return {
    fiftyTwoWeekHigh,
    fiftyTwoWeekLow,
    dividendYield,
    peRatio,
    beta,
    yearlyReturn,
    weeklyReturn,
    companyName,
    symbol,
    industry,
    webURL,
    logo,
  };
};

export {
  fiftyTwoWeekHigh,
  fiftyTwoWeekLow,
  dividendYield,
  peRatio,
  beta,
  yearlyReturn,
  weeklyReturn,
  companyName,
  symbol,
  industry,
  webURL,
  logo,
};
