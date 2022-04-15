import {Component} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

class Write extends Component{
    state = {
        title : '',
        body : '',
    }
    FormSubmit = (e) =>{
        e.preventDefault();
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return(
            <div>
                <Form className="col-md-6 col-sm-4 m-auto bg-light mt-3" onSubmit={this.FormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title{this.state.title}</Form.Label>
                        <Form.Control onChange={event => {this.setState({title:event.target.value})}} type="text" name="title" placeholder="Enter You title" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Body{this.state.body}</Form.Label>
                        <Form.Control onChange={event => {this.setState({body:event.target.value})}} as="textarea" name="body" placeholder="Share your story..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default Write;