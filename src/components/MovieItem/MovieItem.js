import React, { Component, Fragment } from "react";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-3 mb-4">
          <div className="card border-0">
            <div className="bg-blur">
              <div className="bg-blur--content">
                <p className="watch-trailer text-center">
                  <i className="fa fa-play-circle" />
                </p>
                <button className="btn btn-buyTicket">Mua Vé</button>
              </div>
            </div>
            <img
              className="card-img-top"
              src={require("../../images/phut-kinh-hoang-tai-el-royale-bad-times-at-the-el-royale-15380441180622_370x490.jpg")}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title">Tên Phim</h4>
              <p className="card-text d-flex justify-content-between">
                <span className="movie-time">120 phút</span>
                <span className="movie-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* end 1 col-3 */}
      </Fragment>
    );
  }
}

export default MovieItem;
