import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import Expenses from "./components/Expenses";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
        <Expenses />
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
