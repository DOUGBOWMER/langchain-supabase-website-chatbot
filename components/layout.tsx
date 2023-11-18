import Link from "next/link";
import {useState} from "react"
interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoggedIn, setisLoggedin] = useState(false)
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6 flex flex-row font-semibold drop justify-evenly">
            
            <div>
              <Link href="/" className="hover:text-slate-600 cursor-pointer">
              Home
            </Link>
              </div>
              <div>
              <Link href="/" className="hover:text-slate-600 cursor-pointer">
              Start My return
            </Link>
              </div>
              <div>
              <Link href="/" className="hover:text-slate-600 cursor-pointer">
              Check My Return
            </Link>
              </div>
              <div>
              <Link href="/" className="hover:text-slate-600 cursor-pointer">
              Contact
            </Link>
              </div>
              <div>
                <Link href="login" className="hover:text-slate-600 cursor-pointer">
                   {!isLoggedIn ? "Login" : "My Aoount" }
                  </Link>
              </div>
          </nav>
        </div>
      </header>
      <div className="container">
              <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
