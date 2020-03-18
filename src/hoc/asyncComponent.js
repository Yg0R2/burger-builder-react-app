import React from "react";

const asyncComponent = (func) => {
  return class extends React.Component {

    state = {
      component: null
    };

    componentDidMount() {
      func()
        .then(args => {
          this.setState({component: args.default});
        })
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }

  }
};

export default asyncComponent;
