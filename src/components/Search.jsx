import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter a valid search')
        } else {
        this.props.searchStocks(this.state.text);
        this.setState({ text: '' });
        }
    }
    
    render() {
       
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Stocks" value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search"  /><label> Search by Ticker Symbol (Apple = AAPL)</label>
                </form>
                
              
            </div>
        );
    }
}

export default Search;