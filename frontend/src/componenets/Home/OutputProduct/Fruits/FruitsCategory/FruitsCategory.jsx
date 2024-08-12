import React, { useEffect, useState, useMemo } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import ProductCard from '../../Groceries/GroceryCategory/GrocerySubCategory/ProductCard/ProductCard';

const FruitsCategory = () => {
  const location2 = useLocation();
  const { fruitname } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location2.pathname])

  const [sellerName, setSeller] = useState('')
  const [priceRange, setPricerange] = useState('')
  const [locationArea, setLocationArea] = useState('')
  const [totalQuantity, setTotalQuantity] = useState('')
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [showSidebar, setShowSidebar] = useState(true)

  // Filter from the location 
  const location = [
    { "id": 1, "city": "Location 1" },
    { "id": 2, "city": "Location 2" },
    { "id": 3, "city": "Location 3" }
  ]
  // Filter from the availability of product 
  const availability = [
    { "id": 1, "date": "2024-07-10", "status": "available" },
    { "id": 2, "date": "2024-07-11", "status": "available" },
    { "id": 3, "date": "2024-07-12", "status": "available" },
    { "id": 4, "date": "2024-07-13", "status": "available" },
    { "id": 5, "date": "2024-07-14", "status": "available" }
  ];
  // Filter from price
  const price = [
    { "id": 1, "value": "0-99" },
    { "id": 2, "value": "100-499" },
    { "id": 3, "value": "500-999" },
    { "id": 4, "value": "1000-4999" },
    { "id": 5, "value": "5000-9999" }
  ]

  // Filter product from the seller
  const seller = [
    { "id": 1, "vendor_id": "Seller 1" },
    { "id": 2, "vendor_id": "Seller 2" },
    { "id": 3, "vendor_id": "Seller 3" },
    { "id": 4, "vendor_id": "Seller 4" }
  ]

  const quantity = [
    { "id": 1, "range": "0-99" },
    { "id": 2, "range": "100-499" },
    { "id": 3, "range": "500-999" },
    { "id": 4, "range": "1000-4999" },
    { "id": 5, "range": "5000-9999" }

  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      }
      else {
        setShowSidebar(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const products = [
    {
      "_id": "668d2737b7e2a1514a0a3fc1",
      "vendor_id": "668d1228c3db7a4e3212d7c1",
      "product_name": "Rice",
      "Quantity": 300,
      "product_super_type": "Output",
      "product_category": "Groceries",
      "product_subcategory": "Rice",
      "description": "High quality rice",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://zlfy5.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 1",
      "price": 500,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc2",
      "vendor_id": "668d1228c3db7a4e3212d7c2",
      "product_name": "Bread",
      "Quantity": 100,
      "product_super_type": "Output",
      "product_category": "Groceries",
      "product_subcategory": "Bread",
      "description": "Freshly baked bread",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://r910/gda4eej5.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 2",
      "price": 900,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc3",
      "vendor_id": "668d1228c3db7a4e3212d7c3",
      "product_name": "Milk",
      "Quantity": 200,
      "product_super_type": "Output",
      "product_category": "Groceries",
      "product_subcategory": "Milk",
      "description": "Organic milk",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.load/v17182719fy5.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 3",
      "price": 10,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc4",
      "vendor_id": "668d1228c3db7a4e3212d7c4",
      "product_name": "Eggs",
      "Quantity": 150,
      "product_super_type": "Output",
      "product_category": "Groceries",
      "product_subcategory": "Eggs",
      "description": "Farm fresh eggs",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://htt1718271910/gda4eej875.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 1",
      "price": 50,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc5",
      "vendor_id": "668d1228c3db7a4e3212d7c5",
      "product_name": "Flour",
      "Quantity": 250,
      "product_super_type": "Output",
      "product_category": "Groceries",
      "product_subcategory": "Flour",
      "description": "Whole wheat flour",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://httpssop/image/upload/v1718271910/gda4ed8zlfy5.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 2",
      "price": 80,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc6",
      "vendor_id": "668d1228c3db7a4e3212d7c6",
      "product_name": "Apple",
      "Quantity": 100,
      "product_super_type": "Output",
      "product_category": "Fruits",
      "product_subcategory": "Apple",
      "description": "Fresh red apples",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/apple.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 1",
      "price": 400,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc7",
      "vendor_id": "668d1228c3db7a4e3212d7c7",
      "product_name": "Orange",
      "Quantity": 120,
      "product_super_type": "Output",
      "product_category": "Fruits",
      "product_subcategory": "Orange",
      "description": "Juicy oranges",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/orange.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 2",
      "price": 1000,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc8",
      "vendor_id": "668d1228c3db7a4e3212d7c8",
      "product_name": "Banana",
      "Quantity": 200,
      "product_super_type": "Output",
      "product_category": "Fruits",
      "product_subcategory": "Banana",
      "description": "Ripe bananas",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/banana.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 3",
      "price": 2000,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fc9",
      "vendor_id": "668d1228c3db7a4e3212d7c9",
      "product_name": "Strawberry",
      "Quantity": 80,
      "product_super_type": "Output",
      "product_category": "Fruits",
      "product_subcategory": "Strawberry",
      "description": "Sweet strawberries",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/strawberry.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 3",
      "price": 2500,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fca",
      "vendor_id": "668d1228c3db7a4e3212d7ca",
      "product_name": "Mango",
      "Quantity": 150,
      "product_super_type": "Output",
      "product_category": "Fruits",
      "product_subcategory": "Mango",
      "description": "Delicious mangoes",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/mango.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 2",
      "price": 3500,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fcb",
      "vendor_id": "668d1228c3db7a4e3212d7cb",
      "product_name": "Carrot",
      "Quantity": 90,
      "product_super_type": "Output",
      "product_category": "Vegetables",
      "product_subcategory": "Carrot",
      "description": "Fresh carrots",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/carrot.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 1",
      "price": 55000,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fcc",
      "vendor_id": "668d1228c3db7a4e3212d7cc",
      "product_name": "Broccoli",
      "Quantity": 70,
      "product_super_type": "Output",
      "product_category": "Vegetables",
      "product_subcategory": "Broccoli",
      "description": "Green broccoli",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/broccoli.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 3",
      "price": 780,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fcd",
      "vendor_id": "668d1228c3db7a4e3212d7cd",
      "product_name": "Spinach",
      "Quantity": 60,
      "product_super_type": "Output",
      "product_category": "Vegetables",
      "product_subcategory": "Spinach",
      "description": "Fresh spinach leaves",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/spinach.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 2",
      "price": 34500,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fce",
      "vendor_id": "668d1228c3db7a4e3212d7ce",
      "product_name": "Potato",
      "Quantity": 150,
      "product_super_type": "Output",
      "product_category": "Vegetables",
      "product_subcategory": "Potato",
      "description": "Organic potatoes",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/potato.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 3",
      "price": 100,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    },
    {
      "_id": "668d2737b7e2a1514a0a3fcf",
      "vendor_id": "668d1228c3db7a4e3212d7cf",
      "product_name": "Bell-Pepper",
      "Quantity": 100,
      "product_super_type": "Output",
      "product_category": "Vegetables",
      "product_subcategory": "Bell-Pepper",
      "description": "Fresh bell peppers",
      "dateRange": {
        "startDate": "2024-07-10T00:00:00.000+00:00",
        "endDate": "2024-07-14T00:00:00.000+00:00"
      },
      "productImage": ["https://res.cloudinary.com/bell-pepper.jpg"],
      "visible": false,
      "IsApproved": true,
      "location": "Location 1",
      "price": 40,
      "created_at": "2024-07-09T12:04:07.299+00:00"
    }
  ]

  const fruits = {
    "10": {
      "_id": "6690f8eec04645082d15a37c",
      "vendor_id": {
        "vendor_card_image": {
          "public_id": "VendorCardImage/GroceryVendor/AS3456317/pv0op93rlbb9b6cerpnp",
          "url": "https://res.cloudinary.com/dq7vggsop/image/upload/v1719723384/w6bmeb6pdgmls5z88wob.jpg"
        },
        "_id": "6690d6537f69fd575af968bb",
        "user_id": "6690d6217f69fd575af968b5",
        "vendor_name": "Fresh Groceries Pvt Ltd",
        "vendor_type": "Grocery Vendor",
        "address": [
          {
            "state": "Haryana",
            "city": "Palwal",
            "zip_code": "123456",
            "_id": "6690d6537f69fd575af968bc"
          }
        ],
        "supplierAddresses": [
          {
            "state": "Bihar",
            "city": "Jamui",
            "zip_code": "234234",
            "_id": "6690d6537f69fd575af968bd"
          }
        ],
        "active": true,
        "productExist": true,
        "created_at": "2024-07-12T07:08:03.186Z",
        "Kab_id": "AS3456317",
        "__v": 0,
        "location": "Location 1"
      },
      "product_name": "Organic Apples",
      "product_type": "Fruits",
      "specification": [
        {
          "desc": "Fresh and juicy",
          "_id": "6690f8eec04645082d15a37d"
        },
        {
          "desc": "No pesticides used",
          "_id": "6690f8eec04645082d15a37e"
        },
        {
          "desc": "Packed with vitamins",
          "_id": "6690f8eec04645082d15a37f"
        },
        {
          "desc": "Farm fresh quality",
          "_id": "6690f8eec04645082d15a380"
        }
      ],
      "visible": true,
      "isApproved": true,
      "created_at": "2024-07-12T09:35:42.908Z",
      "__v": 0
    },
    "20": {
      "_id": "7790f8eec04645082d15a37d",
      "vendor_id": {
        "vendor_card_image": {
          "public_id": "VendorCardImage/GroceryVendor/BS123456/pv0op93rlbb9b6cerpnp",
          "url": "https://res.cloudinary.com/dq7vggsop/image/upload/v1719723384/w6bmeb6pdgmls5z88wob.jpg"
        },
        "_id": "7790d6537f69fd575af968bc",
        "user_id": "7790d6217f69fd575af968b6",
        "vendor_name": "Healthy Harvest Ltd",
        "vendor_type": "Grocery Vendor",
        "address": [
          {
            "state": "Punjab",
            "city": "Ludhiana",
            "zip_code": "141001",
            "_id": "7790d6537f69fd575af968bd"
          }
        ],
        "supplierAddresses": [
          {
            "state": "Uttar Pradesh",
            "city": "Lucknow",
            "zip_code": "226001",
            "_id": "7790d6537f69fd575af968be"
          }
        ],
        "active": true,
        "productExist": true,
        "created_at": "2024-07-13T08:12:13.186Z",
        "Kab_id": "BS123456",
        "__v": 0,
        "location": "Location 2"
      },
      "product_name": "Ripe Bananas",
      "product_type": "Fruits",
      "specification": [
        {
          "desc": "Sweet and ready to eat",
          "_id": "7790f8eec04645082d15a37e"
        },
        {
          "desc": "High in potassium",
          "_id": "7790f8eec04645082d15a37f"
        },
        {
          "desc": "Good source of fiber",
          "_id": "7790f8eec04645082d15a380"
        }
      ],
      "visible": true,
      "isApproved": true,
      "created_at": "2024-07-13T10:22:42.908Z",
      "__v": 0
    },
    "30": {
      "_id": "8890f8eec04645082d15a37e",
      "vendor_id": {
        "vendor_card_image": {
          "public_id": "VendorCardImage/GroceryVendor/CS567890/pv0op93rlbb9b6cerpnp",
          "url": "https://res.cloudinary.com/dq7vggsop/image/upload/v1719723384/w6bmeb6pdgmls5z88wob.jpg"
        },
        "_id": "8890d6537f69fd575af968be",
        "user_id": "8890d6217f69fd575af968b7",
        "vendor_name": "Natural Foods Co",
        "vendor_type": "Grocery Vendor",
        "address": [
          {
            "state": "Karnataka",
            "city": "Bangalore",
            "zip_code": "560001",
            "_id": "8890d6537f69fd575af968bf"
          }
        ],
        "supplierAddresses": [
          {
            "state": "Tamil Nadu",
            "city": "Chennai",
            "zip_code": "600001",
            "_id": "8890d6537f69fd575af968bg"
          }
        ],
        "active": true,
        "productExist": true,
        "created_at": "2024-07-14T08:12:13.186Z",
        "Kab_id": "CS567890",
        "__v": 0,
        "location": "Location 3"
      },
      "product_name": "Juicy Oranges",
      "product_type": "Fruits",
      "specification": [
        {
          "desc": "Refreshing and full of flavor",
          "_id": "8890f8eec04645082d15a37f"
        },
        {
          "desc": "Rich in vitamin C",
          "_id": "8890f8eec04645082d15a380"
        },
        {
          "desc": "Easy to peel",
          "_id": "8890f8eec04645082d15a381"
        }
      ],
      "visible": true,
      "isApproved": true,
      "created_at": "2024-07-14T10:22:42.908Z",
      "__v": 0
    },
    "40": {
      "_id": "9990f8eec04645082d15a37f",
      "vendor_id": {
        "vendor_card_image": {
          "public_id": "VendorCardImage/GroceryVendor/DS234567/pv0op93rlbb9b6cerpnp",
          "url": "https://res.cloudinary.com/dq7vggsop/image/upload/v1719723384/w6bmeb6pdgmls5z88wob.jpg"
        },
        "_id": "9990d6537f69fd575af968bf",
        "user_id": "9990d6217f69fd575af968b8",
        "vendor_name": "Pure Groceries Ltd",
        "vendor_type": "Grocery Vendor",
        "address": [
          {
            "state": "Maharashtra",
            "city": "Mumbai",
            "zip_code": "400001",
            "_id": "9990d6537f69fd575af968bg"
          }
        ],
        "supplierAddresses": [
          {
            "state": "Goa",
            "city": "Panaji",
            "zip_code": "403001",
            "_id": "9990d6537f69fd575af968bh"
          }
        ],
        "active": true,
        "productExist": true,
        "created_at": "2024-07-15T08:12:13.186Z",
        "Kab_id": "DS234567",
        "__v": 0,
        "location": "Location 1"
      },
      "product_name": "Sweet Mangoes",
      "product_type": "Fruits",
      "specification": [
        {
          "desc": "Deliciously ripe",
          "_id": "9990f8eec04645082d15a380"
        },
        {
          "desc": "Fiber-rich",
          "_id": "9990f8eec04645082d15a381"
        },
        {
          "desc": "Naturally sweet",
          "_id": "9990f8eec04645082d15a382"
        }
      ],
      "visible": true,
      "isApproved": true,
      "created_at": "2024-07-15T10:22:42.908Z",
      "__v": 0
    }
  };


  // const filteredProducts = useMemo(() => {

  //   return products.filter((prod) => {
  //     const isSellerMatch = sellerName ? prod.vendor_id === sellerName : true;
  //     const isLocationMatch = locationArea ? prod.location === locationArea : true;
  //     let isPriceMatch = true;

  //     if (priceRange) {
  //       const [minPrice, maxPrice] = priceRange.split('-').map(Number);
  //       isPriceMatch = prod.price >= minPrice && prod.price <= maxPrice;
  //     }

  //     let isAvailabilityMatch = true;
  //     if (availabilityDate) {
  //       const date = new Date(availabilityDate);
  //       const startDate = new Date(prod.dateRange.startDate);
  //       const endDate = new Date(prod.dateRange.endDate);
  //       isAvailabilityMatch = date >= startDate && date <= endDate;
  //     }

  //     let isQuantityMatch = true;
  //     if (totalQuantity) {
  //       const [minQuantity, maxQuantity] = totalQuantity.split('-').map(Number);
  //       isQuantityMatch = prod.Quantity >= minQuantity && prod.Quantity <= maxQuantity;
  //     }

  //     return isSellerMatch && isLocationMatch && isPriceMatch && isAvailabilityMatch && isQuantityMatch;
  //   });
  // }, [products, sellerName, locationArea, priceRange, availabilityDate, totalQuantity]);


  const filteredProducts = useMemo(() => {
    return Object.keys(fruits).map(key => fruits[key]).filter((prod) => {
      const isSellerMatch = sellerName ? prod.vendor_id.vendor_name === sellerName : true;

      // Check if the location matches based on the vendor's location field
      const isLocationMatch = locationArea ? prod.vendor_id.location === locationArea : true;

      let isPriceMatch = true;
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        isPriceMatch = prod.vendor_id.price >= minPrice && prod.vendor_id.price <= maxPrice;
      }

      let isAvailabilityMatch = true;
      if (availabilityDate) {
        const date = new Date(availabilityDate);
        const startDate = new Date(prod.created_at);
        isAvailabilityMatch = date >= startDate;
      }

      let isQuantityMatch = true;
      if (totalQuantity) {
        const [minQuantity, maxQuantity] = totalQuantity.split('-').map(Number);
        isQuantityMatch = prod.vendor_id.Quantity >= minQuantity && prod.vendor_id.Quantity <= maxQuantity;
      }

      return isSellerMatch && isLocationMatch && isPriceMatch && isAvailabilityMatch && isQuantityMatch;
    });
  }, [fruits, sellerName, locationArea, priceRange, availabilityDate, totalQuantity]);



  useEffect(() => {
    // console.log("Filtered products:", filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{fruitname}</h2>

      <div className="flex flex-col lg:flex-row">
        {!showSidebar ? (
          <span className='text-gray-700 font-medium'>Filter</span>
        ) : (
          <p>{''}</p>
        )}

        {/* Left Sidebar - Filters */}
        {showSidebar ? (
          <div className="w-full lg:w-1/4 p-4 border-r border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="mb-4">
              <h3 className="text-sm font-medium">Seller</h3>
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setSeller(e.target.value)}
                value={sellerName}
              >
                <option value="" >None</option>
                {seller.map((seller) => (
                  <option key={seller.id} >{seller.vendor_id}</option>
                ))}
              </select>

            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium">Price</h3>
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-green-500"
                onChange={(e) => setPricerange(e.target.value)}
                value={priceRange}
              >
                <option value="" >None</option>
                {price.map((price) => (
                  <option key={price.id}>{price.value}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium">Availability</h3>
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-green-500"
                onChange={(e) => setAvailabilityDate(e.target.value)}
                value={availabilityDate}
              >
                <option value="" >None</option>
                {availability.map((avail) => (
                  <option key={avail.id}>{avail.date} and {avail.status}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium">Location</h3>
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setLocationArea(e.target.value)}
                value={locationArea}
              >
                <option value="" >None</option>
                {location.map((location) => (
                  <option key={location.id}>{location.city}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium">Quantity</h3>
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
                onChange={(e) => setTotalQuantity(e.target.value)}
                value={totalQuantity}
              >
                <option value="" >None</option>
                {quantity.map((quant) => (
                  <option key={quant.id}>{quant.range}</option>
                ))}
              </select>
            </div>

          </div>

        ) : (
          <div className="bg-gray-100 rounded-md shadow-md p-4">

            <div className="flex justify-between mb-4">

              {/* Seller */}
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 flex-1 mr-2"
                onChange={(e) => setSeller(e.target.value)}
                value={sellerName}
              >
                <option value="">Select Seller</option>
                {seller.map((seller) => (
                  <option key={seller.id}>{seller.vendor_id}</option>
                ))}
              </select>

              {/* Availability */}
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 flex-1 ml-2"
                onChange={(e) => setAvailabilityDate(e.target.value)}
                value={availabilityDate}
              >
                <option value="">Select Availability</option>
                {availability.map((avail) => (
                  <option key={avail.id}>{avail.status} - {avail.date}</option>
                ))}
              </select>

            </div>

            <div className="flex justify-between mb-4">

              {/* Price Range */}
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 flex-1 mr-2"
                onChange={(e) => setPricerange(e.target.value)}
                value={priceRange}
              >
                <option value="">Select Price Range</option>
                {price.map((price) => (
                  <option key={price.id}>{price.value}</option>
                ))}
              </select>

              {/* Location */}
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 flex-1 ml-2"
                onChange={(e) => setLocationArea(e.target.value)}
                value={locationArea}
              >
                <option value="">Select Location</option>
                {location.map((location) => (
                  <option key={location.id}>{location.city}</option>
                ))}
              </select>

            </div>

            <div className='flex justify-between mb-4'>
              {/* Quantity Range */}
              <select
                className="bg-white border text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500 flex-1 mr-2"
                onChange={(e) => setTotalQuantity(e.target.value)}
                value={totalQuantity}
              >
                <option value="">Select Quantity</option>
                {quantity.map((quan) => (
                  <option key={quan.id}>{quan.range}</option>
                ))}
              </select>
            </div>

          </div>
        )}

        {/* Right Side - Products */}
        <div className="w-full lg:w-3/4 p-4">
          <h2 className="text-xl font-semibold mb-4">Products</h2>

          <div className="p-6">
            {(filteredProducts).map((product) => (
              <ProductCard key={product._id} category={fruitname} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default FruitsCategory