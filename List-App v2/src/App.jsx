
import './App.css'
import AgregarTarea from './components/AgregarTarea/AgregarTarea'
import Tarea from './components/Tarea/Tarea'
import TareaFinish from './components/Tarea/TareaFinish'


function App() {


  return (
    <>

      <div className='div-main'>
        <h1>LISTA DE TAREAS</h1>
        <div className='div-input'>
          <AgregarTarea />
        </div>

        <ul className='ul-lista'>
          <Tarea />
          <TareaFinish />
          <Tarea />
        </ul>

      </div>
    </>
  )
}

export default App
