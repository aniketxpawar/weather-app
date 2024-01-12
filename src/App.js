import './App.css';
import { useEffect,useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import toast,{Toaster} from 'react-hot-toast';

function App() {
  const [toastDisplayed, setToastDisplayed] = useState(false);
  const [cord, setCord] = useState({lat:'',lon:''});
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    let crd = pos.coords;
    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    setCord({lat:crd.latitude, lon:crd.longitude})
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(err)
    if (!toastDisplayed) {
      toast(
        'Allow Location Permission, to use Geolocation Feature!',
        {
          duration: 1000,
        }
      );
      setToastDisplayed(true);
    
  }
}

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            // toast(
            //   'Allow Location Permission, to use Geolocation Feature!',
            //   {
            //     duration: 3000,
            //   }
            // );
          }
        });
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  },[]);
  console.log(cord)
  return (
    <div className='App'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Header/>
      <Layout cord={cord}/>
      <Footer/>
    </div>
  );
}

export default App;
