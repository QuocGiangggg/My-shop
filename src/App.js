import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routers } from './rooutes'
import DefaultComponent from './components/DefaultComponents/DefaultComponent'

function App() {
 
  return (
    <Router>
      <Routes>
        {routers.map((route) =>{
          const Page = route.page
          const Layout = route.isShowHeader ? DefaultComponent: Fragment
          return (
             <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }
            />

          )
        } )}
      </Routes>
    </Router>
    
  )
}
export default App