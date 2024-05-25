import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoping, history } from "../redux/slices/cartSlice";
import storeData from "../data/storeData.json";

export default function ProductPage() {
  const { searchReducer } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const sendShoppingData = (e) => {
    dispatch(shoping(e));
    dispatch(history(e));
  };

  return (
    <div className="mt-10 flex justify-center justify-items-center">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Trending Items
        </h2>

        <div className="mt-6   grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {storeData
            .filter((item) => {
              return (
                item.name.includes(searchReducer) ||
                item.colors.includes(searchReducer)
              );
            })
            .map((product, index) => (
              <Link
                key={index}
                to={"/shopping"}
                onClick={() => sendShoppingData(product)}
              >
                <div key={product.id} className="group relative ">
                  <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image_url}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.colors}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ₹ {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
