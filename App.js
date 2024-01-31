import './App.css'
let loggedIn = false;
let isAdmin= true;

function App() {
  return (
    <>
    <Header></Header>
    {
      isAdmin && <Admin> </Admin>
    }
      </>
    
  )
}

function Header(){
  return (
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      
      {
        loggedIn ? (<li>Logout</li>) : (<li>Login</li>)
      }
    </ul>
  )
}
function Admin(){
  return(
    <>
    <h1>This is Admin</h1>
    <h2>This site is responsible for Admin</h2>
    </>
  )
}
export default App
