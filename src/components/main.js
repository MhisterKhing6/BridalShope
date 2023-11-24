import heroImage from "../assets/images/banner.jpg"
import { FaStar } from "react-icons/fa";


export function Main(){
    let dishes = [{"name": "Grek salad", "src": require("../assets/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg"), description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
                    {"name": "Bruschetta", "src": require("../assets/images/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg"), description:"Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."},
                    {"name": "Lemon Cake", "src": require("../assets/images/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg"), description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    ]
    let ratings = [{"name": "Kingsley", "comment": "the salad is just amazing", src :require("../assets/testimonials/jeff.png")},
                    {"name": "Abigail", "comment": "I really enjoyed the place", src :require("../assets/testimonials/monica.png")},
                    {"name": "Richard", "comment": "The atmosphere says everything", src :require("../assets/testimonials/kingsley.png")},
                    {"name": "Rose", "comment": "Just try the Lemon cake, such a masterpiece", src :require("../assets/testimonials/rose.png")}                  
]
    return (
        <section className="main">
            <section className="heroWrapper">
            <section className="hero">
                <article>
                    <h2>Littile Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned <br/>
                       Medditarranean Restauran <br />
                       focused on tradition recipe <br />
                       served with modern twist
                    </p>
                    <button className="reserveButton"> Reserve a table</button>
                </article>
            </section>
            <section className="heroImageWrapper">
                <img src={heroImage} alt="chef" className="heroImage"/>
            </section>
            </section>
            <section className="specials">
                <div className="specialTitle">
                    <h2>Specials</h2>
                    <button>Order Online</button>
                </div>
                <section className="dishes">
                    {dishes.map(dish => {
                        return (
                        <article key={dish.name} className="dishCard">
                        <img src={dish.src} />
                        <aside>
                            <h2>{dish.name}</h2>
                            <p>
                               {dish.description}
                            </p>
                            <h4>Order delivery</h4>
                        </aside>
                    </article>
                        )
                    })}
                    
                </section>
            </section>
            <section className="testimonials">
                <h2>TESTIMONIALS</h2>
                <article>
                    {ratings.map((test) => {
                        return (
                            <section key={test.name}>
                                <div className="ratings">
                                    <FaStar className="star"/>
                                    <FaStar className="star"/>
                                    <FaStar className="star"/>
                                    <FaStar className="star"/>
                                </div>
                                <img className="testImage" src={test.src} />
                                <h3>{test.name}</h3>
                                <p>
                                    {test.comment}
                                </p>
                            </section>
                        )
                    })}
                </article>
            </section>
    
        </section>
    )
}