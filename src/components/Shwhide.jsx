import React, { useState } from "react";
import barchart from "./assest/barchart.png";
const Shwhide = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div></div>
      {showMore && (
        <div>
          Suspendisse potenti. Nulla interdum urna vel nibh auctor euismod.
          Phasellus nec nulla non arcu rhoncus ullamcorper. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam culpa ad sapiente aut
          in magni neque nihil, ut accusantium voluptas fugiat, dolorem,
          assumenda aliquam mollitia dolores minima placeat nisi nam?
        </div>
      )}
      <img src={barchart} onClick={toggleShowMore} />
    </div>
  );
};

export default Shwhide;
