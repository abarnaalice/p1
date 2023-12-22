import React from "react";

export default function ImageCard(props) {
  return (
    <div className="p-2">
      <div className="card pt-2" style={{ width: 300 }}>
       <div className="justify content center"> <img
          src={props.image}
          alt={props.name}
          width="80"
          height="hheight"
        /></div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Price:{props.current_price}</p>
          <p className="">Rank:{`$${props.market_cap_rank}`}</p>
          <p className="">Market:{`$${props.market_cap}`}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
