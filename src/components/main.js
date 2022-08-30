import { useEffect, useState } from "react";
import Card from "./card";
import Header from "./header";

export default function Main() {
  const [urlData, seturlData] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("apple");

  useEffect(() => {
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
