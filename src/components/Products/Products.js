import React, { useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  const [oneproduct, setOneproduct] = useState({
    image: "",
    price: "",
  });
  const handleChangeInput = (e) => {
    setProduct(e.target.value);
  };

  const showProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${product}`
    );
    setOneproduct(response.data);
  };

  const getProducts = async () => {
    setLoading(true);

    const response = await axios.get("https://fakestoreapi.com/products");

    setProducts(response.data);
    setLoading(false);
  };

  const getCardData = async (params) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${params}`);

    setProduct(res);
  };

  return !loading ? (
    <div>
      <button onClick={getProducts}>Show all products </button>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <div
              className={styles.product}
              onClick={() => getCardData(product.id)}>
              <img className={styles.productImage} src={product.image} />
              <div>{product.category}</div>

              <div>{product.price}</div>
             
            </div>
          );
        })}
      </div>
      <div>
        <input onChange={handleChangeInput} />
        <button onClick={showProduct}>Search</button>
      </div>
      <div>
        <img src={oneproduct.image} />
        <div>{oneproduct.price}</div>
      </div>

      {/* <hr/>
      <div>{product?.data.price}</div> */}
    </div>
  ) : (
    <div style={{ color: "red" }}>loading</div>
  );
};

export default Products;
