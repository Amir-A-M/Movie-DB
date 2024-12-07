import React, { useRef, useState } from 'react';
import { Box } from '../../ui/box';
import { Input, InputField, InputIcon, InputSlot } from '../../ui/input';
import { ChevronDownIcon, DownloadIcon, SearchIcon } from '../../ui/icon';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '../../ui/select';
import { router } from 'expo-router';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');

  const searchRef = useRef(null);

  function handleSearch() {
    const encodedTitle = encodeURIComponent(searchText.trim());
    router.push(`/search/results?query=${encodedTitle}&isSearch=true`);
  }

  return (
    <Box>
      <Input size='md' className='bg-white border-none mb-3'>
        <InputField
          placeholder='Search for a Movie...'
          className='min-w-7 text-black'
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          ref={searchRef}
        />
        <InputSlot className='pe-3' onPress={handleSearch}>
          <InputIcon
            as={SearchIcon}
            className='hover:text-black transition-colors'
          />
        </InputSlot>
      </Input>

      {/* <Select>
        <SelectTrigger size='md' className='bg-white border-none'>
          <SelectInput placeholder='Select option' className='text-black' />
          <SelectIcon className='mr-3' as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label='UX Research' value='ux' />
            <SelectItem label='Web Development' value='web' />
            <SelectItem
              label='Cross Platform Development Process'
              value='Cross Platform Development Process'
            />
            <SelectItem label='UI Designing' value='ui' isDisabled={true} />
            <SelectItem label='Backend Development' value='backend' />
          </SelectContent>
        </SelectPortal>
      </Select> */}
    </Box>
  );
};

export default SearchForm;
