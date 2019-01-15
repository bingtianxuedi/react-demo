import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import KanbanBoard from './KanbanBoard'
import './index.css';

let cardsList = [
    {
        id:1,
        title:'read the book',
        description:'i shoud read the **whole** book',
        color:"#BD8D31",
        status:'in-progress',
        tasks:[]
    },
    {
        id:2,
        title:'write some code',
        description:'code along with the sample in the book.the complete source' +
            'can be found at [github](https://github.com/pro-react) ',
        color:"#3A7E28",
        status:'todo',
        tasks:[
            {
                id:1,
                name:"contactList example",
                done:true
            },
            {
                id:2,
                name:'kanban example',
                done:false
            },
            {
                id:3,
                name:'my own experiments',
                done:false
            }
        ]
    }
]

//
// class Hello extends Component{
//     render() {
//         var place = "World";
//         return(
//             <h1>
//               Hello  {place}
//             </h1>
//         )
//     }
// }

//Parent component
// class GroceryList extends Component{
//    render() {
//        return(
//            <ul>
//                {/*<ListItem quantity="1" name="bread"></ListItem>*/}
//                {/*<ListItem quantity="2" name="eggs"></ListItem>*/}
//                {/*<ListItem quantity="3" name="milk"></ListItem>*/}
//                <ListItem quantity="1">bread</ListItem>
//                <ListItem quantity="2">milk</ListItem>
//                <ListItem quantity="3">eggs</ListItem>
//            </ul>
//        )
//    }
// }
// //child component
// class ListItem extends Component{
//     render() {
//         return(
//             <li>
//                 {/*{this.props.quantity} * {this.props.name}*/}
//                 {this.props.quantity} * {this.props.children}
//             </li>
//         )
//     }
// }

ReactDOM.render(<KanbanBoard cards={cardsList}/>, document.getElementById('root'));

serviceWorker.unregister();
