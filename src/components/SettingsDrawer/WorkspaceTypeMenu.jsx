import { Select, Option } from "@mui/joy";

export default function WorkspaceTypeMenu({ selectedItem, onSelect }) {

  const handleSelect = (event, newValue) => {
    onSelect(newValue);
  };

  return (
    <Select
      sx={{ width: "11.5rem" }}
      placeholder="For Workspace"
      value={selectedItem}
      onChange={handleSelect}
    >
      <Option value="workspace">
        For Workspace
      </Option>
      <Option value="files">
        For Files
      </Option>
    </Select>
  );
}
