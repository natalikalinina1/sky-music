import Bar from '../components/Bar'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar/Sidebar'

function Main() {
  return (
    <div className="wrapper">
         <div className="container">
          <main className="main">
              <Nav/>
              <CenterBlock/>
              <Sidebar/>
          </main>
          <Bar/>
        </div>
    </div>
  )
}

export default Main