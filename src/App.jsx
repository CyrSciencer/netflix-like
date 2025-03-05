import Category from "./components/Category"
import './App.css'
import logo from "./img/logo-netflix.webp"

const App =()=>{ 
return(<section className="body-box">
<header><div><img src= {logo} alt="not found" /></div></header>
<main>
    <Category/>
</main>
</section>)}
export default App;