import { ItemCount } from "../ItemCount/ItemCount";
import "./itemDetail.css";

export const ItemDetail = ({ itemFiltered }) => {
	return (
		<section className='container--itemDetail'>
			<h3 className='itemDetail--title'>{itemFiltered.title}</h3>
			<img
				className='itemDetail--img'
				src={itemFiltered.img}
				alt={itemFiltered.title}
			/>
			<div className='itemDetail--price'>
				Price $ {itemFiltered.price}
			</div>
			<div className='itemDetail--stock'>Stock {itemFiltered.stock}</div>
			<div className='itemDetail--description'>
				{itemFiltered.description}
			</div>
			<ItemCount stock={itemFiltered.stock} />
		</section>
	);
};
