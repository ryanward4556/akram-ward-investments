import React from "react";
import NavBar from "../components/NavBar";
import CompanyName from "../components/CompanyName";
import Footer from "../components/Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <CompanyName />
                <Footer />
            </div>
        )
    }
}

export default App;
