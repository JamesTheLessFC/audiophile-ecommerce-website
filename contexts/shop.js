import { createContext, useState, useEffect } from "react";

const ShopContext = createContext({});

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [vatTotal, setVatTotal] = useState(0);
  const shippingFee = 50;
  const vat = 0.2;
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [orderSubmissionError, setOrderSubmissionError] = useState("");
  const [cartInitialized, setCartInitialized] = useState(false);

  useEffect(() => {
    if (!cartInitialized) {
      const localStorageCart = window.localStorage.getItem("cart");
      setCart(localStorageCart ? JSON.parse(localStorageCart) : []);
      setCartInitialized(true);
    }
  }, [cartInitialized]);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    let currentTotal = 0;
    cart.forEach((item) => {
      currentTotal += item.price * item.quantity;
    });
    setTotal(currentTotal);
    setVatTotal(currentTotal * vat);
    setGrandTotal(currentTotal + shippingFee);
  }, [cart]);

  useEffect(() => {
    if (orderSubmitted && purchasedItems.length === 0) {
      setPurchasedItems(cart);
      setPurchaseTotal(grandTotal);
    }
  }, [orderSubmitted, cart, grandTotal, purchasedItems]);

  const addToCart = ({ productData, quantity }) => {
    setCart((prevState) => {
      if (!prevState.find((item) => item.id === productData._id)) {
        return [
          ...prevState,
          {
            id: productData._id,
            name: productData.cartName,
            image: productData.cartImage,
            price: productData.price,
            quantity,
          },
        ];
      } else {
        return prevState.map((item) => {
          if (item.id === productData._id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevState) => {
      return prevState.filter((item) => item.id !== itemId);
    });
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const incrementQuantity = (itemId) => {
    setCart((prevState) => {
      return prevState.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decrementQuantity = (itemId) => {
    setCart((prevState) => {
      if (prevState.find((item) => item.id === itemId).quantity > 1) {
        return prevState.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      } else {
        return prevState.filter((item) => item.id !== itemId);
      }
    });
  };

  const placeOrder = (checkoutForm) => {
    const order = {
      ...checkoutForm,
      items: cart.map((cartItem) => {
        return {
          id: cartItem.id,
          name: cartItem.name,
          price: cartItem.price,
          quantity: cartItem.quantity,
          _key: cartItem.id,
        };
      }),
      shippingFee,
      grandTotal,
    };
    fetch("/api/submitOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 400) {
            throw new Error(
              "Invalid Order Submission: Please check the form for errors and/or missing information, and make sure your cart is not empty."
            );
          }
          throw new Error("Network Failure: Unable to process order");
        }
        return response.json();
      })
      .then((result) => {
        console.log(`Order submitted successfully! Order ID: ${result._id}`);
        setOrderSubmitted(true);
      })
      .catch((err) => {
        setOrderSubmissionError(err.message);
      });
  };

  const clearPurchase = () => {
    setPurchasedItems([]);
    setPurchaseTotal(0);
    setOrderSubmitted(false);
    setCart([]);
  };

  const clearOrderSubmissionError = () => {
    setOrderSubmissionError("");
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        total,
        vatTotal,
        grandTotal,
        shippingFee,
        purchasedItems,
        orderSubmitted,
        purchaseTotal,
        orderSubmissionError,
        addToCart,
        removeAllFromCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        placeOrder,
        clearPurchase,
        clearOrderSubmissionError,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
