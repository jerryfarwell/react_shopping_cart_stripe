import { createContext, useEffect, useState } from "react";
import { GetProductData } from "./productStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  // for favorites
  favorites: [],
  toggleFavorite: () => {},
  //addProductToFavorites: () => {},
  //removeProductFromFavorites: () => {}
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]); // this is set to add products to favorites

  //----------------this is set to store the cart into local storage so that even if user refresh page he still find his cart -----------------------------------
  // this usualy works in production and sometimes in localhost

  // Load cart data from browser storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCartProducts(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  // Save cart data to browser storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  //-------------------------------------------------------------

  //-------------------------this is set to store the favoriteProducts into local storage----------------------------------------

  // Load favorites from browser storage on component mount
  useEffect(() => {
    const storedfavoriteProducts = localStorage.getItem("favoriteProducts");
    if (storedfavoriteProducts) {
      try {
        setFavoriteProducts(JSON.parse(storedfavoriteProducts));
      } catch (error) {
        console.error("Error parsing favorite data:", error);
      }
    }
  }, []);

  // Save favorite to browser storage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);
  //------------------------------------------------------------------

  //----------favorites------------------------------------------------

  function addProductToFavorites(id) {
    const isProductInFavorites = favoriteProducts.some(
      (product) => product.id === id
    );

    if (!isProductInFavorites) {
      setFavoriteProducts([...favoriteProducts, { id }]);
    }
  }

  function removeProductFromFavorites(id) {
    setFavoriteProducts(
      favoriteProducts.filter((product) => product.id !== id)
    );
  }

  function isProductInFavorites(id) {
    return favoriteProducts.some((product) => product.id === id);
  }

  //-------------end favorites-----------------------------------------

  // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = GetProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,

    // this is for favorites
    //favoriteProducts,
    favoriteProducts,
    addProductToFavorites,
    removeProductFromFavorites,
    isProductInFavorites,
  };

  return (
    <div>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
