const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes;
  };

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return [];
  }
  let topBlog;
  blogs.forEach((blog) => {
    if (!topBlog || blog.likes > topBlog.likes) topBlog = blog;
  });
  return topBlog;
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }

  const authorCount = {};
  let maxAuthor = "";
  let maxBlogs = 0;

  blogs.forEach((blog) => {
    const author = blog.author;
    authorCount[author] = (authorCount[author] || 0) + 1;

    if (authorCount[author] > maxBlogs) {
      maxBlogs = authorCount[author];
      maxAuthor = author;
    }
  });

  console.log("Name:", maxAuthor, "Count:", maxBlogs);
  return { author: maxAuthor, blogs: maxBlogs };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
