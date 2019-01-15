import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Voucher extends Component {
    constructor() {
        super();
        this.state = {
            passengers:[
                'Simmon, Robert A.',
                'Taylor, Kathleen R.'
            ],
            ticket:{
                company:"Dalta",
                flightNo:'0990',
                departure:{
                    airport:"LAS",
                    time:'2016-08-21T10:00:00.000Z'
                },
                arrival:{
                    airport:"MIA",
                    time:'2016-08-21T10:00:00.000Z'
                },
                codeshare:[
                    {company:'GL',flightNo:'9840'},
                    {company:'TM',flightNo:'5010'}
                ]
            }
        }
    }
    //这样没有进行数据的备份，引用的是同一个地址，原数组的数据进行了更改，
    // 不符合react的state的规则，故这种添加数据的方法不可取，只有对原数据进行备份，
    //并修改的是新数组而不是原数组
    // let updatePassengers = this.state.passengers;
    // updatePassengers.push('Mitchell, Vincent M.');
    // this.setState({
    //      passengers:updatePassengers
    // })

    //可以用concat或者assign来进行数组的添加，assign只针对chrome,firebox浏览器（插件解决不同浏览器）
    // let updatePassengers = this.state.passengers.concat('Mitchell, Vincent M.');
    // this.setState({passengers:updatePassengers})

       // let updateTicket = Object.assign({},this.state.ticket,{flightNo:'1010'})
       // this.setState({ticket:updateTicket})
    //解决assign针对所有浏览器，利用babel和webpack的ES6提供了方便的方法
    //npm install --save babel-polyfill  使用时import 'babel-polyfill',即可

    //不变性助手 update
    //安装依赖 npm install --save react-addons-update
    //使用 import update from 'reacr-addons-update';
    // let student = {name:'john',grades:["A","B","C"]}
    // let newStudent = update(student,{grades:{$push:["S"]}})
    //完全的修改数组用$set取代$push
    // let newStudent2 = update(student,{grades:{$set:["S","S","S"]}})

    //三层数据的修改，ticket.airport
    // let newTicket = update(ticket,{arrival:{airport:{$set:'MCo'}}})

    //也可以使用数组的索引
    // let  newTicket = update(ticket,{codeshare:{0：{$set:{compay:"AZ",flightNo:'7320'}}}})





    render() {
        return(
            <div>

            </div>
        )
    }
}












ReactDOM.render("", document.getElementById('root'));











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
