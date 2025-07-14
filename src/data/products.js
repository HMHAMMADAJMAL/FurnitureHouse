import bed1 from '../assets/images/bed.jpeg';
import bed2 from '../assets/images/bedS.jpeg';
import sofa1 from '../assets/images/sofa.jpeg';
import chair1 from '../assets/images/chair.jpeg';
import sofa2 from '../assets/images/SofaSet/Sofa2.jpeg';
import sofa3 from '../assets/images/SofaSet/Sofa3.jpeg';
import sofa4 from '../assets/images/SofaSet/Sofa4.jpeg';
import sofa5 from '../assets/images/SofaSet/Sofa5.jpeg';
import sofa6 from '../assets/images/SofaSet/Sofa6.jpeg';
import sofa7 from '../assets/images/SofaSet/Sofa7.jpeg';
import sofa8 from '../assets/images/SofaSet/Sofa8.jpeg';
import sofa9 from '../assets/images/SofaSet/Sofa9.jpeg';
import sofa10 from '../assets/images/SofaSet/Sofa10.jpeg';
import sofa11 from '../assets/images/SofaSet/Sofa11.jpeg';
import sofa12 from '../assets/images/SofaSet/Sofa12.jpeg';
import table1 from '../assets/images/table.jpeg';
import table6 from '../assets/images/Table/Table1.jpeg';
import table7 from '../assets/images/Table/Table2.jpeg';
import table8 from '../assets/images/Table/Table3.jpeg';
import table9 from '../assets/images/Table/Table4.jpeg';
import table10 from '../assets/images/Table/Table5.jpeg';
import table11 from '../assets/images/Table/Table6.jpeg';
import table12 from '../assets/images/Table/Table7.jpeg';
import table13 from '../assets/images/Table/Table8.jpeg';
import table14 from '../assets/images/Table/Table9.jpeg';
import table15 from '../assets/images/Table/Table10.jpeg';
import table16 from '../assets/images/Table/Table11.jpeg';


