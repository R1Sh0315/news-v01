import { useState } from "react";

function Card(props) {
  const [id, setId] = useState(null);
  return (
    <div className="card">
      {props.data.map((elm, id) => (
        <div key={id} onClick={() => setId(id)} className="card-container">
          <div className="details-container">
            <div>
              <img
                className="content-img"
                alt={id + ".jpg"}
                src={elm.urlToImage}
              />
            </div>
            <div>
              <div className="card-title">{elm.title}</div>
              <div className="card-description">{elm.description}</div>
              <div className="card-content">
                <span>
                  {elm.content.replace(
                    elm.content.slice(
                      elm.content.length - 15,
                      elm.content.length
                    ),
                    ""
                  )}{" "}
                </span>{" "}
                <span>
                  {" "}
                  <a href={elm.url} target="_blank">
                    ...read more
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="author-container">
            <div className="card-author">
              <b>~{elm.author}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
