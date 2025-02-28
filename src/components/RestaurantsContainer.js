import { restaurants } from "../data/data.js"
import Restaurant from "./Restaurant"
export default function RestaurantsContainer(props) {
    return <div className="restaurantContainer">
        {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
}
