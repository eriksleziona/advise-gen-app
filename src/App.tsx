import HomePage from "./modules/Home/pages/HomePage";
import { AppProvider } from "./Context/Context";
function App() {
  return (
    <>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </>
  );
}

export default App;
