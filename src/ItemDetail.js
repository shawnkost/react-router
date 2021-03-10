import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({match}) {
  useEffect(() => {
    console.log(match);
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item.data.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} alt=""></img>
    </div>
  );
}

export default ItemDetail;
