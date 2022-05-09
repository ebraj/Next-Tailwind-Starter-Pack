import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="bg-yellow-200 text-gray-900 p-5">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto space-x-10">
          <h2>
            <Link href="/">
              <a>Logo</a>
            </Link>
          </h2>
          <ul className="flex items-center justify-center space-x-5">
            <li>
              <Link href="/">
                <a>List #1</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>List #2</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
