import './App.scss';
import Button from './components/form/button/button';
import Cards from './components/layout/cards/cards';
import Form from './components/form/form/form';
import Navbar from './components/layout/navbar/navbar';
import Footer from './components/layout/footer/footer';

import './icons';


const App = () => {
  const cardTable = [
    {
      icon: ["fab", "apple"],
      text: "Apple",
    },
    {
      icon: ["fab", "microsoft"],
      text: "Microsoft",
    },
    {
      icon: ["fab", "github"],
      text: "Github",
    },
    {
      icon: ["fab", "google"],
      text: "Google",
    },
    {
      icon: ["fab", "amazon"],
      text: "Amazon",
    },
    {
      icon: ["fab", "audible"],
      text: "Audible",
    },
    {
      icon: ["fab", "airbnb"],
      text: "Airbnb",
    },
  ];

  return (
    <div className="App">
      <header className="App-header" id="home">

        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <div className="App-banner">
          <div className="App-container">
            <h1>Bienvenue chez Side</h1>

            <h2>Les plus grands talents à porter de main</h2>

            <Button background="#2056C2" color="#ffffff" text="Inscription" href="#signup" />
            <Button background="#ffffff" color="#000000" text="Découvrir" href="#discover" />
          </div>
        </div>

        {/* Sponsors */}
        <div className="App-container" id="discover">
          <h2 className="App-title">Ils nous font confiance</h2>
          <Cards cards={cardTable} />
        </div>

        {/* Demo 1 */}
        <div className="App-grid-two-columns-reverse">
          <div className="App-interface" />

          <div className="App-title">
            <h2>Une interface pensée pour vous faire gagner du temps au quotidien.</h2>
          </div>
        </div>

        {/* Demo 2 */}
        <div className="App-grid-two-columns">
          <div className="App-title">
            <h2>Un produit d'exception créé par une équipe d'exception.</h2>
          </div>

          <div className="App-dashboard" />
        </div>


        {/* Form */}
        <Form />

        {/* Footer */}
        <Footer />

      </header>
    </div >
  );
}

export default App;
