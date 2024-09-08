import { TextField } from '@mui/joy';
import Autocomplete from '@mui/joy/Autocomplete';
import { useEffect, useState } from 'react';

const contactList = [
  { title: 'ashishsingh(owner)', id: 1 },
  { title: 'sonalisingh(owner)', id: 2 },
  { title: 'rahulmurthi(owner)', id: 3 }
];

const files = [
  { title: 'Restaurant Inspection.csv', id: 1 },
  { title: 'Survey Analysis', id: 2 },
  { title: 'Restaurant Analysis', id: 3 }
]

export default function AutocompleteInput({ placeholder, isContactList, isFilesAutoComplete}) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);


  useEffect(() => {
    if (isContactList) {
      setData(contactList);
    }
    if (isFilesAutoComplete) {
      setData(files);
    }
  }, [isContactList, isFilesAutoComplete]);

  useEffect(() => {
    // Set initial value only when data is loaded and value is empty
    if (data.length > 0 && value.length === 0) {
      setValue([data[0]]);
    }
  }, [data]);

  // const getDefaultValue = () => {
  //   if(isContactList) return data[0]
  // }

  return (
    <Autocomplete
      multiple
      id="tags-default"
      placeholder={placeholder}
      options={data}
      getOptionLabel={(option) => option.title}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => ( <TextField {...params} placeholder={placeholder} /> )}
      sx={{p : '0.88rem'}}
    />
  );
}