import Input from "./input";

export default function Header(props) {
  return (
    <div
      className={
        props.isDarkMode
          ? "light-mode header-conatiner"
          : "dark-mode header-conatiner"
      }
    >
      <div>
        <h1>News Today</h1>
      </div>
      <div className="container-right">
        <div>
            <div className="search-container" ><Input onClick={props.onSearch} /></div>
        </div>
        <div onClick={props.onClick}>
          <b>Theme : {props.isDarkMode ? "Light" : "Dark"}</b>
        </div>
      </div>
    </div>
  );
}
