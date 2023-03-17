import React from "react";
import { CartItem } from "../CartItem/CartItem";

export const CartList = ({ products }) => {
	return products.map((product) => (
		<CartItem key={product.id} product={product} />
	));
};
