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


///////////////////////  Custom Hooks example ///////////////////////////
// import React, { useState } from "react";

// const useClickCount = (initialClicks) => {
//   const [clicks, setClicks] = useState(initialClicks);
//   const increment = () => setClicks(clicks + 1);
//   return [clicks, increment];
// };

// const App = () => {
//   const [clicksA, incrementA] = useClickCount(0);
//   const [clicksB, incrementB] = useClickCount(0);

//   return (
//     <div className="App">
//       <p>
//         {clicksA} A clicks <button onClick={incrementA}>Click A</button>
//       </p>
//       <p>
//         {clicksB} B clicks <button onClick={incrementB}>Click B</button>
//       </p>
//     </div>
//   );
// };

export default App;
