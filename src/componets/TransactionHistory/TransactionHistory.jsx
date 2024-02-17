

import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({items}) => {
  

  const colorBox = (index) =>
    clsx(css.text, index % 2 === 0 ? css.colorFirst : css.secondColor);

  return (
    <table className={css.tableBorder}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr className={colorBox(index)} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
