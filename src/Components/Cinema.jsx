import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function Cinema() {
  return (
    <Carousel
      responsive={responsive}
      partialVisible={true}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      transitionDuration={1000}
    >
      <div>
        <img src="https://fakeimg.pl/1600x500/ff0000/" alt="fake img" />
      </div>
      <div>
        <img src="https://fakeimg.pl/1600x500/ff3060" alt="fake img" />
      </div>
      <div>
        <img src="https://fakeimg.pl/1600x500/bf0000" alt="fake img" />
      </div>
      <div>
        <img src="https://fakeimg.pl/1600x500/" alt="fake img" />
      </div>
    </Carousel>
  );
}
