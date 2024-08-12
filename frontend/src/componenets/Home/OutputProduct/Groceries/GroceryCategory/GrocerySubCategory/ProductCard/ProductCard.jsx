import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product, category }) => {
    return (
      <Link to={`/output-product/fruits/${category}/${Math.floor(Math.random() * 1000)}`}>
      <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden mb-6 mx-2 text-sm">
      <div className="flex-shrink-0">
        <img
          src={product.vendor_id.vendor_card_image.url}
          alt="Vendor"
          className="h-48 w-full md:w-48 object-cover"
        />
      </div>
      <div className="p-4 flex-1">
        <h2 className="text-lg font-bold mb-2">{product.product_name || product.service_name}</h2>
        <p className="text-gray-700 mb-2">
          Type: {product.product_type || product.service_type}
        </p>
        <ul className="list-disc list-inside mb-4">
          {product.specification.map((spec, index) => (
            <li key={index}>{spec.desc}</li>
          ))}
        </ul>
        <p className="text-gray-700">Created at: {new Date(product.created_at).toLocaleString()}</p>
      </div>
      <div className="p-4 bg-gray-100 flex-1">
        <h2 className="text-lg font-bold mb-2">{product.vendor_id.vendor_name}</h2>
        <p className="text-gray-700 mb-2">Type: {product.vendor_id.vendor_type}</p>
        <p className="text-gray-700 mb-2">State: {product.vendor_id.address[0].state}</p>
        <p className="text-gray-700 mb-2">City: {product.vendor_id.address[0].city}</p>
        <p className="text-gray-700 mb-2">Zip Code: {product.vendor_id.address[0].zip_code}</p>
        <p className="text-gray-700 mb-2">Active: {product.vendor_id.active ? 'Yes' : 'No'}</p>
        <p className="text-gray-700 mb-2">Product Exist: {product.vendor_id.productExist ? 'Yes' : 'No'}</p>
        <p className="text-gray-700">Kab ID: {product.vendor_id.Kab_id}</p>
      </div>
    </div>
      </Link>
    );
  };
export default ProductCard;
  