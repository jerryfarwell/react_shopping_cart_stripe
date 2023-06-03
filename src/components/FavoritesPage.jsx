import React, { useContext } from "react";
import FavoriteProduct from "../components/FavoriteProduct";
import { CartContext } from "../CardContext";

function FavoritesPage() {
  const cart = useContext(CartContext);
  const { favoriteProducts } = cart;

  return (
    <div>
      {favoriteProducts.map((product) => (
        <FavoriteProduct
          key={product.id}
          id={product.id}
          removeFromFavorites={() =>
            cart.removeProductFromFavorites(product.id)
          }
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
