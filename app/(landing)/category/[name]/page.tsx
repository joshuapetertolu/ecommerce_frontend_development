"use client";

import React from "react";
import ProcurementSearchInput from "@/components/Inputs/ProcurementSearchInput";
import ProductListCard from "@/components/product/ProductListCard";
import { useParams } from "next/navigation";
function ProductCategory() {
  const params = useParams<any>();

  return (
    <section className="my-10">
      <h2 className="text-2xl capitalize font-bold font-dmSans mb-5 mt-20">
        {params?.name} Category
      </h2>
      <ProcurementSearchInput />

      <div className="mt-20">
        <ProductListCard />
      </div>
    </section>
  );
}

export default ProductCategory;
