import { ListGroup, ListGroupItem, Button } from "reactstrap";

const Posts = ({ posts = [], onClick }) => {
  return (
    <ListGroup>
      {posts.map((post) => (
        <ListGroupItem
          key={post.id}
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={onClick.bind(null, post)}
        >
          <h6>{post.title}</h6>
          <Button color="danger">Delete</Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Posts;
