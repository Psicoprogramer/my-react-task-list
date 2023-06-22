import './foter.css'
export function Foter ({value}) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4> Prueba técnica de React ⚛️ － {value} <span>@psicoDevp</span></h4>
      <h5>Listas de todos ⚛️</h5>
    </footer>
  )
}