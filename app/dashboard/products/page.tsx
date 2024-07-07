"use client";
import React from "react";
import ProductCard from "@/components/product/ProductCard";
import ProductStatsCard from "@/components/stats/ProductStats";

import { useRouter } from "next/navigation";

function Products() {
  const { push } = useRouter();
  return (
    <>
      <div className="mb-10">
        <ProductStatsCard />
      </div>

      <div className="my-10">
        <button
          onClick={() => push("/dashboard/products/add")}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary"
        >
          + Add Product
        </button>
      </div>
      <div className="bg-white p-4 py-10">
        <ProductCard />
      </div>
    </>
  );
}

export default Products;
