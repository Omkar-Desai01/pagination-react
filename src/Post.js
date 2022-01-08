export default function (props) {
  return (
    <div class="ui   list">
      {props.posts.map((post) => (
        <div class="item">
          <div class="content">
            <a class="header">{post.title}</a>
            <div class="description">{post.body}</div>
          </div>
          <div class="ui inverted divider"></div>
        </div>
      ))}
    </div>
  );
}
