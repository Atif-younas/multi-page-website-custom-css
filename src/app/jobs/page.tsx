import '../../app/styles/jobs.css';
import Link from "next/link";

export default function Jobs() {
  return (
    <div>
      <h1 className="jobs-title">Jobs Page!</h1>
      <br />
      <Link href="jobs/programing" className="jobs-link">
        Go To Programming Jobs
      </Link>
    </div>
  );
}
