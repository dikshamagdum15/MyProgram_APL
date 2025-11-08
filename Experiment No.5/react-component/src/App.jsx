import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // Inline CSS styles as JavaScript objects
    const containerStyle = {
      fontFamily: "Arial, sans-serif",
      width: "100%",
      minHeight: "100vh",
      margin: 0
    };

    const headerStyle = {
      color: "darkblue",
      textAlign: "center",
      margin: 0,
      padding: "20px 0",
      width: "100%"
    };

    const contentStyle = {
      fontSize: "18px",
      color: "darkgreen",
      textAlign: "center",
      margin: 0,
      padding: "20px 0",
      width: "100%"
    };

    const buttonContainerStyle = {
      textAlign: "center",
      marginTop: "20px",
      width: "100%",
      padding: "20px 0"
    };

    const buttonStyle = {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "orange",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    };

    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}> Welcome to My React App </h1>
        <p style={contentStyle}>
          This is a simple Class Component using inline CSS.
        </p>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={this.handleClick}>
            Click Me
          </button>
        </div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Button clicked {this.state.count} times
        </p>
      </div>
    );
  }
}

export default App;



// import React from "react";

// // Header Component
// function Header() {
//   return (
//     <h1 style={{ color: "darkblue", textAlign: "center", margin: "20px 0" }}>
//       Welcome to My React App 
//     </h1>
//   );
// }

// // Content Component
// function Content() {
//   return (
//     <p style={{ fontSize: "18px", color: "darkgreen", textAlign: "center" }}>
//       This is a simple example of multiple function components with inline CSS.
//     </p>
//   );
// }

// // Button Component
// function MyButton() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <button
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           backgroundColor: "orange",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer"
//         }}
//         onClick={() => alert("Button Clicked!")}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// // Main App Component
// function App() {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif",  minHeight: "100vh" }}>
//       <Header />
//       <Content />
//       <MyButton />
//     </div>
//   );
// }

// export default App;

