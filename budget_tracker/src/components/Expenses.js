import React from "react";
import ExpenseList from "./ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";


function Expenses() {
  return (
    <div>
      <h3 className="mt-3 d-flex justify-content-center">Expenses</h3>
      <div className="row-mt3">
          <div className="col-sm">
              <ExpenseList />
          </div>
      </div>
    </div>
  );
}

export default Expenses;
