import { Select, Option } from "@mui/joy";

export default function WorkspaceMenu({ onSelect }) {
  const handleSelect = (workspace) => {
    onSelect(workspace);
  };

  return (
    <Select
      sx={{
        minWidth: "100%",
        "& .MuiSelect-popper": {
          width: "100%",
        },
      }}
      placeholder="Select from existing workspace"
    >
      <Option
        value="restaurant"
        onClick={() => handleSelect("Restaurant Inspection")}
      >
        Restaurant Inspection
      </Option>
      <Option value="survey" onClick={() => handleSelect("Survey population")}>
        Survey population
      </Option>
    </Select>
  );
}
