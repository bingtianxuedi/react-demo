import React,{Component} from 'react';

class CheckList extends Component{
    render() {
        let tasks = this.props.tasks.map((task)=>(
            <li key={task.id} className='checklist_task'>
                <input type='checkbox' defaultChecked={task.done}/>
                {task.name}
                <a href="#" className='checklist_task--remove'></a>
            </li>
        ))
        return(
            <div className='checkList'>
                <ul>
                    {tasks}
                </ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="type then hit enter to add a task"/>
            </div>
        )
    }
}
export default CheckList;