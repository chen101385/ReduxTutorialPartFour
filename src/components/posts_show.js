import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        //id provided from React-Router;
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        const { post } = this.props;

        if (!post) {
            return (
                <div>Loading...</div>
            )
        }
        
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    };
}
//ownProps === this.props for component(PostsShow)
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);