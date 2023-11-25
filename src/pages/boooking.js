import { useReducer, useState } from "react";
import heroImage from "../assets/images/banner.jpg"
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

export function Booking(){
    const [form , setForm] = useState({})
    let onchange = (key, val) => {
        setForm((old) => {
            let state = { ...old };
            state[key] = val
            return state;
        }) }
    let availableTime = [["18:00", "19:00", "20:00"], ["17:00", "19:00", "20:00"], ["18:00", "19:00", "20:00", "21:22", "10:50"]]
    
    const reducer = (state, controller)  => {
        return [...availableTime]
    }
    const [availableTimes, dispatch] = useReducer(reducer, availableTime[0])
    
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
                    <button className="reserveButton"> <Link to={"/"} > Order</Link></button>
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
                <input required type="date" id="res-date" onChange ={ (event) => {
                    onchange("date", event.target.value)
                    dispatch(event.target.value)
                }} />
                <label htmlForfor="res-time">Choose time</label>
                <select required id="res-time " onChange={(event) => {
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
                <input required type="number" placeholder="1" min="1" max="10" id="guests" onChange ={ (event) => {
                    onchange("numberOfQuests", event.target.value)
                }} />
                <label htmlFor="occasion">Occasion</label>
                <select required id="occasion" onChange={(event) => {
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