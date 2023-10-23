// const exams = [
//   {
//     title: "Tiêu đề 1",
//     thumbnail:
//       "https://files.fullstack.edu.vn/f8-prod/blog_posts/8810/65340b173008c.jpg",
//     description: "mô tả 1",
//     count: 500,
//   },
//   {
//     title: "Tiêu đề 2",
//     thumbnail:
//       "https://files.fullstack.edu.vn/f8-prod/blog_posts/8810/65340b173008c.jpg",
//     description: "mô tả 2",
//     count: 200,
//   },
// ];
// //UI component
// function PostItem({ exam, onClick }) {
//   return (
//     <div className="post-item">
//       <h2 className="post-title">{exam.title}</h2>
//       <img src={exam.thumbnail} alt={exam.title} />
//       <p className="post-desc">{exam.description}</p>
//       <p className="post-published">Số lượng tham gia: {exam.count}</p>
//       <button onClick={() => onClick(exam)}>Xem khóa học</button>
//     </div>
//   );
// }

// //component
// function App() {
//   //use callback
//   const handleClick = (exam) => alert(exam.title);
//   return (
//     <div id="wrapper">
//       {exams.map((exam, index) => (
//         <PostItem key={index} exam={exam} onClick={handleClick} />
//       ))}
//     </div>
//   );
// }

function Button({ title, href, onClick }) {
  let Component = "button";
  const props = {};
  if (onClick) {
    props.onClick = onClick;
  }
  if (href) {
    props.href = href;
    Component = "a";
  }
  return <Component {...props}>{title}</Component>;
}
function App() {
  return (
    <div id="wrapper">
      <Button
        title="Click me"
        href="https://gmail.com"
        onClick={() => alert(Math.random())}
      />
    </div>
  );
}

export default App;
