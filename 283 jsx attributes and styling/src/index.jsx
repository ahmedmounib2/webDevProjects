import React from "react";
import ReactDOM from "react-dom";

//giving attributes in jsx is className instead of class- use camel case

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Dogs
    </h1>
    <div>
      <img
        src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
        alt="dog img"
        className="dog-img"
      />
      <img
        src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"
        alt="dog img"
        className="dog-img"
      />
      <img
        src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
        alt="dog img"
        className="dog-img"
      />
    </div>

    <div>
      <img src={img + "?grayscale"} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
