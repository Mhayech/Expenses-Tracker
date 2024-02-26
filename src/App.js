import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
          <Budget/>
          </div>
        <div className="col-sm">
            <Remaining/>
          </div>

            <div className="col-sm">
              <Spent/>
            </div>
          </div>
          <div className="row mt-3">
          <h3>Expenses</h3>
          <div>
            <ExpenseList />
            </div>
            <div className="row mt-3">
              <h3>Add Expense</h3>
              <AddExpense/>
            </div>
          </div>
      </div>
    </AppProvider>
    
  );
}

export default App;
