const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
const backStyle = {
  textDecoration: "none",
  backgroundColor: "yellow",
  color: "blue",
};

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon; //declare a variable as a shorthand for this.props.pokemon
    const pokemon_id = this.props.id;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>
          {pokemon?.name.charAt(0).toUpperCase()}
          {pokemon?.name.slice(1)}
        </h2>
        {pokemon?.img ? (
          <img src={pokemon?.img + ".jpg"}></img>
        ) : (
          <p>Sorry, no image.</p>
        )}

        <br></br>
        <h1>
          <a style={backStyle} href="/pokemon">
            Back
          </a>
        </h1>
      </div>
    );
  }
}

module.exports = Show;
