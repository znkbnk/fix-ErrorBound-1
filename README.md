This project demonstrates error boundaries in React by intentionally introducing mistakes 
for the coder to practice finding and fixing - you'll learn error boundaries by debugging incorrect code.

Mistake 1: Importing the wrong component 'ErrorBondary' instead of 'ErrorBoundary'.
Fix by correcting the spelling to import ErrorBoundary from "./ErrorBoundary".

Mistake 2: Forgetting to wrap ChildComponent in an error boundary. 
Fix by returning <ErrorBoundary><ChildComponent /></ErrorBoundary> instead of just <ChildComponent />.

Mistake 3: Mistake - Extending React.Component incorrectly by using React.Component.Component instead of just React.Component.
Fix by changing class ErrorBoundary extends React.Component.Component to class ErrorBoundary extends React.Component.

Mistake 4:  Initializing state incorrectly by using '=' instead of ':' to define the hasError property.
Fix by changing state = { hasError = false } to state = { hasError: false }.

Mistake 5: Using the incorrect method name componentWillCatch instead of componentDidCatch to catch errors.
Fix by renaming the method to componentDidCatch(error) { this.setState({ hasError: true }); }.
