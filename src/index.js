import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { PropTypes} from  'prop-types';
import "whatwg-fetch";

class ConstactsAppContainer extends Component{
    constructor(){
        super();
        this.state = {
            contacts:[]
        }
    };
    componentDidMount() {
        fetch('./contacts.json')
            .then((response)=>response.json())
            .then((responseDate)=>{
                this.setState({
                    contacts:responseDate
                })
            })
            .catch((err)=>{
                console.log('Error fetching and parsing date',err)
            })
    }

    render() {
        return(
            <ConstactsApp contacts={this.state.contacts}/>
        )
    }
}
class ConstactsApp extends Component{
    constructor() {
        super();
        this.state = {
            filterText:''
        }
    };
    handleInput(searchTerm) {
        this.setState({
            filterText: searchTerm
        })
    }
    render() {
        return(
            <div className='app'>
                <SearchBar filterText={this.state.filterText}
                           OnUserInput={this.handleInput.bind(this)}/>
                <ContactList contacts={this.props.contacts}
                             filterText={this.state.filterText}/>
            </div>
        )
    }
}
class SearchBar extends Component{
    handleChange(event) {
       this.props.OnUserInput(event.target.value)
    }
    render() {
        return(
            <input type='search' placeholder='search'
                   value={this.props.filterText}
                   onChange={this.handleChange.bind(this)}/>
        )
    }
}
class ContactList extends Component{
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact)=>contact.name.indexOf(this.props.filterText) !==-1
        );
        return(
            <ul>
                {filteredContacts.map(
                    (contact)=><ContactItem key={contact.email}
                                            name={contact.name}
                                            email={contact.email}/>
                )}
            </ul>
        )
    }
}
class ContactItem extends Component{
    render() {
        return(
            <li>
                {this.props.name}----{this.props.email}
            </li>
        )
    }
}


ReactDOM.render(<ConstactsAppContainer/>, document.getElementById('root'));

serviceWorker.unregister();



























