import ProductCard from "components/ProductCard";
import PropTypes from 'prop-types';

export default function ProductList({data}) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map(({ id, title, price, thumbnail, brand, stock }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              image={thumbnail}
              title={title}
              price={price}
              brand={brand}
              stock={stock}
            />
          );
        })}
      </div>
    );
}

ProductList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  brand: PropTypes.string,
};