import { Link } from "react-router-dom";
import "../components/StaticMenu.css";
import api from "../img/api.png";
import mk from "../img/MK_logo.png";
import engeto from "../img/engeto.png";

const StaticMenuData = [
    {
        id: 1,
        image: api,
        title: "API Formulář",
        description: "Využití API a formuláře.",
        link: "/ApiForm",
    },
    {
        id: 2,
        image: engeto,
        title: "Engeto",
        description: "Kdo nic nedělá, nic se nenaučí.",
        link: "https://engeto.cz",
    },
    {
        id: 3,
        image: mk,
        title: "Martin Kalkuš",
        description: "Co aktuálně dělám.",
        link: "https://www.baustav.cz/cs/"
    },
    {
        id: 3,
        image: mk,
        title: "LinkedIn",
        description: "Kdo je ten student?",
        link: "https://www.linkedin.com/in/martin-kalkuš-a7b02921b"
    },
    ]

const StaticMenu = () => {
  return (
    <div className="static-menu">
        {StaticMenuData.map((item) => (
            <div key={item.id} className="static-menu-item">
            <img src={item.image} alt={item.title} />
            <h4>
            {item.link ? (
                        item.link.startsWith("http") ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        ) : (
                            <Link to={item.link}>{item.title}</Link>
                        )
                    ) : (
                        item.title
                    )}
            </h4>
            <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default StaticMenu