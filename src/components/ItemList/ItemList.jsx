import { Item } from "../Item/Item";

// recibo mis productos desestructurados para hacer el map
export const ItemList = ({ myProducts }) => {
	/* RECORRO EL ESTADO DONDE GUARDO LOS PRODUCTOS LUEGO DE HABERLOS FILTRADOS O NO  */
	return myProducts.map((product) => (
		<Item key={product.id} item={product} />
	));
};
