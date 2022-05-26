import './App.css';
import Banner from './components/Banner';
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
function App() {
    return (
      <div>
    <Banner />
    <div >
    <div style={{width:"50%",float:"left", backgroundColor:"green",borderColor:"white",borderSize:2}}><Cart/></div>
    <div ><ShoppingList/></div>
    </div>
    </div>  )
}

export default App