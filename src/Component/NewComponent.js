import {Component} from "react";
import "./style.css";

class NewComponent extends Component{
    state={
        name : 'Shuvo Ahmad',
        age : '',
    }
    ChangeName = (event) =>{
        this.setState({
            name : event.target.value
        })
    }
    render() {
        const name = ['fkhdbk','dafjv','dhf','jhmfv','jhdgv','iuer','eytfr','787','097','086','085']
        const items = name.map((item, ids) =>{
            return <li key={ids}>{item}</li>
        })

        const students = [
            {name: 'Shuvo' ,age : '12' ,cgpa : '4'},
            {name: 'Ahmad' ,age : '17' ,cgpa : '4.5'},
            {name: 'Khondoker' ,age : '13' ,cgpa : '4.3'},
            {name: 'Moudut' ,age : '18' ,cgpa : '5'},
        ];
        let tr = ''
        const sa = students.map((student,idx) =>{
            tr = <tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.cgpa}</td>
                    <td><button>Edit</button><button>Delete</button></td>

                </tr>
            return tr;
        })
        return(
            <div className="container">
                <div>
                    <input type="text" value={this.state.name} onChange={this.ChangeName}/>
                    <p>Hello, {this.state.name}</p>

                    <form>
                        <select onChange={(event)=>this.setState({age : event.target.value})}>
                            <option value=""> --select-- </option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                        </select>
                        <p>Age: {this.state.age}</p>
                    </form>
                    <div>
                        <ul>
                            {items}
                        </ul>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Cgpa</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                            {sa}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewComponent;