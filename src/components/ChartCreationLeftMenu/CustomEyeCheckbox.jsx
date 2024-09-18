import { useState } from 'react';
import { Box, IconButton, List, ListItem, Menu, MenuItem, Checkbox, Typography, Input } from '@mui/joy';
import { Visibility, VisibilityOff, KeyboardArrowRight, Close, Search } from '@mui/icons-material';

const CustomEyeCheckbox = ({ onSelectionChange, initialYearVisible = true, initialQuarterVisible = true, initialSelectedMonths = ['Jan', 'Feb']}) => {
  const [yearVisible, setYearVisible] = useState(initialYearVisible);
  const [quarterVisible, setQuarterVisible] = useState(initialQuarterVisible);
  const [selectedMonths, setSelectedMonths] = useState(initialSelectedMonths);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);


  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleYearToggle = () => {
    const newYearVisible = !yearVisible;
    setYearVisible(newYearVisible);
    notifyParent(newYearVisible, quarterVisible, selectedMonths);
  };
  
  const handleQuarterToggle = () => {
    const newQuarterVisible = !quarterVisible;
    setQuarterVisible(newQuarterVisible);
    notifyParent(yearVisible, newQuarterVisible, selectedMonths);
  };
  
  const handleMonthClick = (event) => {
    if (!yearVisible && !quarterVisible) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMonthSelect = (month) => {
    const newSelectedMonths = selectedMonths.includes(month) 
      ? selectedMonths.filter(m => m !== month) 
      : [...selectedMonths, month];
    setSelectedMonths(newSelectedMonths);
    notifyParent(yearVisible, quarterVisible, newSelectedMonths);
  };

  const handleSelectAll = () => {
    const newSelectedMonths = selectedMonths.length === months.length ? [] : [...months];
    setSelectedMonths(newSelectedMonths);
    notifyParent(yearVisible, quarterVisible, newSelectedMonths);
  };

  const filteredMonths = months.filter(month => 
    month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const notifyParent = (updatedYear, updatedQuarter, updatedMonths) => {
    onSelectionChange({
      yearVisible: updatedYear,
      quarterVisible: updatedQuarter,
      selectedMonths: updatedMonths
    });
  };

  return (
    <Box >
      <List sx={{padding: '0 2.5rem'}}>
        <ListItem
          endAction={
            <IconButton onClick={handleYearToggle}>
              {yearVisible ? <Visibility sx={{color: 'black'}}/> : <VisibilityOff sx={{color: 'black'}}/>}
            </IconButton>
          }
        >
          <Typography level='body-sm'>Year</Typography>
        </ListItem>
        <ListItem
          endAction={
            <IconButton onClick={handleQuarterToggle}>
              {quarterVisible ? <Visibility sx={{color: 'black'}}/> : <VisibilityOff sx={{color: 'black'}}/>}
            </IconButton>
          }
        >
          <Typography level='body-sm'>Quarter</Typography>
        </ListItem>
        <ListItem
          endAction={
            <IconButton 
              onClick={handleMonthClick}
              disabled={yearVisible || quarterVisible}
            >
              <KeyboardArrowRight sx={{display : yearVisible || quarterVisible ? 'none': 'block', color: 'black'}}/>
            </IconButton>
          }
        >
          <Typography level='body-sm'>Month</Typography>
        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        placement="right"
        className='hello'
        sx={{
          '& .MuiMenu-paper': {
            
          },
        }}
      >
        <Box sx={{width: '21.875rem', height: '21.875rem', }}>
          <Box sx={{ p: 2, flexShrink: 0 }}>
            <Typography level="body-md" fontWeight={600} sx={{ mb: 2, pr: 4 }}>
              Select Months
              <IconButton 
                size="sm" 
                onClick={handleClose}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <Close />
              </IconButton>
            </Typography>
            <Input
              startDecorator={<Search />}
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', px: 2, pb: 2 }}>
            <MenuItem onClick={handleSelectAll}>
              <Checkbox
                sx={{width:'1rem', height: '1rem', mr: '0.62rem'}}
                checked={selectedMonths.length === months.length}
                indeterminate={selectedMonths.length > 0 && selectedMonths.length < months.length}
              />
              <Typography level='body-sm'>Select All</Typography>
            </MenuItem>
            {filteredMonths.map((month) => (
              <MenuItem key={month} onClick={() => handleMonthSelect(month)}>
                <Checkbox sx={{width:'1rem', height: '1rem', mr: '0.62rem'}} checked={selectedMonths.includes(month)} />
                <Typography level='body-sm'>{month}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default CustomEyeCheckbox;