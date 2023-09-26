const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon; //declare a variable as a shorthand for this.props.pokemon
    const pokemon_id = this.props.id;
    return (
      <div style={myStyle}>
        <h1>See A Pokemon!</h1>
        <ul>
          <li>The pokemon id: {pokemon_id}. This is the index of an array.</li>
        </ul>
      </div>
    );
  }
}

module.exports = Show;
