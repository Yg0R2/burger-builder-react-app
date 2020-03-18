import React from "react";

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {

    state = {
      error: null
    };

    constructor(props) {
      super(props);

      this.requestInterceptor = axios.interceptors.request.use(request => {
        this.setState({error: null});
        return request;
      });

      this.responseInterceptor = axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({error: error});
        });
    }

    // Do not forget to remove interceptors!
    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
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
