import SiteLogo from "../assets/SiteLogo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1e1d]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-14">
          {/* Logo */}
          <div className="flex items-center mr-10">
            <img src={SiteLogo} alt="Arsenal logo" className="w-10 h-10 object-contain" />
          </div>

          {/* Nav links */}
          <ul className="flex items-center gap-1">
            <li className="px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
              Home
            </li>
            <li className="px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
              Fixtures
            </li>
            <li className="px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
              Results
            </li>
            <li className="px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
              Table
            </li>
            <li className="px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
              Squad
            </li>
            <li className="px-3 py-1.5 text-[13px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
              News
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}