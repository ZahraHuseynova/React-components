
const BlogPost = (props) => {
    return(
        <div className="blog">
            <h1>{props.header}</h1>
            <img className="ui small left-floated image" src={props.photo} alt="post"/>
            <p>{props.firstPost}</p>
            <img className="ui small right floated image" src={props.secondPhoto} alt="animal"></img>
            <p>{props.secondPost}</p>
            <p>{props.thirdPost}</p>
        </div>
    );

};

export default BlogPost;