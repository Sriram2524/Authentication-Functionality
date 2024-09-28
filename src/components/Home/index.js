// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-con">
    <Header />
    <h1 className="homr-heading">Home Route</h1>
    <LogoutButton />
  </div>
)
export default Home