import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { list } from "../../data/Data";

const Hero = () => {
  const [data, setData] = useState([]);

  const roomOptions = ["1 Bhk", "2 Bhk", "3 Bhk"];

  const formHandler = (event) => {
    event.preventDefault();
    const searchData = {
      location: event.target.location,
      type: event.target.type,
      room: event.target.bhk,
      minPrice: event.target.minimum,
      maxPrice: event.target.maximum,
    };

    const result = list.filter((d) => {
      return d.location.includes(searchData.location);
    });

    setData(result);
    console.log(data)
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Your Dream Stay "
            subtitle="Find a new & featured stay located at your destination."
          />

          <form className="flex" onSubmit={formHandler}>
            <div className="box">
              <span>Location</span>
              <input
                type="text"
                name="location"
                required
                maxlength="50"
                placeholder="Enter location"
                class="input"
              ></input>
            </div>
            <div className="box">
              <span>Property Type</span>
              <select name="type" class="input" required>
                <option value="flat">Flat</option>
                <option value="house">House</option>
              </select>
            </div>
            <div className="box">
              <span>BHK</span>
              <select name="bhk" class="input" required>
                {roomOptions.map((room, i) => (
                  <option value={room} key={i}>
                    {room}
                  </option>
                ))}
              </select>
            </div>
            <div className="box">
              <span>Minimum Budget</span>
              <select name="minimum" class="input" required>
                <option value="5000">5 Thousand</option>
                <option value="10000">10 Thousand</option>
                <option value="20000">20 Thousand</option>
                <option value="30000">30 Thousand</option>
                <option value="40000">40 Thousand</option>
                <option value="50000">50 Thousand</option>
                <option value="60000">60 Thousand</option>
                <option value="70000">70 Thousand</option>
                <option value="80000">80 Thousand</option>
                <option value="90000">90 Thousand</option>
                <option value="100000">1 Lac</option>
              </select>
            </div>
            <div className="box">
              <span>Maximum Budget</span>
              <select name="maximum" class="input" required>
                <option value="5000">5 Thousand</option>
                <option value="10000">10 Thousand</option>
                <option value="20000">20 Thousand</option>
                <option value="30000">30 Thousand</option>
                <option value="40000">40 Thousand</option>
                <option value="50000">50 Thousand</option>
                <option value="60000">60 Thousand</option>
                <option value="70000">70 Thousand</option>
                <option value="80000">80 Thousand</option>
                <option value="90000">90 Thousand</option>
                <option value="100000">1 Lac</option>
              </select>
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
