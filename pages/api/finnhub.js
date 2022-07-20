const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cbba74qad3i91bfqh760";
const finnhubClient = new finnhub.DefaultApi();

export const getStockData = async (stock) => {
  stock = stock.toUpperCase();
  //stock = "AMZN";
  finnhubClient.companyBasicFinancials(
    stock,
    "all",
    (error, data, response) => {
      const fiftyTwoWeekHigh = data.metric["52WeekHigh"];
      console.log("52W High " + fiftyTwoWeekHigh);

      const fiftyTwoWeekLow = data.metric["52WeekLow"];
      console.log("52W Low " + fiftyTwoWeekLow);

      const dividendYield = data.metric.dividendYieldIndicatedAnnual;
      console.log("Div. Yield " + dividendYield);

      const peRatio = data.metric.peInclExtraTTM;
      console.log("PE Ratio " + peRatio);

      const beta = data.metric.beta;
      console.log("Beta " + beta);

      const yearlyReturn = data.metric["52WeekPriceReturnDaily"];
      console.log("Yearly Return " + yearlyReturn);

      const weeklyReturn = data.metric["5DayPriceReturnDaily"];
      console.log("Weekly Return " + weeklyReturn);

      //   console.log(data.metric);
    }
  );

  finnhubClient.quote(stock, (error, data, response) => {
    const currentPrice = data.c;
    console.log("Current Price " + currentPrice);
    //   console.log(data);
  });

  finnhubClient.companyProfile2({ symbol: stock }, (error, data, response) => {
    const companyName = data.name;
    console.log("Company Name " + companyName);

    const symbol = data.ticker;
    console.log("Symbol " + symbol);

    const industry = data.finnhubIndustry;
    console.log("Industry " + industry);

    const webURL = data.weburl;
    console.log("Web URL " + webURL);

    const logo = data.logo;
    console.log("Logo " + logo);

    //   console.log(data);
  });
};
