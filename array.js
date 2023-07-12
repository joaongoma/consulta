import "./App.css";

function App() {

    const name= [ "João", "Pedro", "Ana", "Ruben" ];

    return (

        <div className= "App">

            {name.map ((name, key) => {

                return <h1 key={key}> {name} </h1>;
            })}

        </div>
    );
}
export default App;
