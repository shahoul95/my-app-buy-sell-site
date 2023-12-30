import houseOne from "./assets/image/pexels-photo-106399.jpg"
import houseTwo from "./assets/image/pexels-photo-1918291.jpg"
import houseThird from "./assets/image/pexels-photo-2119713.jpg"
import housefourthy from "./assets/image/pexels-photo-5825527.jpg"
import IHomeBuyProps from "./interfaces/IHomeBuyProps"

export const buyHomeDetails: IHomeBuyProps[] = [
    { id: 1, city: "Villepinte", imageSrc: houseOne, category: "Maison", surface: 46, price: 150000, numberPiece: 3 },
    { id: 2, city: "Paris", imageSrc: houseTwo, category: "Maison", surface: 90, price: 200000, numberPiece: 6 },
    { id: 3, city: "Nantes", imageSrc: houseThird, category: "Maison", surface: 100, price: 100000, numberPiece: 10 },
    { id: 4, city: "Taverny", imageSrc: housefourthy, category: "Maison", surface: 60, price: 300000, numberPiece: 3 },
]