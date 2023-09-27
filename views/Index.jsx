const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
const newStyle = {
  textDecoration: "none",
  backgroundColor: "yellow",
  color: "blue",
};

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <nav>
          <h1>
            <a style={newStyle} href="/pokemon/new">
              Create a New Pokemon
            </a>
          </h1>
        </nav>

        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemon._id}`}>
                  {pokemon?.name?.charAt(0).toUpperCase()}
                  {pokemon?.name?.slice(1).toLowerCase()}
                </a>
                <form
                  action={`/pokemon/${pokemon._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
