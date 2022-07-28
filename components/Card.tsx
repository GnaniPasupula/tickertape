import React from "react";

const imgs1 = [
  "https://www.tickertape.in/landingResources/images/carousel/universe.jpg",
  "https://www.tickertape.in/landingResources/images/carousel/selection.jpg",
  "https://www.tickertape.in/landingResources/images/carousel/manageScreens.jpg",
];

const imgs2 = [
  "https://www.tickertape.in/landingResources/images/carousel/shareholdingpattern.jpg",
  "https://www.tickertape.in/landingResources/images/carousel/EventsNewsDesktop.jpg",
  "https://www.tickertape.in/landingResources/images/carousel/EventsNewsDesktop.jpg",
];
function Card() {
  return <img className="mt-10 shadow-2xl" src={imgs1[0]} />;
}

export default Card;
