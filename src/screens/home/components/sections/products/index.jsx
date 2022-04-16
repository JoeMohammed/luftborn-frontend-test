import { useEffect, useState } from "react";
import { useGetProductsApi } from "../../../hooks/api/useGetProductsApi";
import Card from "../../utils/cards";
import styles from "./products.module.scss";

export default function Products() {
  const { isLoading, data: products, isError, error } = useGetProductsApi();
  const [edit, setEdit] = useState();

  console.log(products);

  function resetEdit() {
    setEdit(null);
  }

  useEffect(() => {
    document.addEventListener("click", resetEdit);
  }, []);

  function editHundler(e, id) {
    e.preventDefault();
    e.stopPropagation();
    setEdit(id);
    console.log(id);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Fetch Error {error.message}</p>;
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="flex -mx-2">
            {products?.map((product) => {
              return (
                <div key={product.id} className={styles.product}>
                  <Card
                    editClick={(e) => editHundler(e, product.id)}
                    title={product.title}
                    price={product.price}
                    img={product.image}
                    cardClassName={
                      product.id === edit ? "product_card_active" : ""
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
