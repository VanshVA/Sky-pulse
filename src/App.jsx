import WeatherApp from "./weatherApp"
import "./app.css"

function App() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center w-100 h-100">

  <div className="d-flex flex-column justify-content-center align-items-center">
    <div className="btn-group my-5">
      <WeatherApp />
    </div>
  </div>
</div>
    </>
  )
}

export default App
