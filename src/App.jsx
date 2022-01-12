import react, {useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const url = 'https://api.kanye.rest/'

  const [state,setState]=useState('one')
  const [quote,setQuote]=useState()

  function getQuote(){
    axios.get(url).then((res)=>{
      setQuote(res.data.quote)

    }
    )

  }
  useEffect(()=>{
    getQuote()
    
  },[])

  return (
    <div className="App">
      <div className='quote-container'>
        {quote ? <p>"{quote}" - Kanye West</p>: <p>loading...</p>}
      </div>

      <div className='button-container'>
        <button onClick={()=>getQuote()}>
          get new quote
        </button>
      </div>
    </div>
  );
}

export default App;
