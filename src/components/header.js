import logo from "../assets/logor.png"
import { NavBar } from "./nav"
export function Header() {

    return(
        <header className="header">
            <section className="logo">
                <img width="100%" src={logo} alt="logo" />
            </section>

            <section className="nav">
            <NavBar/>
            </section>
        </header>
    )
}