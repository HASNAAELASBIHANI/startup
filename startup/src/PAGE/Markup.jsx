import { BrowserRouter , Routes , Route} from "react-router-dom"
import Layoute from "../component/Layoute"
import Home from "./Home"
import About from "./About"
import Blog from "./Blog"
import Support from "./Support"
import Pages from "./Pages"


function Markup() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoute/>}>

        <Route index element={ < Home/>} />
        <Route path="/about" element={ < About/>} />
        <Route path="/blog" element={ < Blog/>} />
        <Route path="/support" element={ < Support/>} />
        <Route path="/pages" element={ < Pages/>} />


        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Markup
