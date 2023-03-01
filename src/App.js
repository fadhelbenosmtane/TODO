import React from "react"
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoLIst";



function App() {
  
  

  const [inputText, setInputText] = React.useState("");
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [status, setStatus] = React.useState("all")
  const [filterTodos, setFilteredTodos] = React.useState([]);


// React.useEffect(()=>{
//   // getLocalTodos()
   
//   // console.log(todoLocal)
// },[])

//NOTES//////////////////////////////
    // const [notes, setNotes] = React.useState([])
    // const [currentNoteId, setCurrentNoteId] = React.useState(
    //   (notes[0] && notes[0].id) || ""
    // )
    
//////////////////////////////////////

  React.useEffect(()=>{
    // console.log("hey")
    filterHandler();
    saveLocalTodos();
    // console.log()
  }, [todos ,status])


  const saveLocalTodos = ()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
  
  }

  // const getLocalTodos = ()=>{
  //   if(localStorage.getItem("todos") === null){
  //     localStorage.setItem("todos", JSON.stringify([]))
  //   }else{
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     console.log(todoLocal)
  //     setTodos(todoLocal)
  //   }
  // }


  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false ))  
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  }





/////////////////////////////////////////////////////
  
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
///////////////////////////////////////////////////

  const [quote, setquote] = React.useState("");

const generatequote = ()=>{
  // e.preventDefault();
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let random = Math.ceil(Math.random() * 1643)
      // console.log(data[0].text);
      setquote(data[random].text)
      // return (data[0].text);
    });

}
 React.useEffect(()=>{
  // e.preventdefault()
   generatequote()
 },[])


 

  return (
    
        <div className="App">  
          <header>
            <h1>Hello React</h1>
          </header>
          <h1 className="quote">{quote}</h1>
          <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}  setStatus={setStatus}/>
          <TodoList  filterTodos={filterTodos}   todos={todos} setTodos={setTodos} />
        </div>
    
      
      
      
     


  );
}

export default App;
