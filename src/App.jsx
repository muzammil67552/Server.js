import { useEffect, useState } from 'react';
import './App.css';
import ToDo from './component/ToDo';
import axios from 'axios';
import { BaseURL } from './utilis/api';

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  // Fetch ToDos from the server when the component mounts
  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const res = await axios.get(`${BaseURL}/get`);
        setToDos(res.data); // Set the fetched data to the state
      } catch (err) {
        console.log(err);
      }
    };

    fetchToDos();
  }, []);

  // Function to save a new ToDo
  const saveToDo = async () => {
    try {
      const res = await axios.post(`${BaseURL}/save`, { toDo: input });
      setToDos((prevToDos) => [...prevToDos, res.data]); // Add the new ToDo to the state
      setInput(''); // Clear the input field
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">To Do App</h1>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-grow border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input} 
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 transition duration-200"
              onClick={saveToDo}
            >
              ADD
            </button>
          </div>
          <div>
            {toDos.map(el => <ToDo key={el._id} text={el.toDo} />)}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
