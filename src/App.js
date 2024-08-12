import logo from './logo.svg';
import './App.css';
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  async function getStaticProps() {
    
    const client = createClient({
      space: 'wsgd4erp34un',
      accessToken: '9XNi21n0e4AvK3msUahqXlw-pJhc9M-pwQinXsEhdSo',
    });

    const res = await client.getEntries({
      content_type: 'test'
    });

    return {
      props: {
        data: res.items 
      }
    }
  }

  useEffect(() => {
    getStaticProps().then(res => {
      setData(res.props.data);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 1.
        </p>
        {data.map(item => {
          return (
            <div key={item.sys.id}>
              <h2>{item.fields.title}</h2>
              <p>{item.fields.description}</p>
              <img src={item.fields.featuredImage.fields.file.url} alt={"a"} />
            </div>
          )
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="1"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
