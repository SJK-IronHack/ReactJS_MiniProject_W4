import { useState } from "react"



const Listing = ({ listingData }) => {
    const [items, setItems] = useState(listingData)
    return (
        <div className="listing">
            <h1>Listing</h1>
            <ul>
                {items.map((i) => {
                    <h1>{i.total_count}</h1>
})}
            </ul>
        </div>
    )
}

export default Listing