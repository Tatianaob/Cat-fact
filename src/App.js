import './App.css';
import Axios from "axios";
import {useState} from "react";

function App() {
  // const [catFact, setCatFact] = useState("");
  // const fetchCatFact = () =>  {
  //   Axios.get("https://catfact.ninja/fact").then((res)=> {
  //   setCatFact(res.data.fact);
  // });
  // }
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);

  // const [name, setName] =useState("");
  // const [predictedAge, setPredictedAge] = useState(null);

  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
  //     setPredictedAge(res.data);
  //   });
  // };
    const [generatedExcuse, setExcuse] = useState("");


    const fetchData = (excuse) => {
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
        setExcuse(res.data[0].excuse);
      }
      )
    }




  return (
    <div className="App">

      {/* <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p> {catFact}</p> */}

      {/* <input placeholder='write a name...' 
      onChange={(event) => { setName(event.target.value);
      }}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1> Name: {predictedAge?.name} </h1>
      <h1> Predicted age: {predictedAge?.age} </h1>
      <h1> Count: {predictedAge?.count} </h1> */}

      <h1> Generate an excuse </h1>
      <button onClick={() => fetchData("party")} > Party </button>
      <button onClick={() => fetchData("family")} > Family </button>
      <button onClick={() => fetchData("office")} > Office </button>
      <p>{generatedExcuse}</p>



    </div>
  );
}

export default App;
