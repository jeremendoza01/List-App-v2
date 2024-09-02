import './styles.css'
import Boton from '../Boton/Boton.jsx'

export default function AgregarTarea() {
  return (
    <div className="agregar_tarea">
      <form>
        <input
          type="text"
          className='input-add'
          name='description'
          placeholder='Agregar una Tarea: '
        />
        <Boton />
      </form>
    </div>

  )
}
