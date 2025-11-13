import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
     <Header>  </Header>
     <div className="content flex">
      <Sidebar> </Sidebar>
      <Main> </Main>
     </div>
    </div>
  )
}

export default App
