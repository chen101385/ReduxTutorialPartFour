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
        return (
            <div>
                Posts Show!
                </div>
        );
    };
}

function mapStateToProps({ posts }, ownProps) {
    return {posts: posts[ownProps.match.params.id];
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);