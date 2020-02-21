import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import WithLoading from "./components/WithLoading";

const ListWithLoading = WithLoading(MovieList);

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  };
  render() {
    return (
      <div className="App">
        <ListWithLoading isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
