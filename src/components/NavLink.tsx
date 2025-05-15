interface NavLinkProps {
  children: React.ReactNode;
  isActive: boolean;
  hasDropdown?: boolean;
  onClick: () => void;
  className?: string;
}

const NavLink = ({ children, isActive, hasDropdown = false, onClick, className = '' }: NavLinkProps) => {
  return (
    <a
      className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? 'text-accent' 
          : 'text-gray-700 hover:text-gray-900 hover:bg-secondary'
      } ${hasDropdown ? 'cursor-default' : 'cursor-pointer'} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;