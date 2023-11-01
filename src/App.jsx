import Card from "./Components/Card"
import Form from "./Components/Form"
import {container, title} from "./Styles/App.module.css"
function App() {


  return (
    <>
    <div className={container}>
      <h1 className={title}>Carga de estudiantes</h1>
      <Form/>
    </div>
    </>
  )
}

export default App
