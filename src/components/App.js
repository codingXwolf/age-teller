import React from 'react';
import './App.css';
import AgeStats from './AgeStats';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newDate: '',
            birthday: '1992-06-21',
            showStats: false
        }

    }

    changeBirthday() {
        console.log(this.state);
        this.setState({ 
            birthday: this.state.newDate, 
            showStats: true
        })
    }

    render() {
        return (
            <div className="App">
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    <FormControl 
                    type="date"
                    onChange={e => this.setState({ newDate: e.target.value})}
                    >

                    </FormControl>
                    {' '}
                    <Button onClick={() => this.changeBirthday()}>
                        Submit
                    </Button>
                    {
                        this.state.showStats ? 
                        <div className="fade age-stats">
                            <AgeStats date={this.state.birthday} />
                        </div> 
                        : 
                        <div></div>
                    }
                </Form>
            </div>
        )
    }
}

export default App;