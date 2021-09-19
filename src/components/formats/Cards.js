import React from "react";
import SingleCard from "./SingleCard";
import "../styles/Cards.css";

function Cards(props) {
  return (
    <div className="cards" id="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <SingleCard
              src="../../images/splitpeasprojectgraphic.png"
              text="A full stack grocery shopping mobile app targetted toward 
              university students to help them split trips and bills within a group. 
              SplitPeas: Save Food. Save Money. Save Time."
              label="SplitPeas: UX Design, PM"
              path="https://bit.ly/3Ctr8xQ"
            />
            <SingleCard
              src="../../images/sportipawsprojectgraphic.png"
              text="A specialized app to track physical activity during dog walks. Case study 
              completed with User Research, Competitive Analysis, information architecture and more
              to add in the creation of low and high fidelity prototypes."
              label="SportiPaws: UX Design Case Study"
              path="https://www.figma.com/file/AZGOEWi01akZdfRGZbNLHn/Dog-Walking-App"
            />
          </ul>
          <ul className="cards__items">
            <SingleCard
              src="../../images/extendyourhorizonsprojectgraphic.png"
              text="A practical chrome extension consisting of four features: a Pomodoro timer,
                a to-do list, a customizable website blocker, and an inspirational quote generator. 
                Goal is to help students with productivity, etticiency, and mental wellness."
              label="Extend Your Horizons: Design, Development, PM"
              path="https://devpost.com/software/extend-your-horizons"
            />
            <SingleCard
              src="../../images/moneytreeprojectgraphic.png"
              text="A gamefied, gardening-themed app to aid simple financial management, 
                promote financial literacy, and raise awareness about the environment for children. 
                Created to make personal finance more accessible, easy and engaging."
              label="MoneyTree: UX Design, PM"
              path="https://devpost.com/software/money-tree-personal-finance-management-for-all-youth"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
