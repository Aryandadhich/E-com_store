import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Switch } from '@mui/material';

interface MUISwitchProps {
  checked?: boolean; // Accept checked prop
  onChange?: (checked: boolean) => void;
}

export default function UseSwitchesCustom({ checked = false, onChange }: MUISwitchProps) {
  return <MUISwitch checked={checked} onChange={onChange} />;
}

function MUISwitch({ checked = false, onChange }: MUISwitchProps) {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked); // Notify parent of the change
    }
  };

  return (
    <Switch
      checked={isChecked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Theme switch' }} // Accessibility label
      icon={<span style={{ fontSize: 18 }}>☀</span>} // Sun icon
      checkedIcon={<span style={{ fontSize: 18 }}>☾</span>} // Moon icon
    />
  );
}
const blue = {
  700: '#0059B2',
};

const grey = {
  400: '#B0B8C4',
  800: '#303740',
};

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blue[700]};
  width: 30px;
  height: 30px;
  border-radius: 8px;
  top: 3px;
  left: 4px;
  transition: tran;
`;
