import "../styles/Banner.css"
import logo from "../assets/logo.png"

function Banner() {
    const title = "La maison jungle"

    return <div className="imj-banner">
        <img src={logo} alt="la maison jungle" className="imj-logo" />
        <h1 className="imj-title">{title}</h1>
    </div>
}

export default Banner;