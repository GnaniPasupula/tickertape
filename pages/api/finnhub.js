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
const currentPrice = null;

export const getStockData = async (stock) => {
  stock = stock.toUpperCase();
  // stock = "AMZN";

  finnhubClient.companyBasicFinancials(
    stock,
    "all",
    (error, data, response) => {
      fiftyTwoWeekHigh = data.metric["52WeekHigh"];
      //* console.log("52W High " + fiftyTwoWeekHigh);

      fiftyTwoWeekLow = data.metric["52WeekLow"];
      //* console.log("52W Low " + fiftyTwoWeekLow);

      dividendYield = data.metric.dividendYieldIndicatedAnnual;
      // console.log("Div. Yield " + dividendYield);

      peRatio = data.metric.peInclExtraTTM;
      // console.log("PE Ratio " + peRatio);

      beta = data.metric.beta;
      //* console.log("Beta " + beta);

      yearlyReturn = data.metric["52WeekPriceReturnDaily"];
      // console.log("Yearly Return " + yearlyReturn);

      weeklyReturn = data.metric["5DayPriceReturnDaily"];
      // console.log("Weekly Return " + weeklyReturn);

      //   console.log(data.metric);
    }
  );

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1//quote?symbol=${stock}&token=${api_key.apiKey}`
    );
    const data = await response.json();
    currentPrice = data.c;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=${api_key.apiKey}`
    );
    const data = await response.json();
    companyName = data.name;
    symbol = data.ticker;
    industry = data.finnhubIndustry;
    webURL = data.weburl;
    logo = data.logo;
    // console.log("Company Name from API " + companyName);

    // console.log(data);
  } catch (error) {
    console.log(error);
  }

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
    currentPrice,
  };
};
