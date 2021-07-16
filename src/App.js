import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './stores/RootStore';
// "Pages"
import Dashboard from './pages/Dashboard/Dashboard';
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyB0CDe-gr0KL6u8_4cJL4Uc25zqMSJ1aEI",
  authDomain: "vehicle-app-c2ba2.firebaseapp.com",
  databaseURL: "https://vehicle-app-c2ba2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vehicle-app-c2ba2",
  storageBucket: "vehicle-app-c2ba2.appspot.com",
  messagingSenderId: "352323731066",
  appId: "1:352323731066:web:9a3965fc8d149abe8545c3",
  measurementId: "G-L39LCK8QEC"

};
firebase.initializeApp(config);
function App() {
  return (
    <Provider {...store}>
    <Router>
				<Switch>
					<Route path="/" component={Dashboard} />
				</Switch>
			</Router>
      </Provider>
  );
}

export default App;
