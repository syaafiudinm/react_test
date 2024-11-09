import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const Products = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Kulit">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum molestiae iusto minus?
          Corporis excepturi commodi fuga distinctio nisi.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.500.000 "/>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Kulit">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          fugiat sit eaque maxime repudiandae dicta accusamus dolore
          voluptatibus distinctio architecto, cum molestiae iusto minus?
          Corporis excepturi commodi fuga distinctio nisi.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.500.000 "/>
      </CardProduct>
    </div>
  );
};

export default Products;
