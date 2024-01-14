import { useEffect, useState } from "react";

import "../styles/NewsPage.css";

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

    fetch(`http://eventregistry.org/api/v1/article/getArticles?${queryParams}`)
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

  // Check if newsData is empty or not fetched yet
  if (newsData.length === 0) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  // const newsThumbImg = newsData.
  return (
    <div className="newsContainer">
      <div className="titles">
        {" "}
        <h1>News</h1>
        <h2>
          The latest news, articles, reports, and publications about innovation
          in the State of New Jersey.
        </h2>
      </div>
      <section className="newsItemsContainer">
        {newsData.map((article, idx) => (
          <div key={idx} className="articleTile">
            <div className="imageContainer">
              {article.image && (
                <img
                  src={article.image}
                  alt="Image Not Found"
                  className="newsThumbImage"
                />
              )}
            </div>
            <div className="articleTileRight">
              <h2 className="articleTitle">{article.title}</h2>
              <p>{getFirstThreeLines(article.body)}</p>
              <button
                type="button"
                onClick={() => redirectToArticle(article.url)}
                className="readMoreButton"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

// Function to get the first three lines of a text
function getFirstThreeLines(text: string): string {
  const lines = text.split("\n").slice(0, 2); // Split by newlines and take the first three lines
  return lines.join("\n") + "..."; // Join the lines back together
}

// Function to redirect to the article URL in a new tab
function redirectToArticle(url: string): void {
  window.open(url, "_blank"); // Open the URL in a new tab
}