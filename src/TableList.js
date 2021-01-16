import React from 'react'



 let Mark = () => {
  const cars = [
    {acceleration: '2.9 sec', Price: '350 000', MaxSpeed: '250 km/h', model: <a href='/Bmw'>Bmw</a>, country: 'Germany' },
    {acceleration: '3.1 sec', Price: '300 000', MaxSpeed: '300 km/h', model: <a href='/Mersedes'>Mersedes</a>, country: 'Germany' },
    {acceleration: '2.7 sec', Price: '280 000', MaxSpeed: '270 km/h', model: <a href='/Porsche'>Porsche</a>, country: 'Germany' },
    {acceleration: '2.8 sec', Price: '250 000', MaxSpeed: '260 km/h', model: <a href='/Nissan'>Nissan</a>, country: 'Japan' },
  ];

  const renderCar = (car, index) => {
    return (
      <tr key={index}>
        <td>{car.acceleration}</td>
        <td>{car.Price}</td>
        <td>{car.MaxSpeed}</td>
        <td>{car.model}</td>
        <td>{car.country}</td>
      </tr>
    );
  };

  return (
    <div className="Mark">
      <table class="table table-hover table-dark">
        <thead>
          <style>
          border: 1px solid;
          text-align: midlle;
          padding: 30px;
          </style>
          <tr>
            <th scope="col">acceleration</th>
            <th scope="col">Price</th>
            <th scope="col">MaxSpeed</th>
            <th scope="col">model</th>
            <th scope="col">country</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(renderCar)}
        </tbody>
      </table>
    </div>
  );
  }

export default Mark;
