import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CatFact from './components/CatFact';
const client = new QueryClient({
  defaultOptions : {
    queries : {
      refetchOnWindowFocus: false
    }
  }
});
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={<CatFact/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
