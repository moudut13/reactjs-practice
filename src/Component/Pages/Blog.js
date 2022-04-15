import {Component} from "react";
import axios from "axios";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class Blog extends Component{
    state ={
        post:[],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (response)=> {
                this.setState({post: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        const posts = this.state.post;
        const showPost = posts.map((post,idx)=>{
            return(
                <div>
                    <Card style={{marginBottom:'20px',marginTop:'10px',width:'500px',float:'left'}}>
                        <Card.Body>
                            <Card.Title key={idx}>{post.title}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            );
        })
        return(
            <div>
                <Button>
                    <Link to="/write" style={{color:'#fff',textDecoration:'none',fontWeight:'700'}}>Add Now</Link>
                </Button>
                {showPost}
            </div>
        );
    }
}
export default Blog;