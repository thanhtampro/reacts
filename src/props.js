import "./App.css";

//Hướng dẫn sử dụng props
//Mục đích của prop là truyền tham số vào component

//API
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

function PostItem({ exam }) {
  return (
    <div className="post-item">
      <h2 className="post-title">{exam.title}</h2>
      <img src={exam.thumbnail} alt={exam.title} />
      <p className="post-desc">{exam.description}</p>
      <p className="post-published">Số lượng tham gia: {exam.count}</p>
    </div>
  );
}

function App() {
  return (
    <div id="wrapper">
      {exams.map((exam, index) => (
        <PostItem key={index} exam={exam} />
      ))}
    </div>
  );
}

export default App;
