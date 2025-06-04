import Input from "../atoms/Input";

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className="search-bar">
      <Input
        className="search-bar__input"
        placeholder="Search pairs..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
