import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const useMessage = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getMessage = async () => {
        try {
          setLoading(false);
          const result = await fetch('api/hello');
          return await result.text();
        } catch (error) {
          setLoading(true);
          console.log(error);
        }
      };

      getMessage().then(msg => setMessage(msg));
    }, []);

    return [loading, message];
  };

  const [loading, message] = useMessage();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading? <p>The message is loading</p> : <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
