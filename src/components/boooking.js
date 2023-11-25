import { useState } from "react";
import heroImage from "../assets/images/banner.jpg"
import { Footer } from "./footer";

export function Booking(){
    const [form , setForm] = useState({})
    let onchange = (key, val) => {
        setForm((old) => {
            let state = { ...old };
            state[key] = val
            return state;
        })
    }
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
            <section className="forms"> 
            <form  onSubmit={(ev) =>{ ev.preventDefault();}}>
                <h1>Reserve A Table</h1>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange ={ (event) => {
                    onchange("date", event.target.value)
                }} />
                <label htmlForfor="res-time">Choose time</label>
                <select id="res-time " onChange={(event) => {
                   onchange("time", event.target.value)
                }}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange ={ (event) => {
                    onchange("numberOfQuests", event.target.value)
                }} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(event) => {
                    onchange("occasion", event.target.value)
                }}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
                </form>
            </section>
            <Footer />
        </section>
    )
}