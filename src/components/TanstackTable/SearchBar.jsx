import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/joy";

export default function SearchBar({ globalFiltering, setGlobalFiltering }) {
  return (
    <Input
      sx={{backgroundColor : 'white', border: '1px solid rgba(137, 147, 158, 0.25)'}}
      placeholder="Search"
      variant="outlined"
      value={globalFiltering}
      startDecorator={<SearchIcon />}
      onChange={(e) => setGlobalFiltering(e.target.value)}
    />
  );
}
