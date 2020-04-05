import "./App.css";
import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

///////// Create Context
const ThemeContext = React.createContext(themes);

/////////////////////// Example without useContext ///////////////////////
//
///////// Parent Component
// class App extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// ///////// Intermediate Component
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// ///////// Child Component
// class ThemedButton extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <div className="App">
//         <h2
//           style={{
//             backgroundColor: this.context.background,
//             color: this.context.foreground,
//           }}
//         >
//           Hello world
//         </h2>
//       </div>
//     );
//   }
// }

/////////////////////// Example with useContext ///////////////////////
//
///////// Parent Component
const App = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
};

///////// Intermediate Component
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

///////// Child Component
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <div className="App">
      <h2
        style={{
          color: theme.background,
          backgroundColor: theme.foreground,
          padding: theme.paddingY,
        }}
      >
        Hello world
      </h2>
    </div>
  );
}

export default App;
