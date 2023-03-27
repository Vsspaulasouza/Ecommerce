import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <Link to="/">GO HOME</Link>
    </>
  );
}

export default NotFound;
