import React from 'react';
import $ from 'jquery';
import WeatherMessage from './WeatherMessage.jsx';
import WeatherForm from './WeatherForm.jsx';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'NA',
            temp: 'NA',
            message: ''
        }
    }
    handleSearch(location) {
        var api_key = "a20de9ab6a829482823ed9a0bf4e68f0";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + api_key + "&units=metric";
        var myClass = this;
        myClass.setState({message: 'Loading...'});
        $.getJSON(url, function(data) {
            myClass.setState({
                location: location,
                temp: data.main.temp
            });
            myClass.setState({
                message: 'We got ' + myClass.state.temp + ' in ' + myClass.state.location
            });
        }).fail(function() {
            myClass.setState({message: 'City not found'});
        });
    }
    render() {
        return(
            <div>
                <center>
                    <h2>Get Weather</h2>
                    <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                    <WeatherMessage message={this.state.message}/>
                </center>
            </div>
        );
    }
}

export default Weather;