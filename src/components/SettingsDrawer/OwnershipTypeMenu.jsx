import EyeIcon from '../../assets/images/eye.svg'
import EditIcon from '../../assets/images/edit.svg'
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
        <Option value="view">
          <img src={EyeIcon} />
          <span>Can View</span>
        </Option>
        <Option value="edit">
          <img src={EditIcon} />
          <span>Can Edit</span>
        </Option>
      </Select>
    );
  }