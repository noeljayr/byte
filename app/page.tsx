import Image from "next/image";
import Link from "next/link";
import { TickCircle } from "iconsax-react";
import Product from "@/components/Product";
import budget from "@/public/images/budget.png";
import gaming from "@/public/images/gaming.png";
import productivity from "@/public/images/productivity.png";
import Featured from "@/components/Featured";
import productsData from "@/api/product-data";

function Home() {
  return (
    <div className="flex flex-col wrapper items-center mb-8 gap-16 p-4 w-full">
      <div className="banner w-full gap-8 flex flex-col">
        <Featured />
        <div className="values w-full flex justify-between">
          <div className="value">
            <TickCircle size="32" color="#4356ff" variant="Bold" />
            Secure Payment
          </div>
          <div className="value">
            <TickCircle size="32" color="#4356ff" variant="Bold" />
            30 day money back
          </div>
          <div className="value">
            <TickCircle size="32" color="#4356ff" variant="Bold" />
            24/7 Customer support
          </div>
          <div className="value">
            <TickCircle size="32" color="#4356ff" variant="Bold" />
            National wide free shipping
          </div>
        </div>
      </div>

      <div id="categories" className="categories grid relative gap-8 w-full">
        <Link href="productivity" className="category">
          <h1>Productivity</h1>
          <Image
            src={productivity}
            alt="Productivity laptop"
            height={1000}
            width={1000}
          />
        </Link>
        <Link href="gaming" className="category">
          <h1>Gaming</h1>
          <Image src={gaming} alt="Gaming laptop" height={1000} width={1000} />
        </Link>
        <Link href="budget" className="category">
          <h1>Budget</h1>
          <Image src={budget} alt="budget laptop" height={1000} width={1000} />
        </Link>
      </div>

      <div className="products grid gap-8">
        {productsData.map((product) => (
          product? <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          image={product.image}
        /> : <></>
        ))}
      </div>
    </div>
  );
}

export default Home;
