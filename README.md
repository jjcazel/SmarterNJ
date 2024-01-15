# My Smarter NJ Clone

I created this project in tandem with my submission for the open [full-stack software engineer position](https://innovation.nj.gov/join/full-stack-software-engineer/?utm_source=All-hands+job+board&utm_medium=getro.com&gh_src=All-hands+job+board) in the Office of Innovation at the State of New Jersey. It is viewable [here](https://jjcazel.github.io/). I used the [Smarter NJ site](https://smarter.nj.gov/) as my template. I noticed that the `/news` page has some "dummy" text and the buttons weren't working. I addressed that in my app by fetching a [public news API](https://newsapi.ai/) and returning any news that matches the keyword, *"New Jersey"*.

I created the UI using React + Vite + TypeScript + CSS. I used standard functional components while using React hooks to fetch an API and manage the returned data. I'm hosting this on Github Pages and you can view my code [here](https://github.com/jjcazel/jjcazel.github.io).

Based on my timeline I decided not to copy every section of the home page. I was thinking of possibly using a CSS framework to speed up the styling process, but I am very familiar with CSS so the development time was reasonable. I would use the SASS pre-processor on future projects. ToDo: Add skeleton loading states to the News Page while the API is fetching and further tweak styling to meet best web practices. I can also add a database and user authentication to allow users to create accounts.
Thanks!

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

