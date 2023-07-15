//Incorrect ErrorBoundary.js

class ErrorBoundary extends React.Component.Component {

state = { hasError = false };

componentWillCatch(error) {
this.setState({ hasError: true });
}

render() {
if (this.state.hasError) {
return <h1>Something went wrong</h1>;
}

return this.props.children;
}
}

export default ErrorBoundary;
