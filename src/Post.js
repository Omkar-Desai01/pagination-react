export default function (props) {
  return (
    <div class="ui   list">
      {/* <div class="card">
        <div class="content">
          <div class="header">{props.posts[0].title}</div>
          <div class="meta">Friend</div>
          <div class="description">
            Elliot Fu is a film-maker from New York.
          </div>
        </div>
      </div> */}
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
