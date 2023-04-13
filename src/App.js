import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "reactstrap";

import Posts from "./components/Posts";
import Form from "./components/Form";

import { useCreatePostMutation, useGetPostsQuery } from "./redux/api";

function App() {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");

  const { isFetching, data: posts = [] } = useGetPostsQuery();
  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();

  useEffect(() => {
    if (isSuccess) setTitle("");
  }, [isSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
    createPost({ id: uuidv4(), title });
  };

  const changeHandler = (e) => setTitle(e.target.value);

  const clickHandler = (post) => {
    setPost(post);
    setTitle(post?.title);
  };

  return (
    <Container>
      <div style={{ marginTop: 10 }}>
        <Row>
          <Col lg={12}>
            <Form
              title={title}
              isLoading={isLoading}
              onChange={changeHandler}
              onSubmit={submitHandler}
            />
          </Col>
          <Col lg={12}>
            {isFetching && <p>Loading...</p>}
            {!isFetching && <Posts posts={posts} onClick={clickHandler} />}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
