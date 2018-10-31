import React, { PureComponent } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      surveys: []
    };
  }

  onCreateNewSurvey() {
    console.log("go to add new survey page");
    fetch("/api/test");
    // go to add new survey page
  }

  render() {
    return (
      <div>
        <button onClick={this.onCreateNewSurvey}>Create new survey</button>
      </div>
    );
  }
}

export default Home;
