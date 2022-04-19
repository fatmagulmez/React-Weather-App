import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext'



function App() {
  return (
   <WeatherProvider >
     <ThemeProvider>
        <Container />
     </ThemeProvider>
   </WeatherProvider>
  );
}

export default App;
