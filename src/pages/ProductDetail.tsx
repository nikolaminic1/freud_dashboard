import React, { FC, ReactElement } from "react";
import { Routes, Route, useParams } from "react-router-dom";

interface ProductDetailProps {}

const ProductDetail: FC<ProductDetailProps> = ({}): ReactElement => {
  let { slug } = useParams();

  return <div>{slug}</div>;
};

export default ProductDetail;
