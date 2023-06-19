import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    incrementAge = () => {
        this.setState(prevState => ({ age: prevState.age + 1 }));
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h2>{this.props.lastName}, {this.props.firstName}</h2>
                        <p className="card-text">Age: {this.state.age}</p>
                        <p className="card-text">Hair Color: {this.props.hairColor}</p>
                        <button className="btn btn-primary" onClick={this.incrementAge}>
                            Birthday Button for {this.props.firstName} {this.props.lastName}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCard;




