import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/joy";

export default function SearchBar({ globalFiltering, setGlobalFiltering }) {
  return (
    <Input
      placeholder="Search"
      variant="outlined"
      value={globalFiltering}
      startDecorator={<SearchIcon />}
      onChange={(e) => setGlobalFiltering(e.target.value)}
    />
  );
}
