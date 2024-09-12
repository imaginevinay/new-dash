// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// import Dropdown from '@mui/joy/Dropdown';
// import * as Styled from './ChartCreationGrid.styles'
import { Option, Select, selectClasses } from '@mui/joy';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function ChartSelectorMenu() {
    const { selectedChart: {types}, setSelectedChartData } = useContext(AppContext);

    const handleChange = (newValue) => {
        setSelectedChartData(prevData => {
            // Create a deep copy of the previous data
            const newData = JSON.parse(JSON.stringify(prevData));
            
            // Add the new key to the layout object
            newData.layout.barmode = newValue;
            if(startsWithH(newValue)){
                newData.data.forEach(elem => {
                    elem['orientation'] = 'h'
                });

                newData.layout.barmode = removeInitialLowercaseH(newValue)
            } else {
                newData.data.forEach(elem => {
                    elem['orientation'] = null
                });
                newData.layout.barmode = newValue
            }
            
            // Return the updated data
            return newData;
          });
    }

    function startsWithH(str) {
      return str.toLowerCase().startsWith("h");
    }

    function removeInitialLowercaseH(str) {
      if (str.startsWith("h")) {
        return str.slice(1);
      }
      return str;
    }
    
  return (
    <Select
      placeholder="Select a chart"
      defaultValue={types[0]?.id}
      indicator={<KeyboardArrowDown />}
      onChange={(event, newValue) => handleChange(newValue)}
      sx={{
        width: '16.25rem',
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
        {types.map(item => (
            <Option key={item.id} value={item.id}>{item.name}</Option>
        ))}
      
    </Select>
  );
}
