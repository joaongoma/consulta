import "./App.css";

function App () {

    const planets= [

        {name: "Mars", isGasplanet: false},

        {name: "Earth", isGasplanet: false},

        {name: "jupiter", isGasplanet: true},

        {name: "Venus", isGasplanet: false},

        {name: "Neptune", isGasplanet: false},

        {name: "Uranus", isGasplanet: true},

    ];

return (
    <div className= "App">

        {planets.map ((planet, key) =>

        !planet.isGasplanet && <h1> {planet.name} </h1>
        
        )}

    </div>

    );

}

export default App;

//   ou 

   // return (

    //<div className= "App">

    // {planets.map ((planet,key) => {
        
       // if (planet.isGasplanet) return <h1> {planet.name} </h1>;

    //})}

   // </div>

   // );

// }

//export default App;

