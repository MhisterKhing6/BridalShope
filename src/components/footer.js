import Logo from "../assets/logor.png"
export function Footer() {
    return (
        <section className="footer">
            <article className="footerelem">
                <img src={Logo} alt="logo" />
            </article>
            <article className="footerelem">
                <h1>Navigation</h1>
                <article>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Menu
                        </li>
                        <li>
                            Reservation
                        </li>
                        <li> Onlie Order</li>
                        <li>Login</li>
                    </ul>
                </article>
            </article>

            <article className="footerelem">
                <h1>Contact</h1>
                <article>
                    <ul>
                        <li> Phone Number</li>
                        <li>Email</li>
                        <li>Address</li>
                    </ul>
                </article>
            </article>
            <article className="footerelem">
                <h1>Social Media</h1>
                <article>
                    <ul>
                        <li>Instagram</li>
                        <li>Linkln</li>
                        <li>Pinterest</li>
                    </ul>
                </article>
            </article>
        </section>
    )
}