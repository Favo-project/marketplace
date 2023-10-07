import Image from "next/image";
import classes from "./product.module.css";
import Loading from "@/components/Loading/Loading";

type Props = {
  params: {
    id: string;
  };
};

async function ProductPage({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return (
      <div className={"container"}>
        {product ? (
          <div className={classes.Product}>
            <div className={classes.ProductLeft}>
              <Image src={product.image} width={100} height={100} alt="" />
            </div>
            <div className={classes.ProductRight}>
              <h1 className="text-2xl md:text-4xl font-bold">
                {product.title}
              </h1>
              <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
                ${product.price}
              </h2>
              <p className="text-xs md:text-sm">{product.description}</p>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default ProductPage;
