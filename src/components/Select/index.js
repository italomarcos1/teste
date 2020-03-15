import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core'; // instale e troque pra '@unform/core' caso dê errado
import { TSelect } from './styles';

export default function AsyncSelect({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField /* error */ } = useField(name);

  const data = [{ label: 'TV' }, { label: 'Internet' }, { label: 'Outros' }];

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue(ref) {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(option => option.label);
        }
        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.label;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <TSelect
      cacheOptions
      defaultOptions={data}
      defaultValue={defaultValue}
      ref={selectRef}
      ddd
      has
      classNamePrefix="react-select"
      {...rest}
    />
  );
}

AsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
