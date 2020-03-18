import React from "react";

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {

    state = {
      error: null
    };

    constructor(props) {
      super(props);

      axios.interceptors.request.use(request => {
        this.setState({error: null});
        return request;
      });

      axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({error: error});
        });
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            display={this.state.error}
            modalCloseHandler={this.errorConfirmedHandler}
          >
            {this.state.error !== null ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }

  }
};

export default withErrorHandler;
