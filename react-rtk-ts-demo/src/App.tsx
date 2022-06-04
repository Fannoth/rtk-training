import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/iceCreamView";
import UserView from "./features/user/userView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
