// import SearchIcon from "@mui/icons-material/Search";
// import PropTypes from "prop-types";
import {StyledInput} from './TanstackTable.styles'

export default function MiniSearchBar({filterByColumn,columnFiltering,setColumnFiltering}) {
  const taskName =
    columnFiltering.find((f) => f.id === filterByColumn)?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFiltering((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );

  return (
    <StyledInput
      type="text"
      placeholder="Search Value"
      // startDecorator={<SearchIcon />}
      value={taskName}
      onChange={(e) => onFilterChange(filterByColumn, e.target.value)}
    />
  );
}

MiniSearchBar.propTypes = {
  // placeholder: PropTypes.string.isRequired,
};
