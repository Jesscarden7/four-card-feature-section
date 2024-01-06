import "./App.css";
import Card from "./Components/Card";
import team from "./icons/icon-team-builder.svg";
import calculator from "./icons/icon-calculator.svg";
import karma from "./icons/icon-karma.svg";
import supervisor from "./icons/icon-supervisor.svg";

function App() {
  const cards = [
    {
      title: "Supervisor",
      content: "Monitor activity to identify project roadblocks",
      image: supervisor,
      borderColor: "hsl(180, 62%, 55%)",
    },
    {
      title: "Team Builder",
      content:
        "Scans our talent network to create the optiman team for your project",
      image: team,
      borderColor: "hsl(0, 78%, 62%)",
    },
    {
      title: "Karma",
      content: "Regularly evaluates our talent to ensure quality",
      image: karma,
      borderColor: "hsl(34, 97%, 64%)",
    },
    {
      title: "Calculator",
      content:
        "Uses data from past projects to provide better delivery estimates",
      image: calculator,
      borderColor: "hsl(212, 86%, 64%)",
    },
    
    
  ];

  return (
    <div className='MainContainer'>
      <header className='Title'>
        <h4>Reliable, efficient delivery</h4>
        <h3>Powered by Technology</h3>
        <p>
          Our Artificial Inteligence powered tools use millions of project data <br /> points to ensure that your project is succesful
        </p>
      </header>
      <div className='CardsContainer'>
        <div className='Card'>
            <Card card= {cards[0]}/>
        </div>
        <div className='Card'>
            <Card card= {cards[1]}/>
            <Card card= {cards[2]}/>
        </div>
        <div className='Card'>
            <Card card= {cards[3]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
