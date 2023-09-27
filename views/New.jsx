const React = require("react");

const backStyle = {
  textDecoration: "none",
  backgroundColor: "yellow",
  color: "blue",
};

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
          Name of Pokemon: <input type="text" name="name" />
          <br></br>
          Just enter the CORRECT name of pokemon. Image will automatically be
          added.
          <br></br>
          <input type="submit" name="" value="Create Pokemon" />
        </form>
        <nav>
          <h1>
            <a style={backStyle} href="/pokemon">
              Go to index page
            </a>
          </h1>
        </nav>
      </div>
    );
  }
}

module.exports = New;
