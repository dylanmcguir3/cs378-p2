import React from "react";

export default function OrderBar({
  orderCounts,
  getOrderMessage,
  menuItems,
  setOrderCounts,
}) {
  return (
    <div className="order-bar">
      <h4>
        Total: $
        {menuItems
          .reduce(
            (total, menuItem, index) =>
              total + menuItem.price * orderCounts[index],
            0
          )
          .toFixed(2)}
      </h4>
      <div className="button-bar">
        <button
          className="order-button"
          onClick={() => alert(getOrderMessage())}
        >
          Order
        </button>
        <button
          className="order-button"
          onClick={() => setOrderCounts(menuItems.map((menuItem) => 0))}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
