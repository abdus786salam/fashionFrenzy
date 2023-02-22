import './App.css';
import { useSelector } from 'react-redux'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AllRoutes from './HOF/AllRoutes';
import DashboadNavbar from './pages/dashboard/DashboadNavbar';

function App() {
  const {user} = useSelector(store=>store.authReducer)
  return (
    <>
    {user?.user_type==='admin'?<DashboadNavbar />: <Navbar />}
    
     <AllRoutes />
     <Footer />
    </>
  );
}

export default App;
