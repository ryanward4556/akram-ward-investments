import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <LoginForm />
                <Footer />
            </div>
        )
    }
}

export default App;
