import React from "react";
import "../../assets/style/TestCard.css";

function TestCard() {
  return (
    <div>
      <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card card-custom shadow-lg " style={{ width: "360px" }}>
          <div class="card-body card-body-custom">
            <h5 class="card-title">Computer Science Department</h5>
            <p class="card-text">Coordinator: Dr. John Doe</p>
            <p class="small-text">Contact: +1 234 567 8900</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