const mockProducts = [
  {
    id: 1,
    name: "Modern King Bed",
    category: "Beds",
    image: bed1,
    price: 699,
    rating: 5,
    reviews: 12,
    isNew: true,
    discount: 10
  },
  {
    id: 2,
    name: "Luxury Sofa Set",
    category: "Sofa Sets",
    image: sofa1,
    price: 899,
    rating: 4,
    reviews: 30,
    isNew: false,
    discount: 15
  },
  {
    id: 3,
    name: "Elegant Chair",
    category: "Chairs",
    image: chair1,
    price: 299,
    rating: 3,
    reviews: 21,
    isNew: true,
    discount: 5
  },
  {
    id: 4,
    name: "Dining Table",
    category: "Tables & Dining",
    image: table1,
    price: 599,
    rating: 5,
    reviews: 18,
    isNew: false,
    discount: null
  },
  {
    id: 10,
    name: "Luxury Marble Table",
    category: "Tables & Dining",
    image: table10,
    price: 1199,
    rating: 5,
    reviews: 55,
    isNew: true,
    discount: 25
  },
  {
    id: 5,
    name: "Modern King Bed",
    category: "Beds",
    image: bed2,
    price: 699,
    rating: 5,
    reviews: 12,
    isNew: true,
    discount: 10
  },
  {
    id: 6,
    name: "Elegant Dining Table",
    category: "Tables & Dining",
    image: table6,
    price: 899,
    rating: 5,
    reviews: 42,
    isNew: true,
    discount: 15
  },
  {
    id: 7,
    name: "Classic Oak Table",
    category: "Tables & Dining",
    image: table7,
    price: 749,
    rating: 4,
    reviews: 30,
    isNew: false,
    discount: 10
  },
  {
    id: 8,
    name: "Rustic Farmhouse Table",
    category: "Tables & Dining",
    image: table8,
    price: 679,
    rating: 4,
    reviews: 18,
    isNew: true,
    discount: 20
  },
  {
    id: 9,
    name: "Compact Breakfast Table",
    category: "Tables & Dining",
    image: table9,
    price: 499,
    rating: 3,
    reviews: 12,
    isNew: false,
    discount: 5
  },
  {
    id: 11,
    name: "Foldable Dining Table",
    category: "Tables & Dining",
    image: table11,
    price: 399,
    rating: 3,
    reviews: 9,
    isNew: false,
    discount: 8
  },
  {
    id: 12,
    name: "Industrial Wood Table",
    category: "Tables & Dining",
    image: table12,
    price: 799,
    rating: 4,
    reviews: 21,
    isNew: true,
    discount: 12
  },
  {
    id: 13,
    name: "Minimalist Black Table",
    category: "Tables & Dining",
    image: table13,
    price: 649,
    rating: 4,
    reviews: 17,
    isNew: false,
    discount: 0
  },
  {
    id: 14,
    name: "Contemporary Glass Table",
    category: "Tables & Dining",
    image: table14,
    price: 949,
    rating: 5,
    reviews: 28,
    isNew: true,
    discount: 18
  },
  {
    id: 15,
    name: "Extendable Family Table",
    category: "Tables & Dining",
    image: table15,
    price: 1099,
    rating: 5,
    reviews: 33,
    isNew: false,
    discount: 22
  },
  {
    id: 16,
    name: "Walnut Wood Table",
    category: "Tables & Dining",
    image: table16,
    price: 889,
    rating: 4,
    reviews: 26,
    isNew: true,
    discount: 10
  },
  {
    id: 17,
    name: "Two-Tone Designer Table",
    category: "Tables & Dining",
    image: table13,
    price: 979,
    rating: 5,
    reviews: 41,
    isNew: false,
    discount: 20
  },


  {
    id: 23,
    name: "Modern 3-Seater Sofa",
    category: "Sofa Sets",
    image: sofa2,
    price: 899,
    rating: 4,
    reviews: 22,
    isNew: false,
    discount: 10
  },
 
  {
    id: 25,
    name: "Minimalist Grey Sofa",
    category: "Sofa Sets",
    image: sofa4,
    price: 799,
    rating: 3,
    reviews: 12,
    isNew: false,
    discount: 5
  },
  {
    id: 26,
    name: "Recliner Sofa Duo",
    category: "Sofa Sets",
    image: sofa5,
    price: 1199,
    rating: 5,
    reviews: 45,
    isNew: true,
    discount: 25
  },
  {
    id: 27,
    name: "Scandinavian Sofa",
    category: "Sofa Sets",
    image: sofa6,
    price: 849,
    rating: 4,
    reviews: 18,
    isNew: true,
    discount: 12
  },
  {
    id: 28,
    name: "Cozy Fabric Sofa",
    category: "Sofa Sets",
    image: sofa7,
    price: 699,
    rating: 3,
    reviews: 10,
    isNew: false,
    discount: 8
  },
  {
    id: 29,
    name: "Elegant Tufted Sofa",
    category: "Sofa Sets",
    image: sofa8,
    price: 949,
    rating: 5,
    reviews: 38,
    isNew: true,
    discount: 18
  },
  {
    id: 30,
    name: "Contemporary Sofa",
    category: "Sofa Sets",
    image: sofa9,
    price: 999,
    rating: 4,
    reviews: 25,
    isNew: false,
    discount: 10
  },
  {
    id: 31,
    name: "Vintage Leather Sofa",
    category: "Sofa Sets",
    image: sofa10,
    price: 1349,
    rating: 5,
    reviews: 50,
    isNew: true,
    discount: 30
  } , {

    id:66,
    name: "Modern 3-Seater Sofa",
    category: "Sofa Sets",
    image: sofa2,
    price: 899,
    rating: 4,
    reviews: 22,
    isNew: false,
    discount: 10
  },
  {
    id: 22,
    name: "Luxury L-Shaped Sofa",
    category: "Sofa Sets",
    image: sofa1,
    price: 1099,
    rating: 5,
    reviews: 40,
    isNew: true,
    discount: 20
  },

];

export default mockProducts;
