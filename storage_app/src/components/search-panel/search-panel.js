import { Component } from 'react';
import './search-panel.scss'

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemSearch : ''
        }
    }

    onUpdateSearch = (e) => {

        const itemSearch = e.target.value.toLowerCase();
        this.setState({itemSearch});
        this.props.onUpdateSearch(itemSearch);
    }

    render() {

    return (
        <div className="search_container">
            <input 
                type="text" 
                className="search_input" 
                placeholder='What do you search for?'
                value={this.state.itemSearch}
                onChange={this.onUpdateSearch}
                />
        </div>
    )
    }
    
}

export default SearchPanel;