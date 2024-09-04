import Autocomplete from '@mui/joy/Autocomplete';
import { useEffect, useState } from 'react';

const contactList = [
  { title: 'Ashish Singh', id: 1 },
  { title: 'Sonali Singh', id: 2 },
  { title: 'Rahul Murthi', id: 3 }
];

const files = [
  { title: 'Restaurant Inspection.csv', id: 1 },
  { title: 'Survey Analysis', id: 2 },
  { title: 'Restaurant Analysis', id: 3 }
]

export default function AutocompleteInput({ placeholder, isContactList, isFilesAutoComplete}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isContactList) {
      setData(contactList);
    }
    if(isFilesAutoComplete) {
      setData(files);
    }
  }, [isContactList, data, isFilesAutoComplete]);

  return (
    <Autocomplete
      multiple
      id="tags-default"
      placeholder={placeholder}
      options={data}
      getOptionLabel={(option) => option.title}
      defaultValue={isFilesAutoComplete && data[0]}
    />
  );
}