import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useState } from "react";

import { Link } from "react-router-dom";
export default function ShoppingPage() {
  const { shoppingCart } = useSelector((state) => state.cartReducer);
  const dishpatch = useDispatch();

  const addToCartSend = (e) => {
    const productToAdd = {
      ...e,
      size: sizeuse,
    };

    dishpatch(addToCart(productToAdd));
  };

  const [sizeuse, setSize] = useState("");

  const sendSize = (size) => {
    setSize(size);
  };

  return (
    <div className="mt-20 flex justify-center justify-items-center">
      <div className="mx-auto  max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="pt-8"></div>
        {shoppingCart.map((items) => {
          return (
            <div
              key={items.id}
              className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20"
            >
              <div className="col-span-5 grid grid-cols-2 gap-2.5">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                  >
                    <img
                      // src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                      src={items.image_url}
                      alt="Nike Air Max 95 By You--0"
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-4 pt-8 lg:pt-0">
                <div className="mb-7 border-b border-gray-300 pb-7">
                  <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                    {items.name}
                  </h2>
                  <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                    The Nike Air Max 95 By You lets you take inspiration from
                    the human body itself. The midsole represents the spine,
                    graduated panels are the muscles, the lace loops are the
                    shoe&apos;s ribs and the mesh in the upper is the skin.
                  </p>
                  <div className="mt-5 flex items-center ">
                    <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                      ₹ {items.price}.00
                    </div>
                    <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                      ₹ 50.00
                    </span>
                  </div>
                </div>
                <div className="border-b border-gray-300 pb-3  ">
                  <div className="mb-4">
                    <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                      size
                    </h3>
                    <ul className="colors -mr-3 flex flex-wrap">
                      {["S", "M", "L", "XL"].map((size) => (
                        <li
                          onClick={() => sendSize(size)}
                          key={size}
                          className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="mb-4 ">
                    <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                      color
                    </h3>
                    <ul className="colors -mr-3 flex flex-wrap">
                      {[
                        "bg-orange-400",
                        "bg-pink-400",
                        "bg-violet-600",
                        "bg-red-500",
                      ].map((color) => (
                        <li
                          onClick={() => sendColor(color)}
                          key={color}
                          className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                        >
                          <span
                            className={`block h-full w-full rounded ${color}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
                <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                  <button
                    onClick={() => addToCartSend(items)}
                    type="button"
                    className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to cart
                  </button>
                </div>

                <div className="py-6 ">
                  <ul className="space-y-5 pb-1 text-sm">
                    <li>
                      <span className="text-heading inline-block pr-2 font-semibold">
                        SKU:
                      </span>
                      N/A
                    </li>
                    <li>
                      <span className="text-heading inline-block pr-2 font-semibold">
                        Category:
                      </span>
                      <a
                        className="hover:text-heading transition hover:underline"
                        href="#"
                      >
                        kids
                      </a>
                    </li>
                    <li className="productTags">
                      <span className="text-heading inline-block pr-2 font-semibold">
                        Tags:
                      </span>
                      <a
                        className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                        href="#"
                      >
                        Sneakers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="shadow-sm ">
                  <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      Product Details
                    </h2>
                    <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                      <div className="bg-heading h-0.5 w-full rounded-sm" />
                      <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                    </div>
                  </header>
                  <div>
                    <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                      Our Customer Experience Team is available 7 days a week
                      and we offer 2 ways to get in contact.Email and Chat . We
                      try to reply quickly, so you need not to wait too long for
                      a response!.
                    </div>
                  </div>
                </div>
                <div className="shadow-sm ">
                  <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      <Link to="/">Continue shopping &rarr;</Link>
                    </h2>
                  </header>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
