import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import img from '../img/pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    
    render() {
        const {posts} = this.props;
        const postList = posts.length ? (
            
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={img} alt="A Pokoball" />
                        <div className="card-content">
                        <Link to={'/post/' + post.id}>
                            <span className="card-title red-text title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No post yet</div>
        )
        return (
            <div className='container'>
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Home);