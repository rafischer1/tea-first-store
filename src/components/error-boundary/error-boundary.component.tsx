import React from "react";
import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasErrored: false, error: "" };
  }

  static getDerivedStateFromError(error: any) {
    // console.log(error);
    return { hasErrored: !!error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: error.name.toUpperCase() + " " + errorInfo.componentStack,
    });
  }

  render() {
    return this.state.hasErrored ? (
      <table>
        <thead>
          <tr>
            <th>* Error Boundary Triggered *</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.error}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
