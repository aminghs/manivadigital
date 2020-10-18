import React, { Component } from "react";
import './counter.css';

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container2">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row">
          <div class="container2">
            <div class="row">
              <div class="four col-md-3">
                <div class="counter-box"> <i class="fa fa-thumbs-o-up"></i> <span class="counter">2147</span>
                <p>Happy Customers</p>
              </div>
            </div>
              <div class="four col-md-3">
                <div class="counter-box"> <i class="fa fa-group"></i> <span class="counter">3275</span>
                <p>Registered Members</p>
              </div>
            </div>
              <div class="four col-md-3">
                <div class="counter-box"> <i class="fa fa-shopping-cart"></i> <span class="counter">289</span>
                <p>Available Products</p>
            </div>
            </div>
              <div class="four col-md-3">
                <div class="counter-box"> <i class="fa fa-user"></i> <span class="counter">1563</span>
                <p>Saved Trees</p>
              </div>
            </div>
          </div>
        </div>
        </div>

          
    </div>
  </div>
    );
  }
}

export default features;
