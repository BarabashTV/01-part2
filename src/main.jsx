import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/*axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App notes={notes} />
  );
});*/

/*const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];*/

/*const result = notes.map((note) => note.id);*/
/*const result = notes.map((note) => note.content);*/
/*const result = notes.map((note, i) => note.content);
console.log(result);*/

/*ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);

axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log(notes);
});

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);*/
