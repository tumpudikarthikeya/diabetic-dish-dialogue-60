
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav-fixed bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-semibold transition-colors ${
                isActive("/")
                  ? "text-emerald-500"
                  : "text-foreground hover:text-emerald-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`text-lg font-semibold transition-colors ${
                isActive("/chat")
                  ? "text-emerald-500"
                  : "text-foreground hover:text-emerald-500"
              }`}
            >
              Chat
            </Link>
            <Link
              to="/about"
              className={`text-lg font-semibold transition-colors ${
                isActive("/about")
                  ? "text-emerald-500"
                  : "text-foreground hover:text-emerald-500"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/how-to-use"
              className={`text-lg font-semibold transition-colors ${
                isActive("/how-to-use")
                  ? "text-emerald-500"
                  : "text-foreground hover:text-emerald-500"
              }`}
            >
              How to Use
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
