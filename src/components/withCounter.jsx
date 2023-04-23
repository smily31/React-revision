import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {  // you can also pass parameter to hoc
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}   // to pass on propss
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
