import './App.css';
import { ItemProvider } from './context/ItemContext';
import View from './view';

function App() {
  return (
    <ItemProvider>
      <View />
    </ItemProvider>
  );
}

export default App;
