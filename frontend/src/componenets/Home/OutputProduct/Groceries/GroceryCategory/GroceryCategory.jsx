import React, { useEffect, useState, useMemo } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import ProductCard from './GrocerySubCategory/ProductCard/ProductCard'

const GroceryCategory = () => {
    const { groceryname } = useParams()
    const location2 = useLocation();
    const [showSidebar, setShowSidebar] = useState(true)

    const [sellerName, setSeller] = useState('')
    const [locationArea, setLocationArea] = useState('')
    const [priceRange, setPricerange] = useState('')
    const [availabilityDate, setAvailabilityDate] = useState('')
    const [totalQuantity, setTotalQuantity] = useState('')

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

    // filter product from the quantity
    const quantity = [
        { "id": 1, "range": "0-99" },
        { "id": 2, "range": "100-499" },
        { "id": 3, "range": "500-999" },
        { "id": 4, "range": "1000-4999" },
        { "id": 5, "range": "5000-9999" }

    ]

    // All Products are here : 
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
            "created_at": "2024-07-09T12:04:07.299+00:00"
        }
    ]

    const product2 = {
        "10": {
            "_id": "6690f8eec04645082d15a37c",
            "vendor_id": {
                "vendor_card_image": {
                    "public_id": "VendorCardImage/Service Provider/AS3456317/pv0op93rlbb9b6cerpnp",
                    "url": "https://res.cloudinary.com/djx69owjm/image/upload/v1720768083/VendorCardImage/Service%20Provider/AS3456317/pv0op93rlbb9b6cerpnp.jpg"
                },
                "_id": "6690d6537f69fd575af968bb",
                "user_id": "6690d6217f69fd575af968b5",
                "vendor_name": "On farm Agri Service Pvt Ltd",
                "vendor_type": "Service Provider",
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
                "__v": 0
            },
            "service_name": "Crop Selection",
            "service_type": "Off-farm",
            "specification": [
                {
                    "desc": "fdgfdbdfbfdbfd",
                    "_id": "6690f8eec04645082d15a37d"
                },
                {
                    "desc": "gdbf g dfbfd",
                    "_id": "6690f8eec04645082d15a37e"
                },
                {
                    "desc": "egdfb hfgjg ",
                    "_id": "6690f8eec04645082d15a37f"
                },
                {
                    "desc": "rttytrh nvbnbcb",
                    "_id": "6690f8eec04645082d15a380"
                }
            ],
            "visible": false,
            "isApproved": false,
            "created_at": "2024-07-12T09:35:42.908Z",
            "__v": 0
        },
        "20": {
            "_id": "7790f8eec04645082d15a37d",
            "vendor_id": {
                "vendor_card_image": {
                    "public_id": "VendorCardImage/Product Supplier/BS123456/pv0op93rlbb9b6cerpnp",
                    "url": "https://res.cloudinary.com/djx69owjm/image/upload/v1720768083/VendorCardImage/Product%20Supplier/BS123456/pv0op93rlbb9b6cerpnp.jpg"
                },
                "_id": "7790d6537f69fd575af968bc",
                "user_id": "7790d6217f69fd575af968b6",
                "vendor_name": "Agri Product Supplier Ltd",
                "vendor_type": "Product Supplier",
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
                "__v": 0
            },
            "product_name": "Organic Fertilizer",
            "product_type": "Fertilizer",
            "specification": [
                {
                    "desc": "Rich in nitrogen",
                    "_id": "7790f8eec04645082d15a37e"
                },
                {
                    "desc": "Suitable for all crops",
                    "_id": "7790f8eec04645082d15a37f"
                },
                {
                    "desc": "Eco-friendly",
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
                    "public_id": "VendorCardImage/Equipment Supplier/CS987654/pv0op93rlbb9b6cerpnp",
                    "url": "https://res.cloudinary.com/djx69owjm/image/upload/v1720768083/VendorCardImage/Equipment%20Supplier/CS987654/pv0op93rlbb9b6cerpnp.jpg"
                },
                "_id": "8890d6537f69fd575af968bd",
                "user_id": "8890d6217f69fd575af968b7",
                "vendor_name": "Agri Equipment Supplier Pvt Ltd",
                "vendor_type": "Equipment Supplier",
                "address": [
                    {
                        "state": "Rajasthan",
                        "city": "Jaipur",
                        "zip_code": "302001",
                        "_id": "8890d6537f69fd575af968be"
                    }
                ],
                "supplierAddresses": [
                    {
                        "state": "West Bengal",
                        "city": "Kolkata",
                        "zip_code": "700001",
                        "_id": "8890d6537f69fd575af968bf"
                    }
                ],
                "active": true,
                "productExist": true,
                "created_at": "2024-07-14T09:15:23.186Z",
                "Kab_id": "CS987654",
                "__v": 0
            },
            "product_name": "Tractor",
            "product_type": "Machinery",
            "specification": [
                {
                    "desc": "50 HP engine",
                    "_id": "8890f8eec04645082d15a37f"
                },
                {
                    "desc": "Hydraulic lift",
                    "_id": "8890f8eec04645082d15a380"
                },
                {
                    "desc": "Fuel efficient",
                    "_id": "8890f8eec04645082d15a381"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-14T11:45:42.908Z",
            "__v": 0
        },
        "40": {
            "_id": "9990f8eec04645082d15a37f",
            "vendor_id": {
                "vendor_card_image": {
                    "public_id": "VendorCardImage/Seed Supplier/DS654321/pv0op93rlbb9b6cerpnp",
                    "url": "https://res.cloudinary.com/djx69owjm/image/upload/v1720768083/VendorCardImage/Seed%20Supplier/DS654321/pv0op93rlbb9b6cerpnp.jpg"
                },
                "_id": "9990d6537f69fd575af968be",
                "user_id": "9990d6217f69fd575af968b8",
                "vendor_name": "Seed Supplier Co.",
                "vendor_type": "Seed Supplier",
                "address": [
                    {
                        "state": "Maharashtra",
                        "city": "Mumbai",
                        "zip_code": "400001",
                        "_id": "9990d6537f69fd575af968bf"
                    }
                ],
                "supplierAddresses": [
                    {
                        "state": "Gujarat",
                        "city": "Ahmedabad",
                        "zip_code": "380001",
                        "_id": "9990d6537f69fd575af968c0"
                    }
                ],
                "active": true,
                "productExist": true,
                "created_at": "2024-07-15T10:18:33.186Z",
                "Kab_id": "DS654321",
                "__v": 0
            },
            "product_name": "Hybrid Seeds",
            "product_type": "Seeds",
            "specification": [
                {
                    "desc": "High yield",
                    "_id": "9990f8eec04645082d15a380"
                },
                {
                    "desc": "Disease resistant",
                    "_id": "9990f8eec04645082d15a381"
                },
                {
                    "desc": "Fast growing",
                    "_id": "9990f8eec04645082d15a382"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-15T12:55:42.908Z",
            "__v": 0
        },
        "50": {
            "_id": "1110f8eec04645082d15a380",
            "vendor_id": {
                "vendor_card_image": {
                    "public_id": "VendorCardImage/Irrigation Supplier/ES987123/pv0op93rlbb9b6cerpnp",
                    "url": "https://res.cloudinary.com/djx69owjm/image/upload/v1720768083/VendorCardImage/Irrigation%20Supplier/ES987123/pv0op93rlbb9b6cerpnp.jpg"
                },
                "_id": "1110d6537f69fd575af968bf",
                "user_id": "1110d6217f69fd575af968b9",
                "vendor_name": "Irrigation Solutions Ltd",
                "vendor_type": "Irrigation Supplier",
                "address": [
                    {
                        "state": "Tamil Nadu",
                        "city": "Chennai",
                        "zip_code": "600001",
                        "_id": "1110d6537f69fd575af968c1"
                    }
                ],
                "supplierAddresses": [
                    {
                        "state": "Kerala",
                        "city": "Kochi",
                        "zip_code": "682001",
                        "_id": "1110d6537f69fd575af968c2"
                    }
                ],
                "active": true,
                "productExist": true,
                "created_at": "2024-07-16T11:20:43.186Z",
                "Kab_id": "ES987123",
                "__v": 0
            },
            "product_name": "Drip Irrigation System",
            "product_type": "Irrigation",
            "specification": [
                {
                    "desc": "Water efficient",
                    "_id": "1110f8eec04645082d15a381"
                },
                {
                    "desc": "Easy installation",
                    "_id": "1110f8eec04645082d15a382"
                },
                {
                    "desc": "Durable",
                    "_id": "1110f8eec04645082d15a383"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-16T13:35:42.908Z",
            "__v": 0
        }
    }

    const groceries = {
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
                "location": "Location 1" // Added location field
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
                "location": "Location 2" // Added location field
            },
            "product_name": "Whole Wheat Flour",
            "product_type": "Grains",
            "specification": [
                {
                    "desc": "Stone-ground",
                    "_id": "7790f8eec04645082d15a37e"
                },
                {
                    "desc": "Rich in fiber",
                    "_id": "7790f8eec04645082d15a37f"
                },
                {
                    "desc": "Non-GMO",
                    "_id": "7790f8eec04645082d15a380"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-13T10:22:42.908Z",
            "__v": 0
        },
        "30": {
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
                "location": "Location 2" // Added location field
            },
            "product_name": "Whole Wheat Flour",
            "product_type": "Grains",
            "specification": [
                {
                    "desc": "Stone-ground",
                    "_id": "7790f8eec04645082d15a37e"
                },
                {
                    "desc": "Rich in fiber",
                    "_id": "7790f8eec04645082d15a37f"
                },
                {
                    "desc": "Non-GMO",
                    "_id": "7790f8eec04645082d15a380"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-13T10:22:42.908Z",
            "__v": 0
        },
        "40": {
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
                "location": "Location 2" // Added location field
            },
            "product_name": "Whole Wheat Flour",
            "product_type": "Grains",
            "specification": [
                {
                    "desc": "Stone-ground",
                    "_id": "7790f8eec04645082d15a37e"
                },
                {
                    "desc": "Rich in fiber",
                    "_id": "7790f8eec04645082d15a37f"
                },
                {
                    "desc": "Non-GMO",
                    "_id": "7790f8eec04645082d15a380"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-13T10:22:42.908Z",
            "__v": 0
        },
        "50": {
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
                "location": "Location 2" // Added location field
            },
            "product_name": "Whole Wheat Flour",
            "product_type": "Grains",
            "specification": [
                {
                    "desc": "Stone-ground",
                    "_id": "7790f8eec04645082d15a37e"
                },
                {
                    "desc": "Rich in fiber",
                    "_id": "7790f8eec04645082d15a37f"
                },
                {
                    "desc": "Non-GMO",
                    "_id": "7790f8eec04645082d15a380"
                }
            ],
            "visible": true,
            "isApproved": true,
            "created_at": "2024-07-13T10:22:42.908Z",
            "__v": 0
        },
    }

    const filteredProducts = useMemo(() => {
        return Object.keys(groceries).map(key => groceries[key]).filter((prod) => {
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
    }, [groceries, sellerName, locationArea, priceRange, availabilityDate, totalQuantity]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowSidebar(false)
            }
            else {
                setShowSidebar(true)
            }
        }
        handleResize();
        window.addEventListener("scroll", handleResize)
        return () => window.removeEventListener("resize", handleResize)

    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location2.pathname])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{groceryname}</h2>

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
                                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
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
                                className="bg-white border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-green-500"
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
                                className="bg-white border border-gray-300 rounded-md px-1 py-1 focus:outline-none focus:border-green-500"
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
                                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
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
                                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
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
                            <ProductCard key={product._id} category={groceryname} product={product} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GroceryCategory