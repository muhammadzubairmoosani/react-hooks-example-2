import "./App.css";

/////////////////////// class component example ///////////////////////////
import React from "react";

class App extends React.Component {
  state = { title: document.title };

  componentDidMount() {
    document.title = this.state.title;
  }

  componentDidUpdate(_, prevProps) {
    if (this.state.title !== prevProps.title) {
      document.title = this.state.title;
    }
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </div>
    );
  }
}

/////////////////////// function component example ///////////////////////////
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [title, setTitle] = useState("My App");

//   useEffect(() => {
//     document.title = title;
//   }, [title]);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//     </div>
//   );
// };

export default App;
