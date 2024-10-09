import { useState } from "react";
import data from "./data";
const App = () => {
  const [resource , setResource] = useState(data)
  const removeData = () => {
    setResource([])
  }
  return (
    <div>
      <h2>Birthday Reminder - Starter</h2>
      <h2>Buday Today {resource.length}</h2>
        {resource.map((people) => {
          return(
            <div key={people.id}>
            <h1>Name: {people.name}</h1>
            <h1>Age: {people.age}</h1>
            <img src={people.image} alt="error fetching img" />
            </div>
          )

        }
        )}
        <button onClick={removeData}>Remove Data</button>
     
    </div>
  );
};
export default App;
