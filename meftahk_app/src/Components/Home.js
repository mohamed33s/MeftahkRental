import Button from "react-bootstrap/Button";
import Comments from "./CommentRater";

function Home() {
  return (
    <div>
      <div className="buttonHome d-grid gap-2">
        <Button href="/cars" variant="dark" size="lg">
          شوف سياراتنا
        </Button>
      </div>
      <div id="commentRater">
        <Comments />
      </div>
    </div>
  );
}

export default Home;
