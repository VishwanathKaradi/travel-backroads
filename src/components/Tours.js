import React from "react";
import Title from "./Title";
import { tourData } from "../data";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tourData.map((tour) => {
          const {
            id,
            tourImg,
            tourDate,
            tourTitle,
            tourDescription,
            place,
            days,
            cost,
          } = tour;

          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={tourImg} className="tour-img" alt={tourTitle} />
                <p className="tour-date">{tourDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tourTitle} </h4>
                </div>
                <p>{tourDescription}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {place}
                  </p>
                  <p>{days}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}

        {/* <article className="tour-card">
          <div className="tour-img-container">
            <img src={tourImg} className="tour-img" alt="" />
            <p className="tour-date">{tourDate}</p>
          </div>
          <div className="tour-info">
            <h4>{tourTitle}</h4>
            <p>{tourDescription}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {place}
              </p>
              <p>{days}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Tours;
