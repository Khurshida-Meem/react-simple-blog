import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deletePost } from "../actions/PostActions";

class Post extends Component {

    
    handleClick = (ownProps) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center">Loding...</div>
        )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.post_id;
    return {
        post: state.posts.find(post => post.id === parseInt(id) )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: id => {
            dispatch(deletePost(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter (Post));