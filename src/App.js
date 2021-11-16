import './App.css';
import ProductWrapper from './Components/Product Wrapper/ProductWrapper';
import { ImageContext } from './context';
import { useState} from 'react'
import main from "./Components/assets/main.png";
function App() {
  const [image, setImage] = useState(main)
  return (
    <ImageContext.Provider value={{image, setImage}}>
      <ProductWrapper/> 
    </ImageContext.Provider>
  );
}

export default App;
