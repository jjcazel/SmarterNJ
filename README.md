# My Smarter NJ Clone

I created this project in tandem with my submission for the open [full-stack software engineer position](https://innovation.nj.gov/join/full-stack-software-engineer/?utm_source=All-hands+job+board&utm_medium=getro.com&gh_src=All-hands+job+board) in the Office of Innovation at the State of New Jersey. It is viewable [here](https://jjcazel.github.io/). Inspired by the [Smarter NJ site](https://smarter.nj.gov/), I embarked on this journey to not just replicate but enhance the user experience. The original site's `/news` page, with its placeholder text and unresponsive buttons, presented a challenge I was eager to tackle. By integrating a [public news API](https://newsapi.ai/) my version dynamically curates news articles related to *New Jersey*, ensuring that fresh, relevant content is always at the user's fingertips.

## Crafting the User Interface  
I created the UI using modern web development practices and React + Vite + TypeScript + CSS. I used standard functional components while using React hooks to fetch an API and manage the returned data. I'm hosting this on Github Pages and you can view my code [here](https://github.com/jjcazel/jjcazel.github.io).

Despite the time constraints, I focused on delivering quality over quantity, choosing to reimagine key sections of the home page rather than a full-scale duplication. My proficiency with CSS enabled me to forego CSS frameworks, though I'm a huge fan of TailwindCSS these days. 
### Future Roadmap
- Enhanced User Engagement: Introducing skeleton loading screens for the News Page to maintain user engagement during data fetching.
- Style Optimization: Continuous refinement of styling to align with the latest web design standards.
- Extended Functionality: Potential integration of a database and user authentication system to support personalized user experiences.

## Dive into the Code: Fetching the News API

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

Thank you for exploring my project! Your feedback and suggestions are warmly welcomed as I continue to evolve this platform.

