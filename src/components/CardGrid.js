import React from 'react';
import Card from './Card';

const CardGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      <div className="col">
        <Card name={"Hoodie"} id={"hoodie1"} image_directory={"./assets/hoodie1.jpg"} />
      </div>
      <div className="col">
        <Card name={"Sweater"} id={"sweater1"} image_directory={"./assets/sweater1.jpg"} />
      </div>
      {/* <div className="col">
        <Card title={"Pink"} image_directory={"./assets/hoodie3.jpg"} />
      </div>
      <div className="col">
        <Card title={"For teachers"} image_directory={"./assets/hoodie1.jpg"} />
      </div> */}
    </div>
  );
};

export default CardGrid;