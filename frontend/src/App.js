import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'
import WorkScreen from './Screens/WorkScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import UserListScreen from './Screens/UserListScreen'
import UserEditScreen from './Screens/UserEditScreen'
import ContactScreen from './Screens/ContactScreen'
import AboutScreen from './Screens/AboutScreen'
import BlogScreen from './Screens/BlogScreen'
import WorkshopScreen from './Screens/WorkshopScreen'
import PageNotFound from './Screens/PageNotFound'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/work/:id' component={WorkScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/contact' component={ContactScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/blogs' component={BlogScreen} />
            <Route component={PageNotFound} />
            <Route path='/workshop' component={WorkshopScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
