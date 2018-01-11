import React from 'react';

export default class About extends React.Component {
    render() {
        console.log(this.props.match)
        return (
            <div>About</div>
        )
    }
}