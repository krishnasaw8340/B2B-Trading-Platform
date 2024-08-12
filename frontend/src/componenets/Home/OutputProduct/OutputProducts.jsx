import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const OutputProducts = () => {
  // const fruits = [
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Fruits",
  //     "product_subcategory": "",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "second",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "third",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "fourth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "fifth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "sixth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "seventh",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Apple",
  //     "product_subcategory": "eighth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  // ]

  // const vegetables = [
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Vegetbale",
  //     "product_subcategory": "first",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Vegetbale",
  //     "product_subcategory": "second",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Vegetbale",
  //     "product_subcategory": "third",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Vegetbale",
  //     "product_subcategory": "fourth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Vegetbale",
  //     "product_subcategory": "fifth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Vegetbale",
  //     "product_subcategory": "sixth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },

  // ]

  // const groceries = [
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Groceries",
  //     "product_subcategory": "first",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Groceries",
  //     "product_subcategory": "second",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Groceries",
  //     "product_subcategory": "third",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Groceries",
  //     "product_subcategory": "fourth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Groceries",
  //     "product_subcategory": "fifth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  //   {
  //     "vendor_id": "60d5ec49d4a1b12b4c8e4b44",
  //     "product_name": "Organic Fertilizer",
  //     "Quantity": 50,
  //     "product_super_type": "Output",
  //     "product_category": "Groceries",
  //     "product_subcategory": "Sixth",
  //     "description": "High-quality organic fertilizer suitable for all crops.",
  //     "dateRange": {
  //       "startDate": "2024-07-01T00:00:00Z",
  //       "endDate": "2024-12-31T23:59:59Z"
  //     },
  //     "productImage": [
  //       {
  //         "public_id": "organic_fertilizer_img123",
  //         "url": "http://res.cloudinary.com/djx69owjm/image/upload/v1720503555/organic_fertilizer_img123.png"
  //       }
  //     ],
  //     "visible": true,
  //     "IsApproved": true,
  //     "created_at": "2024-07-09T05:39:15Z"
  //   },
  // ]


  const fruitsCategory = [
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Apple', slug: 'apple' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Orange', slug: 'orange' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Banana', slug: 'banana' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Strawberry', slug: 'strawberry' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Mango', slug: 'mango' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Pineapple', slug: 'pineapple' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Blueberry', slug: 'blueberry' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Watermelon', slug: 'watermelon' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Grapes', slug: 'grapes' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Kiwi', slug: 'kiwi' },
  ]

  const vegetablesCategory = [
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Carrot', slug: 'carrot' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Broccoli', slug: 'broccoli' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Spinach', slug: 'spinach' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Potato', slug: 'potato' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Cauliflower', slug: 'cauliflower' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Bell-Pepper', slug: 'bell-pepper' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Cucumber', slug: 'cucumber' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Lettuce', slug: 'lettuce' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Zucchini', slug: 'zucchini' },
  ]

  const groceriesCategory = [
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Rice', slug: 'rice' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Bread', slug: 'bread' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Milk', slug: 'milk' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Eggs', slug: 'eggs' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Flour', slug: 'flour' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Sugar', slug: 'sugar' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Butter', slug: 'butter' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Cereal', slug: 'cereal' },
    { img: 'https://res.cloudinary.com/dq7vggsop/image/upload/v1718271910/gda4eej87svupd8zlfy5.jpg', category: 'Pasta', slug: 'pasta' },
  ]

  const handleDelete = () => {

  }
  const EditProduct = () => {

  }

  const formatDateRange = (startDate, endDate) => {
    const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",

    });

    const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    
    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  const calculateDaysLeft = (startDate, endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const timeDifference = end.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysLeft;
  }

  const getTotaldaysLeft = (daysleft) => {
    return daysleft > 6 ? "text-green-800" : "text-red-500";
  }

  return (
    <div className='h-100 w-100%'>
      <section data-aos="fade-up" className='mb-8' style={{
        height: "30vh",
        width: "100%",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dq7vggsop/image/upload/v1719723422/gygb35qgohxyjozuvfvg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div className="text-center max-w-screen-lg px-4 md:px-8 lg:px-20">
          <h2 className="text-xl lg:text-2xl font-bold text-orange-700 py-2 lg:px-8  mb-2 border rounded-md bg-white shadow-md">
            Agri Output Products
          </h2>

        </div>
      </section>

      <h3 className='text-2xl text-gray-700 text-center font-medium pb-10'>Get All Output Products for your Agricultural needs </h3>

      {/* Fruits */}
      <section>
        <div >

          <div className='flex flex-col items-center mb-8'>
            
            {/* All Fruits category */}
            <div>
              <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
                <h2>All Fruits</h2>
                <p>See more..</p>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {fruitsCategory.map((product, index) => (
                  <div key={index} className="border border-gray-300 p-4 rounded-lg hover:shadow-2xl transition duration-300">
                    <div className="mb-4">
                      {/* {product.img && product.productImage.map((image, ind) => ( */}
                      <Link key={index} to={`/output-product/fruits/${product.slug}`}>
                        <div className='flex flex-col items-center mx-2' style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}>
                          <img src={product.img} alt='product-img' className='w-32 h-32 object-cover' />
                          <p className='mt-2'>{product.category}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Vegetables  */}
            <div>
              <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
                <h2>All Vegetables</h2>
                <p>See more..</p>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {vegetablesCategory.map((product, index) => (
                  <div key={index} className="border border-gray-300 p-4 rounded-lg hover:shadow-2xl transition duration-300">
                    <div className="mb-4">
                      {/* {product.img && product.productImage.map((image, ind) => ( */}
                      <Link key={index} to={`/output-product/vegetables/${product.slug}`}>
                        <div className='flex flex-col items-center mx-2' style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}>
                          <img src={product.img} alt='product-img' className='w-32 h-32 object-cover' />
                          <p className='mt-2'>{product.category}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Groceries  */}
            <div>
              <div className='flex flex-row justify-between lg:mr-12 lg:ml-12 ml-3 mr-3 mt-5' >
                <h2>All Groceries</h2>
                <p>See more..</p>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {groceriesCategory.map((product, index) => (
                  <div key={index} className="border border-gray-300 p-4 rounded-lg hover:shadow-2xl transition duration-300">
                    <div className="mb-4">
                      {/* {product.img && product.productImage.map((image, ind) => ( */}
                      <Link key={index} to={`/output-product/groceries/${product.slug}`}>
                        <div className='flex flex-col items-center mx-2' style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}>
                          <img src={product.img} alt='product-img' className='w-32 h-32 object-cover' />
                          <p className='mt-2'>{product.category}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  )
}

export default OutputProducts