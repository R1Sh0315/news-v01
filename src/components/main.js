import { useEffect, useState } from "react";
import Card from "./card";
import Header from "./header";

export default function Main() {
  const [urlData, seturlData] = useState([]);
  const [data, setData] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("apple");

  useEffect(() => {
    // mock
    const mockData = [
      {
        author: "Mark Serrels",
        content:
          'Remember the "golden age" of TV?\r\nTV\'s golden age most likely kicked off with The Sopranos in 1999, but it really got rolling with shows like The Wire, Lost and Deadwood in the mid-2000s. Big-time pr… [+4345 chars]',
        description: "It could be the best show of 2022.",
        publishedAt: "2022-08-25T01:19:00Z",
        title: "Everyone Should Watch the Best TV Show on Apple TV Plus - CNET",
        url: "https://www.cnet.com/culture/entertainment/everyone-should-watch-the-best-tv-show-on-apple-tv-plus/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/9b91a74f25c01f6c16cf032c16…e85ed/severance.jpg?auto=webp&fit=crop&height=630&width=1200",
      },
      {
        author: "Mark Serrels",
        content:
          'Remember the "golden age" of TV?\r\nTV\'s golden age most likely kicked off with The Sopranos in 1999, but it really got rolling with shows like The Wire, Lost and Deadwood in the mid-2000s. Big-time pr… [+4345 chars]',
        description: "It could be the best show of 2022.",
        publishedAt: "2022-08-25T01:19:00Z",
        title: "Everyone Should Watch thele TV Plus - CNET",
        url: "https://www.cnet.com/culture/entertainment/everyone-should-watch-the-best-tv-show-on-apple-tv-plus/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/9b91a74f25c01f6c16cf032c16…e85ed/severance.jpg?auto=webp&fit=crop&height=630&width=1200",
      },
    ];


    setData(mockData);
    // date
    var dateData = new Date();
    var date = dateData.getUTCDate();
    var month =
      (dateData.getMonth() + 1).toString().length <= 1
        ? "0" + (dateData.getMonth() + 1).toString()
        : (dateData.getMonth() + 1).toString();
    var year = dateData.getUTCFullYear();

    const todayDate = `${year.toString()}-${month.toString()}-${date.toString()}`;
    // news url api
    const newsUrl = `https://newsapi.org/v2/everything?q=${search}&from=${todayDate}&to=${todayDate}&sortBy=popularity&apiKey=23d3184ba1324c3f92d3c4c4ddafdd5f`;
    console.log(newsUrl);
    // fetch data from URl
    fetch(newsUrl)
      .then((response) => response.json())
      .then((response) => seturlData(response.articles));
  }, [search]);

  function darkMode() {
    console.log(isDarkMode);
    setDarkMode(isDarkMode ? false : true);
  }

  function onSearch() {
    var userSarch = document.getElementsByClassName("user-input");
    setSearch(userSarch[0]?.value);
  }

  return (
    <div className={isDarkMode ? "light-mode" : "dark-mode"}>
      <Header
        isDarkMode={isDarkMode}
        onClick={() => darkMode()}
        onSearch={() => onSearch()}
      />
      <Card data={urlData} />
    </div>
  );
}
