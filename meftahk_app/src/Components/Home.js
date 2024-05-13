import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="buttonHome d-grid gap-2">
      <Button href="/cars" variant="dark" size="lg">
        شوف سياراتنا
      </Button>
    </div>
  );
}

export default Home;
