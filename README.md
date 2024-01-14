# My Smarter NJ Clone

I created this project in tandem with my submission for the [full-stack software engineer position](https://innovation.nj.gov/join/full-stack-software-engineer/?utm_source=All-hands+job+board&utm_medium=getro.com&gh_src=All-hands+job+board) at the State of New Jersey. It is viewable [here](https://jjcazel.github.io/). I used the [Smarter NJ site](https://smarter.nj.gov/) as my template. I noticed that the `/news` page has some "dummy" text and the buttons weren't working. I addressed that in my app by fetching a [public news API](https://newsapi.ai/) and returning any news that matches the keyword, *"New Jersey"*.

I created the UI using React + Vite + TypeScript + CSS. I used standard functional components while using React hooks to either update styling classes conditionally or to fetch an API and manage the returned data. I'm hosting this on Github Pages and you can view my code [here](https://github.com/jjcazel/jjcazel.github.io).

Please note that I had to use the `React-DOM HashRouter` due to routing limitations on GitHub Pages. If you'd like to run the code locally and/or make a PR for improvements please use the `BrowserRouter` in the `App.tsx` file after cloning so the routes will work in a dev environment. Thanks!

## My code to fetch the News API

```ts
interface Article {
  title: string;
  body: string;
  image: string;
  url: string;
}

export function NewsPage() {
  const [newsData, setNewsData] = useState<Article[]>([]);

  useEffect(() => {
    const newsFetchRequestParams = {
      action: "getArticles",
      keyword: ["New Jersey", "Tech"].join(","),
      lang: "eng",
      articlesPage: "1",
      articlesCount: "5",
      articlesSortBy: "date",
      articlesSortByAsc: "false",
      articlesArticleBodyLen: "-1",
      resultType: "articles",
      dataType: ["news"].join(","),
      apiKey: "c6692e82-30d8-4f3e-b397-657a78473e61",
      forceMaxDataTimeWindow: "31",
    };
    const queryParams = new URLSearchParams(newsFetchRequestParams);

    fetch(`https://eventregistry.org/api/v1/article/getArticles?${queryParams}`)
      .then((res) => res.json())
      .then((data) => {
        // Handle the parsed JSON data here
        setNewsData(data.articles.results as Article[]);
        console.log(data.articles.results);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
```

