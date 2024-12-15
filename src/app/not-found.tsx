import "../app/styles/not-found.css";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div>
      <h1 className="not-found-title">Oops This Page is not Found ! 404</h1>
      <br />
      <p className="not-found-text">Please check your URL</p>
      <br />
      <Link href="/" className="not-found-link">
        Or click here to go <b>Home Page!</b>
      </Link>
    </div>
  );
}
