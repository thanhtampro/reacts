import "./App.css";

//Hướng dẫn sử dụng props
//Mục đích của prop là truyền tham số vào component

const exams = [
  {
    title: "Tiêu đề 1",
    thumbnail:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/8810/65340b173008c.jpg",
    description: "mô tả 1",
    count: 500,
  },
  {
    title: "Tiêu đề 2",
    thumbnail:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/8810/65340b173008c.jpg",
    description: "mô tả 2",
    count: 200,
  },
];
function PostItem({ title, thumbnail, description, count }) {
  return (
    <div className="post-item">
      <h2 className="post-title">{title}</h2>
      <img src={thumbnail} alt={title} />
      <p className="post-desc">{description}</p>
      <p className="post-published">Số lượng tham gia: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div id="wrapper">
      {exams.map((exam, index) => {
        return (
          <PostItem
            key={index}
            title={exam.title}
            thumbnail={exam.thumbnail}
            description={exam.description}
            count={exam.count}
          />
        );
      })}
    </div>
  );
}

export default App;
