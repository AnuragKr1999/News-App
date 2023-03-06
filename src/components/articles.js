const articles = [
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Jordan Novet",
    title:
      "Salesforce faces an underappreciated risk: Platform customers jumping ship like Veeva - CNBC",
    description:
      "One analyst thinks Salesforce won't be able to compete well with Veeva in life sciences after their broad-based agreement that bans competition ends in 2025.",
    url: "https://www.cnbc.com/2023/03/04/salesforce-faces-prospect-of-platform-customers-leaving-after-veeva.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106804642-1606858516060-gettyimages-1195294851-AFP_1O532C.jpeg?v=1677942001&w=1920&h=1080",
    publishedAt: "2023-03-04T15:00:01Z",
    content:
      "Workers at Salesforce, all the way up to co-founder and CEO Marc Benioff, could breathe more easily this week after the business-software company posted considerably more robust earnings and guidance… [+4030 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "US-made cheese can also be called 'gruyere', court rules - BBC",
    description:
      'A US appeal court has ruled that cheeses from outside Switzerland and France can be called "gruyere".',
    url: "https://www.bbc.com/news/world-us-canada-64848884",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/7B7F/production/_128851613_mediaitem128851609.jpg",
    publishedAt: "2023-03-04T14:55:43Z",
    content:
      'The name "gruyere" can now be used to label cheeses from outside of the Gruyère region of Switzerland and France, a US appeals court has ruled. \r\nThe Virginia court upheld a ruling stating that the U… [+1403 chars]',
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Chris Pandolfo",
    title:
      "Costco answers whether it is raising membership fee: 'Question of when, not if' - Fox Business",
    description:
      "Costco memberships are at an all time high and the company says it will raise its membership fees eventually, but did not announce immediate plans to do so on an earnings call Thursday.",
    url: "https://www.foxbusiness.com/economy/costco-answers-raising-membership-fee-question-when-not-if",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/08/0/0/costco-AP.jpg?ve=1&tl=1",
    publishedAt: "2023-03-04T14:32:00Z",
    content:
      "Costco is certain to raise its membership fees in the future, but as the sixth anniversary of the last fee hike approaches, the company says there are no immediate plans to do so while membership rat… [+2715 chars]",
  },
  {
    source: {
      id: null,
      name: "Push Square",
    },
    author: "Sammy Barker",
    title:
      "Funko Pop Tossing Over $30 Million Worth of Stock into a Landfill - Push Square",
    description: "More like Junko",
    url: "https://www.pushsquare.com/news/2023/03/funko-pop-tossing-over-usd30-million-worth-of-stock-into-a-landfill",
    urlToImage: "https://images.pushsquare.com/7ec8a6e2671e3/1280x720.jpg",
    publishedAt: "2023-03-04T14:15:00Z",
    content:
      "I dislike most useless tat, consumerism is just depressing at the best of times, but this really brings it home how pointless the society we've created for ourselves is \r\nWe f***ed up, and we've got … [+1094 chars]",
  },
  {
    source: {
      id: null,
      name: "WDIV ClickOnDetroit",
    },
    author: "Derick Hutchinson",
    title:
      "DTE Energy updates Metro Detroit power outages, restoration times, hardest-hit areas - WDIV ClickOnDetroit",
    description:
      "“We understand how frustrating that is, and it’s not the customer experience that we want for our customers.” -- DTE Energy provided an update on power outages, restoration times, and the hardest-hit areas.",
    url: "https://www.clickondetroit.com/weather/2023/03/04/dte-energy-updates-metro-detroit-power-outages-restoration-times-hardest-hit-areas/",
    urlToImage:
      "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/PYF27LFNDZFDRPXHWK25JEC4QM.jpg?_a=ATCqVhC0",
    publishedAt: "2023-03-04T13:57:03Z",
    content:
      "DETROIT DTE Energy offered an update Saturday morning on another round of power outages caused by the winter storm and the efforts to restore power to hundreds of thousands of customers.\r\nAs of aroun… [+3047 chars]",
  },
  {
    source: {
      id: null,
      name: "Usf.edu",
    },
    author: "Scott Simon, Alina Selyukh",
    title:
      "Americans are spending more, but big chain stores say financial 'uncertainty' remains - WUSF Public Media",
    description:
      "Americans are spending money and shopping a lot. But according to recent retail reports, big chain stores are worried about the year to come. They say there's still a lot of uncertainty ahead.",
    url: "https://wusfnews.wusf.usf.edu/2023-03-04/americans-are-spending-more-but-big-chain-stores-say-financial-uncertainty-remains",
    urlToImage: null,
    publishedAt: "2023-03-04T13:00:00Z",
    content:
      "Americans are spending money and shopping a lot. But according to recent retail reports, big chain stores are worried about the year to come. They say there's still a lot of uncertainty ahead.\r\nCopyr… [+12 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Associated Press",
    title:
      "What ESG investing is, and why some politicians are against it - Fox News",
    description:
      'ESG (Environmental, Social, Governance) standards set a new bar for investing, though critics find the practice to be "woke" and destructive.',
    url: "https://www.foxnews.com/lifestyle/what-esg-investing-why-some-politicians-against",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/nyse.jpg",
    publishedAt: "2023-03-04T13:00:00Z",
    content:
      "After sweeping through battles in statehouses across the country, the war against ESG investing is heating up in Congress.\r\nThe Senate voted Wednesday to overturn a Labor Department rule allowing ret… [+7635 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Elizabeth Lopatto",
    title:
      "Uh oh! The crypto collapse has reached the real financial system - The Verge",
    description:
      "Silvergate, one of the most important crypto banks is in trouble. And that may make it harder to turn crypto back into dollars.",
    url: "https://www.theverge.com/2023/3/4/23623964/crypto-silvergate-bank-run-stablecoins-dollars",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/xW9V-nvi4UBtK0wHK_wcKUs5hy0=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24476979/236558_Silvergate_Stablecoin_WJoel.jpg",
    publishedAt: "2023-03-04T13:00:00Z",
    content:
      "Uh oh! The crypto collapse has reached the real financial system\r\nUh oh! The crypto collapse has reached the real financial system\r\n / Silvergates troubles may make it harder to get out of crypto and… [+10108 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: null,
    title: "Airbnb cuts recruiting staff headcount - Reuters",
    description:
      'Home rental firm Airbnb Inc <a href="https://www.reuters.com/companies/ABNB.O" target="_blank">(ABNB.O)</a> laid off some of its recruiting staff this week, a company spokesperson said on Friday, noting that it\'s not an indication of more widespread layoffs.',
    url: "https://www.reuters.com/markets/us/airbnb-cuts-recruiting-staff-by-30-2023-03-03/",
    urlToImage:
      "https://www.reuters.com/resizer/hH31h-EGhwbOlm9iT4kiYaBTS-M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HG4B73JSFVOLZJ77H3XZTFI3L4.jpg",
    publishedAt: "2023-03-04T12:23:11Z",
    content:
      "March 3 (Reuters) - Home rental firm Airbnb Inc (ABNB.O) laid off some of its recruiting staff this week, a company spokesperson said on Friday, noting that it's not an indication of more widespread … [+780 chars]",
  },
  {
    source: {
      id: null,
      name: "Gothamist",
    },
    author:
      "https://gothamist.com/staff/clayton-guse, https://gothamist.com/staff/stephen-nessen",
    title:
      "All aboard the secret elevators to Grand Central Madison - Gothamist",
    description:
      "The lifts take about 20 seconds to travel from the street to the concourse level of the LIRR terminal.",
    url: "https://gothamist.com/news/all-aboard-the-secret-elevators-to-grand-central-madison",
    urlToImage:
      "https://cms.prod.nypr.digital/images/337018/fill-1200x650|format-webp|webpquality-85",
    publishedAt: "2023-03-04T12:08:00Z",
    content:
      "Theres an express route to the new Grand Central Madison station set 15 stories below ground: three elevators that could become a hit with LIRR commuters.\r\nThe lifts two of which are hard to find tak… [+2682 chars]",
  },
  {
    source: {
      id: null,
      name: "Vox",
    },
    author: "Sara Morrison",
    title:
      "How generative AI from OpenAI and Google is transforming search — and maybe everything else - Vox.com",
    description: "Generative AI is here. Let’s hope we’re ready.",
    url: "https://www.vox.com/recode/2023/3/4/23624033/openai-bing-bard-microsoft-generative-ai-explained",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/UUAKEaBEAIVDGMxYMhMe0v5iq40=/0x432:4897x2996/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24476622/GettyImages_1195224000.jpg",
    publishedAt: "2023-03-04T11:00:00Z",
    content:
      "The worlds first generative AI-powered search engine is here, and its in love with you. Or it thinks youre kind of like Hitler. Or its gaslighting you into thinking its still 2022, a more innocent ti… [+17212 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "William Suberg",
    title:
      "Bitcoin price would retest $25K without Silvergate saga — analysis - Cointelegraph",
    description:
      "Traders say Bitcoin could retest $25,000, but Silvergate is holding the BTC price back.",
    url: "https://cointelegraph.com/news/bitcoin-price-would-retest-25k-without-silvergate-saga-analysis",
    urlToImage:
      "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/031f3d5d-ddda-466d-be7c-e6e01a19796b.jpg",
    publishedAt: "2023-03-04T10:21:52Z",
    content:
      "Bitcoin (BTC) stayed lower into the weekend as ongoing problems at Silvergate bank pressured markets.\r\nBTC/USD 1-day candle chart (Bitstamp). Source: TradingView\r\nBad news holds Bitcoin back\r\nData fr… [+2533 chars]",
  },
  {
    source: {
      id: null,
      name: "The Daily Hodl",
    },
    author: "Henry Kanapi",
    title:
      "Massive Crypto Whale Accumulates 19,801,902,912,350 Shiba Inu (SHIB) and Four Ethereum-Based Altcoins - The Daily Hodl",
    description:
      "One of the largest Ethereum (ETH) whales on earth is snapping up hundreds of millions of dollars worth of the top Dogecoin (DOGE) rival Shiba Inu (SHIB).",
    url: "https://dailyhodl.com/2023/03/04/massive-crypto-whale-accumulates-19801902912350-shiba-inu-shib-and-four-ethereum-based-altcoins/",
    urlToImage:
      "https://dailyhodl.com/wp-content/uploads/2020/08/tgs8320ue.jpg",
    publishedAt: "2023-03-04T10:15:35Z",
    content:
      "One of the largest Ethereum (ETH) whales on earth is snapping up hundreds of millions of dollars worth of the top Dogecoin (DOGE) rival Shiba Inu (SHIB).\r\nBlockchain-tracking service Etherscan shows … [+1627 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "https://www.engadget.com/about/editors/mariella-moon",
    title:
      "Amazon is shutting down eight cashierless Go stores | Engadget - Engadget",
    description:
      "Amazon is closing down two cashierless Go stores in New York City, two in Seattle and four in San Francisco on April 1st..",
    url: "https://www.engadget.com/amazon-shutting-down-eight-cashierless-go-stores-100102563.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/UdQUnLDg8Jj0QmPxwW0IIg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-01/b8ad3de0-1837-11e9-bf7f-bc0dd6e3a7f0.cf.jpg",
    publishedAt: "2023-03-04T10:02:53Z",
    content:
      "Amazon is closing down two cashierless Go stores in New York City, two in Seattle and four in San Francisco on April 1st, according to GeekWire. The e-retail giant made the announcement on the same d… [+1846 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Elizabeth Pritchett",
    title:
      "Daily Wire's Jeremy Boreing offers alternative to Hershey's after controversial International Women's Day ad - Fox News",
    description:
      "The Daily Wire co-founder Jeremy Boreing is now competing with Hershey's Canada after the candy company featured a trans woman on its chocolate bar honoring International Women's Day.",
    url: "https://www.foxnews.com/media/daily-wires-jeremy-boreing-alternative-hersheys-controversial-international-womens-day-ad",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/GettyImages-1346291168.jpg",
    publishedAt: "2023-03-04T09:11:00Z",
    content:
      "Two days after Hershey's Canada debuted its controversial International Women's Day ad campaign featuring a transgender woman, The Daily Wire co-founder Jeremy Boreing announced he is competing with … [+2062 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Juliana Liu",
    title:
      "Apple supplier Foxconn is on the hunt for semiconductor and EV deals in India - CNN",
    description:
      "Apple supplier Foxconn says it is seeking Indian partners to cooperate in areas such as chips and electric vehicles, as its chief executive wrapped up a visit to the country.",
    url: "https://www.cnn.com/2023/03/04/tech/taiwan-foxconn-india-hnk-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230304014123-01-foxconn-081022-file-restricted.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-03-04T07:48:00Z",
    content:
      "Apple supplier Foxconn says it is seeking Indian partners to cooperate in areas such as chips and electric vehicles, as its chief executive wrapped up a visit to the country.\r\nTaiwans Foxconn has bee… [+2191 chars]",
  },
  {
    source: {
      id: null,
      name: "CoinDesk",
    },
    author: "Jack Schickler",
    title:
      "Bankman-Fried Should Have Only Flip Phone, Website Whitelist, DOJ Says - CoinDesk",
    description:
      "Bail conditions clampdown comes after suspicions of witness tampering.",
    url: "https://www.coindesk.com/policy/2023/03/04/bankman-fried-should-have-only-flip-phone-website-whitelist-doj-says/",
    urlToImage:
      "https://www.coindesk.com/resizer/PEEE7lrz82bXMLEeeC-sNbopYvw=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/KVPAXYOCLFCSRPVXJZC7GPXFLM.jpg",
    publishedAt: "2023-03-04T07:37:00Z",
    content:
      "Sam Bankman-Frieds bail conditions should restrict his use of the internet, including the use of a non-internet connected flip phone, an attorney to the U.S. Department of Justice has proposed in cou… [+1381 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Christopher Mims",
    title:
      "Electric Vehicles Are Shattering the Barrier to Adoption that Could Matter Most - The Wall Street Journal",
    description:
      "Batteries are the single most expensive element of an EV. As they get cheaper, going electric no longer has to be a costly proposition.",
    url: "https://www.wsj.com/articles/electric-vehicles-are-shattering-the-barrier-to-adoption-that-could-matter-most-a30d154e",
    urlToImage: "https://images.wsj.net/im-735838/social",
    publishedAt: "2023-03-04T05:00:00Z",
    content: null,
  },
  {
    source: {
      id: "axios",
      name: "Axios",
    },
    author: "Emily Peck",
    title:
      "Home prices fall year over year for the first time since 2012, Redfin says - Axios",
    description: "High rates are turning buyers off.",
    url: "https://www.axios.com/2023/03/03/home-prices-fall-year-over-year-for-the-first-time-since-2012",
    urlToImage:
      "https://images.axios.com/kqUFxunFzXKuDV11RYE07YiXHN8=/0x0:1920x1080/1366x768/2023/03/02/1677789691862.jpg",
    publishedAt: "2023-03-04T04:39:53Z",
    content:
      "It finally happened. Median home sale prices are lower than they were a year ago for the first time since 2012, according to new data from Redfin out Thursday.\r\nWhy it matters: High mortgage rates ha… [+1418 chars]",
  },
  {
    source: {
      id: null,
      name: "13WHAM-TV",
    },
    author: "Jackie Napier",
    title:
      "Insulin cost cap brings relief for people with diabetes - 13WHAM-TV",
    description:
      "Eli lilly announced it is cutting the price of commonly prescribed insulin products by 70%. The drugmaker says it is also capping patients' out-of-pocket insuli",
    url: "https://13wham.com/news/local/insulin-cost-cap-brings-relief-for-people-with-diabetes",
    urlToImage:
      "https://13wham.com/resources/media/e0338065-b4d6-4a45-a45d-2f33e3e866bb-large16x9_530pPINSULINPRICES.transfer_frame_1231.png?1483480950184",
    publishedAt: "2023-03-04T04:30:00Z",
    content: null,
  },
];

export default articles;
