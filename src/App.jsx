import Login from "./components/Login"
import Body from "./components/Body"
import Profile from "./components/Profile"
import Feed from "./components/Feed";

import appStore from "./utils/appStore";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App