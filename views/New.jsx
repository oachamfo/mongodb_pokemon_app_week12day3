const React = require("react");

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
      </div>
    );
  }
}

module.exports = New;
