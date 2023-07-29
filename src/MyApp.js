import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DummyPage from "./DummyPage";

// @Abin s chandran
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "Home",
     
    };
  }

  handleMenuSelect = (value) => {
    console.log(value);
    this.setState({
      currentSelected: value,
    });
  };




  getpage() {
    const { currentSelected } = this.state;

    switch (currentSelected) {
      case "Home":
        return <HomePage/>

      case "Usage":
        return <DummyPage key='Usage' name="Usage" />;

      case "Settings":
        return <DummyPage key='Settings' name="Settings" />;
      case "Logout":
        return <DummyPage key='logout' name="logout" />;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect} onClickrfresh={this.handlePageRefresh}/>
        <div className="app_body">
          {this.getpage()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyApp;
