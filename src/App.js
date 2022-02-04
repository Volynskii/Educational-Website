import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import CoursesPage from "./pages/courses-page";
import ContactPage from "./pages/contact-page";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
    return (
        <>
            <Router>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/courses" component={CoursesPage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
