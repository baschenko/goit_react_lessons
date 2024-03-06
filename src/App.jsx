import { products } from 'assets/products';
import ProductList from 'components/ProductList';
import Title from "components/UI/Title";
import {Icon} from "./assets/icons"

export default function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Title title="Customers also putchased"/>
         <Icon id='logo'/>    
              

        <ProductList data={products} />
      </div>
    </div>
  );
}
