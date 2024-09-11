import './TareaStyles.css'

export default function AgregarTarea() {

    return (
        <li className='li-tarea'>
            <div className='tarea'>
                <input type="checkbox" className='input-checkbox' />
                <span className='text-input'>TAREA NRO </span>
            </div>
            <button className="button-48" role="button"><span className="text">DELETE</span></button>
        </li>)
}