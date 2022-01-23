function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <h3>{props.amount}</h3>
      </div>

      <div>
        <div>
          {month},{day},{year}
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
