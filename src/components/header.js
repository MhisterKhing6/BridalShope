import logo from "../assets/logor.png"
import { NavBar } from "./nav"
export function Header() {

    return(
        <header>
            <section>
                <img src={logo} alt="logo" />
            </section>
            <section>
            <NavBar />
            </section>
        </header>
    )
}