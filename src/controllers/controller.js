const { mockPostResponse } = require("../../data/mock-data");

exports.getPosts = (req, res) => {
  if (mockPostResponse.length < 1) {
    return res.status(404).json({ error: "No posts found" });
  }

  return res.status(200).json({ data: mockPostResponse });
};

exports.getPostById = (req, res) => {
  const postId = req.params.id;
  const post = mockPostResponse.find((post) => post.id === Number(postId));

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  return res.status(200).json({ data: post });
};

exports.getPostByIdWithComments = (req, res) => {
  const postId = req.params.id;
  const post = mockPostResponse.find((post) => post.id === Number(postId));

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  return res.status(200).json({ data: post.comments });
};

exports.getPostsByTag = (req, res) => {
  const tagName = req.params.name;
  const posts = mockPostResponse.filter((post) => post.tags.includes(tagName));

  if (!posts.length) {
    return res.status(404).json({ error: "No posts found with this tag" });
  }

  return res.status(200).json({ data: posts });
};
