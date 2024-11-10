import React from "react";
import "./ButtonMenu.css";
import { useEffect } from "react";


const ButtonMenu = () => {
    const [activeContentIndex, setActiveContentIndex] = React.useState(0);

    const content = [
      [
        "React je extrémně populární",
        "Umožňuje snadné vytváření složitých, interaktivních uživatelských rozhraní",
        "Je silný a flexibilní",
        "Má velmi aktivní a všestranný ekosystém"
      ],
      [
        "Komponenty, JSX & Props",
        "State (stav)",
        "Hooky (např. useEffect())",
        "Dynamické vykreslování"
      ],
      [
        "Oficiální webová stránka (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (tvorba nativních mobilních aplikací pomocí Reactu)"
      ],
      [
        "Vanilla JavaScript vyžaduje imperativní programování",
        "Imperativní programování: Definujete všechny kroky potřebné k dosažení výsledku",
        "React naopak využívá deklarativní programování",
        "S Reactem definujete cíl a React zjistí, jak se tam dostat"
      ],
      [
        "React je knihovna JavaScriptu pro vytváření uživatelských rozhraní",
        "React může být použit jako základ při vývoji jednostránkových nebo mobilních aplikací",
        "Je používán pro práci s prezentační vrstvou webových a mobilních aplikací",
        "React nám umožňuje vytvářet znovupoužitelné UI komponenty"
      ]
      
      ];

      useEffect(() => {
        const randomIndex = Math.floor(Math.random() * content.length);
        setActiveContentIndex(randomIndex);
      }, [content.length]);    

      
  return (<div className="Button-component">

    <div id="tabs">
      <menu>
        <button
          className={activeContentIndex === 0 ? "active" : ""}
          onClick={() => setActiveContentIndex(0)}
        >
          React Fakta 1
        </button>
        <button
          className={activeContentIndex === 1 ? "active" : ""}
          onClick={() => setActiveContentIndex(1)}
        >
          React Fakta 2
        </button>
        <button
          className={activeContentIndex === 2 ? "active" : ""}
          onClick={() => setActiveContentIndex(2)}
        >
          React Fakta 3
        </button>
        <button
          className={activeContentIndex === 3 ? "active" : ""}
          onClick={() => setActiveContentIndex(3)}
        >
          React Fakta 4
        </button>
      </menu>
      <div id="tab-content">
        <ul>
          {content[activeContentIndex].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ButtonMenu