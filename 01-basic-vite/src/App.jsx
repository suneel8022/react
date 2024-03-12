import Nice from "./Nice"

function App() {
  const name = 'Suneel'
  return(
    <>
      {/* can only return one element in jsx :( so wrap it in a div or <></> */}
      <h1>Vite React App {2+2}</h1>
      <h1>Vite React App {name} </h1>   
      <Nice/>
    </>
  )
}

export default App
