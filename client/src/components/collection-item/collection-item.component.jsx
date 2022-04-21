import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer onClick={() => dispatch(addItem(item))}>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span>{name}</span>
        <span>${price}</span>
      </CollectionFooterContainer>
      <AddButton inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
