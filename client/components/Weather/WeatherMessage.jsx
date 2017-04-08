import React from 'react';

class WeatherMessage extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default WeatherMessage;