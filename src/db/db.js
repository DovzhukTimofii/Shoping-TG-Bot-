import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
    return [
        { title: "Pizza", price: 17.99, Image: pizzaImg},
        { title: "Burger", price: 15, Image: burgerImg},
        { title: "Coca-Cola", price: 3.5, Image: cocaImg},
        { title: "Salad", price: 13.99, Image: saladImg},
        { title: "Bottle of water", price: 2.5, Image: waterImg},
        { title: "Ice Cream", price: 0.99, Image: iceCreamImg},
        { title: "Kebab", price: 2.99, Image: kebabImg},
    ];
}