import { Link, useLocation } from "react-router-dom";

const Header = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const isDark = variant === "dark";

  return (
    <header className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-5 z-50 ${isDark ? "bg-transparent" : "bg-background/80 backdrop-blur-md border-b border-border"}`}>
      {/* <header className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-5 z-50 border-b border-border ${isDark ? "bg-transparent" : "bg-background/80 backdrop-blur-md"}`}> */}
      <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
        <span className="w-11 h-11 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center text-primary-foreground font-heading font-bold text-lg glow-cyan">
          BR
        </span>
        <span className={`font-heading font-semibold text-lg hidden sm:block ${isDark ? "text-foreground" : "text-foreground"}`}>
          Boopathi R
        </span>
      </Link>

      <nav>
        <ul className="flex gap-4 md:gap-8 items-center">
          <li>
            <Link
              to="/about"
              className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/about")
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "text-foreground hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              }`}
            >
              About me
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              to="/skills"
              className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/skills")
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "text-foreground hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              }`}
            >
              Skills
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              to="/projects"
              className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/projects")
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "text-foreground hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isActive("/contact")
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "text-foreground hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              }`}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
