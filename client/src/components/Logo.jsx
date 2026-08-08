import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-[22px] font-black tracking-[-1.2px]"
    >
      AB<span className="text-[#6C4EFF]">Talks</span>
    </Link>
  );
}

export default Logo;