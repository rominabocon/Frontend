import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Quantity from '../Quantity/Quantity';

import style from './Product_detail.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

import {
	selectImage,
	productColor,
	productSizes,
	selectVariant,
	selectSize,
	prepareProduct,
	formattingProduct,
} from '../../utils/utils';

//Data
import {
	getById,
	addCart,
	selectingProduct,
} from '../../actions/index';

export default function Product_detail() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const templateProduct = useSelector((state) => state.details);
	let product = useSelector((state) => state.detailEdited);

	const cartProducts = useSelector((state) => state.cart);

	const { name, brand, price, description } = product;

	const [state, setState] = useState();

	useEffect(() => {
		dispatch(getById(id));
	}, []);

	useEffect(() => {
		if (product?.variants) {
			const newProduct = Object.assign(
				{},
				formattingProduct(product, templateProduct)
			);
			dispatch(selectingProduct(newProduct));
		}
	}, [product?.price]);

  useEffect(() => {
    console.log("working")
  }, [product && product.variants])

	if (!product?.variants) return <div>Loading</div>;

	return (
		<div className={style.container}>
			<div className={style.containerImages}>
				<div className={style.containerMainImage}>
					{product?.is_offer && (
						<span className={style.offer}>{'Oferta'}</span>
					)}
					<img
						className={style.mainImage}
						src={product?.variants && product?.default_image}
						id='default_image'
						alt=''
					/>
				</div>
				<div className={style.containerSecondImages}>
					{product?.variants &&
						product?.variants[0]?.ProductImages.map((image) => (
							<img
								key={image}
								className={style.secondImages}
								src={image}
								alt=''
								onClick={() => {
									selectImage(image);
								}}
							/>
						))}
				</div>
			</div>

			<div className={style.containerInf}>
				<div className={style.specificInf}>
					<h2 className={style.productName}>{name}</h2>
					<p className={style.collectionName}>{brand}</p>
					<p
						className={style.productPrice}
						id='individualProductPrice'>{`$${
						product?.totalPrice || product?.price
					}`}</p>

					<div className={style.containerPreferences}>
						<div className={style.containerSizePreference}>
							<h3 className={style.sizeHeader}>Size</h3>
							<div className={style.sizes} id='sizes'>
								{product?.variants &&
									productSizes(templateProduct).map(
										(size) => (
											<div
												id={size}
												key={size}
												className={style.size}
												onClick={() => {
													const result =
														Object.assign(
															{},
															selectSize(
																templateProduct,
																product,
																size
															)
														);
													dispatch(
														selectingProduct(result)
													);
												}}>
												{size}
											</div>
										)
									)}
							</div>
						</div>

						<div className={style.containerColorPreference}>
							<h3 className={style.colorHeader}>Color</h3>
							<div className={style.colors} id='colors'>
								{productColor(templateProduct).map((color) => (
									<div
										id={color}
										key={color}
										className={style.color}
										onClick={() => {
											const result = Object.assign(
												{},
												selectVariant(
													templateProduct,
													product,
													color
												)
											);
											dispatch(selectingProduct(result));
										}}>
										{color}
									</div>
								))}
							</div>
						</div>

						<div className={style.containerAmountFavorite}>
							<Quantity product={product} />
							<div className={style.favorite}>
								<FontAwesomeIcon
									className={style.favoriteIcon}
									icon={faHeart}
								/>
							</div>
						</div>

						<div className={style.containerBuyCart}>
							<Link
								className={style.buyButton}
								to='/Form'
								onClick={() => prepareProduct(product)}>
								<button className={style.buyLetter}>Buy</button>
							</Link>
							<button
								className={style.cartButton}
								id='addCartButton'
								onClick={() => {
									addCart(cartProducts, product, dispatch);
								}}>
								<FontAwesomeIcon
									className={style.cartIcon}
									icon={faCartShopping}
								/>
							</button>
						</div>
						<div className={style.containerUnits}>
							<p className={style.infoUnits}>
								Available Units:{' '}
								<span className={style.units}>
									{product?.variants[0]?.leftUnits}
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className={style.generalInformation}>
					<h4 className={style.headerDescription}>Description</h4>
					<hr className={style.line} />
					<p className={style.description}>{description}</p>
				</div>
			</div>
		</div>
	);
}
