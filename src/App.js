import "./App.css";
import MenuItem from "./components/MenuItem";
import React from "react";
import OrderBar from "./components/OrderBar";

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: "Gyoza",
    description: "Japanese dumplings",
    imageName: "gyoza.png",
    price: 5.99,
  },
  {
    id: 2,
    title: "Sushi",
    description: "Japanese rice rolls",
    imageName: "sushi.png",
    price: 6.99,
  },
  {
    id: 3,
    title: "Ramen",
    description: "Japanese noodle soup",
    imageName: "ramen.png",
    price: 7.99,
  },
  {
    id: 4,
    title: "Matcha Cake",
    description: "Japanese green tea cake",
    imageName: "matcha-cake.png",
    price: 4.99,
  },
  {
    id: 5,
    title: "Mochi",
    description: "Japanese rice cake",
    imageName: "mochi.png",
    price: 3.99,
  },
  {
    id: 6,
    title: "Yakitori",
    description: "Japanese skewered chicken",
    imageName: "yakitori.png",
    price: 2.99,
  },
  {
    id: 7,
    title: "Takoyaki",
    description: "Japanese octopus balls",
    imageName: "takoyaki.png",
    price: 5.99,
  },
  {
    id: 8,
    title: "Sashimi",
    description: "Japanese raw fish",
    imageName: "sashimi.png",
    price: 8.99,
  },
  {
    id: 9,
    title: "Okonomiyaki",
    description: "Japanese savory pancake",
    imageName: "okonomiyaki.png",
    price: 6.99,
  },
  {
    id: 10,
    title: "Katsu Curry",
    description: "Japanese curry with fried pork",
    imageName: "katsu-curry.png",
    price: 9.99,
  },
];

function App() {
  const [orderCounts, setOrderCounts] = React.useState(
    menuItems.map((menuItem) => 0)
  );

  const decrementOrderCount = (index) => {
    if (orderCounts[index] > 0) {
      const newOrderCounts = [...orderCounts];
      newOrderCounts[index] -= 1;
      setOrderCounts(newOrderCounts);
    }
  };

  const incrementOrderCount = (index) => {
    const newOrderCounts = [...orderCounts];
    newOrderCounts[index] += 1;
    setOrderCounts(newOrderCounts);
  };

  const getOrderMessage = () => {
    const orderItems = menuItems.reduce((orderItems, menuItem, index) => {
      if (orderCounts[index] > 0) {
        orderItems.push(`${orderCounts[index]} ${menuItem.title}`);
      }
      return orderItems;
    }, []);

    if (orderItems.length === 0) {
      return "No items in cart!";
    }

    return `You have ordered: ${orderItems.join(", ")}.`;
  };

  return (
    <div>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        <h1 class="title">Jim's Japanese</h1>
        <h2 class="subtitle">UT's oldest Japanese Restaurant</h2>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            imageName={menuItem.imageName}
            price={menuItem.price}
            orderCount={orderCounts[menuItem.id - 1]}
            incrementOrderCount={() => incrementOrderCount(menuItem.id - 1)}
            decrementOrderCount={() => decrementOrderCount(menuItem.id - 1)}
          />
        ))}
      </div>
      <OrderBar
        orderCounts={orderCounts}
        getOrderMessage={getOrderMessage}
        menuItems={menuItems}
        setOrderCounts={setOrderCounts}
      />
    </div>
  );
}

export default App;
