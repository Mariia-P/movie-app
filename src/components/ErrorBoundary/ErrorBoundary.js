import React, {Children, Component} from 'react';
import PT from 'prop-types';


export class ErrorBoundary extends Component {
    state = {
        error: null
    };
    
    static getDerivedStateFromError(error) {
        

        return {error};
    }
    render () {
        const { children } = this.props;
        const {error} = this.state;
        if (!error) return children;

        return (
            <div>
            <h2>{error.name}</h2>
            <p>{error.massage}</p>
            <p>{error.stack}</p>
            </div>
        );

    }
};

ErrorBoundary.propTypes = {
    children: PT.node.isRequired
};