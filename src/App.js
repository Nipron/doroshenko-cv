import {Route} from "react-router";

import MainPage from "./pages/MainPage/MainPage";
import CVMain from "./pages/CV/CVMain";

function App() {

    return (
        <div className="App">
            <Route exact path='/' component={MainPage}/>
            <Route path='/cv' component={CVMain}/>
        </div>
    );
}

export default App;
