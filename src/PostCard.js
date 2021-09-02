const PostCard =(props)=>{
    return (
        <div className="ui card">
            <div className="content">
                <i className="right floated like icon"></i>
                <i className="right floated star icon"></i>
                <div className="header">My Blog</div>
                <div className="description">
                <p>{props.children}</p>
                </div>
            </div>
            <div className="extra content">
                <span className="left floated like">
                <i className="like icon"></i>
                Like
                </span>
                <span className="right floated star">
                <i className="star icon"></i>
                Favorite
                </span>
            </div>
        </div>
    )
};

export default PostCard;