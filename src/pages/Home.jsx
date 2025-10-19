import { useState } from "react";
import BoxList from "../components/BoxList"
import CategoryFilter from "../components/CategoryFilter"
import { mockBoxes } from "../mockBoxes";

export default function Home(){
    const categories = [...new Set(mockBoxes.map(box => box.category))]
    const [selectedCategories, setSelectedCategories] = useState(categories)
    return(
        <div className="container">
            <h1>Nos Magasins virtuels</h1>
            <BoxList />
        </div>
    )
}