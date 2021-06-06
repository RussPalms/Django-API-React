import React, { Component } from "react";
import { render } from "react-dom";
// import ReactDom from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        //  here we are fetching the input which is were our data is coming from
        fetch("events/api")
            .then(response => {
                if (response.status > 400) {
                    // here we are declaring the 
                    //                         state
                    return this.setState(() =>{
                        return { placeholder: "Something went wrong!" };
                    } );
                }
                return response.json();
            })
            .then(data => {
                //              state
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.data.map(events => {
                    return (
                        <div key={events.id}>
                            {events.title}
                            {events.details}
                        </div>
                    );
                })}
            </div>
        );
    }
}

// ReactDOM.render(<App />, document.querySelector('#api'))