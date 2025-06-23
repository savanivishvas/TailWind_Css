import { Feature_Product_Card } from "./Feature_Product_Card";

export const Featured_Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-20 mt-12">

      <div className="flex flex-col gap-6"> 

        <div className="text-center ">
          <h1 className="text-xl font-bold">Hello</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Feature_Product_Card />
          <Feature_Product_Card />
          <Feature_Product_Card />
          <Feature_Product_Card />
        </div>

      </div>
      
    </div>
  );
}
