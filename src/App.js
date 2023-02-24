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
  const [name, setName] =useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">

      {/* <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p> {catFact}</p> */}
      <input placeholder='write a name...' 
      onChange={(event) => { setName(event.target.value);
      }}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1> Name: {predictedAge?.name} </h1>
      <h1> Predicted age: {predictedAge?.age} </h1>
      <h1> Count: {predictedAge?.count} </h1>
    </div>
  );
}

export default App;
