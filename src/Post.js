export default function (props) {
  return (
    <div className="ui   list">
      {props.posts.map((post) => (
        <div className="item" key={post.id}>
          <div className="content">
            <a className="header">{post.title}</a>
            <div className="description">{post.body}</div>
          </div>
          <div className="ui inverted divider"></div>
        </div>
      ))}
    </div>
  );
}
