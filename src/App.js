import "./App.css";

/////////////////////// class component example ///////////////////////////
// import React from "react";

// class App extends React.Component {
//   state = { title: document.title };

//   componentDidMount() {
//     document.title = this.state.title;
//   }

//   componentDidUpdate(_, prevProps) {
//     if (this.state.title !== prevProps.title) {
//       document.title = this.state.title;
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <input
//           type="text"
//           value={this.state.title}
//           onChange={(event) => this.setState({ title: event.target.value })}
//         />
//       </div>
//     );
//   }
// }


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

///////////////////////  Real-Life example ///////////////////////////
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [ users, setUsers ] = useState([]);
  const [ showDetails, setShowDetails ] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    setUsers(response.data);
  };

  useEffect( () => { fetchUsers(users) }, [ users ] );

  const handleClick = event => { setShowDetails(!showDetails) };

  return (
    <div>
      {
        users.map((user) => (
          <ul key={ user.id }>
            <li>
              <strong>{ user.name }</strong>
              <div>
                <button
                  onClick={ handleClick }
                >
                  { showDetails ? "Close Additional Info" : "More Info"  }
              </button>
               { showDetails &&
                 <div className="additional-info">
                   <p>
                     { `Email: ${ user.email }` }
                   </p>
                   <p>
                     { `Phone: ${ user.phone }` }
                   </p>
                   <p>
                     { `Website: ${ user.website }` }
                   </p>
                 </div>
               }
              </div>
            </li>
          </ul>
        ))
      }
    </div>
  )
}



export default App;
