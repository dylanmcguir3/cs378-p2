import React from "react";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({
  title,
  description,
  imageName,
  price,
  incrementOrderCount,
  decrementOrderCount,
  orderCount,
}) => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        width: "90%",
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/images/" + imageName}
        alt={title}
        style={{ width: "100px", marginRight: "10px" }}
      />
      <div style={{ flex: 1 }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{price}</p>
          <div>
            <button
              className="add-subtract-button"
              onClick={() => decrementOrderCount()}
            >
              -
            </button>
            <span style={{ margin: "0 10px" }}>{orderCount}</span>
            <button
              className="add-subtract-button"
              onClick={() => incrementOrderCount()}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
