import * as React from 'react';

export default class extends React.Component {
    
    state = { res: null, stage: 0 };
    renderers = [
        this.props.loader || (() => null),
        this.props.main,
        this.props.fallback
    ];

    componentWillMount() {
        this.props.pms.then(res => this.setState({ res, stage: 1 }));
        this.props.fallback && this.props.pms.catch(res => this.setState({ res, stage: 2 }));
    }

    render() {
        return this.renderers[this.state.stage](this.state.res);
    }
}