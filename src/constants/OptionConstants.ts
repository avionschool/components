import { DropdownOption } from '../components/Dropdown/Dropdown.types';
import { CheckboxOption } from '../components/Checkbox/Checkbox.types';

const DropdownConstants: DropdownOption[] = [
  {
    value: 'avion_2020',
    display: 'Avion School 2020',
    disabled: false,
  },
  {
    value: 'lambda',
    display: 'Lambda School 2020',
    disabled: true
  }
];

const CheckboxConstants: CheckboxOption[] = [
  {
    value: 'avion_2020',
    display: 'Avion School 2020',
    disabled: false,
    id: 'avion_2020'
  },
  {
    value: 'lambda',
    display: 'Lambda School 2020',
    disabled: true,
    id: 'lambda'
  }
];


export {
  DropdownConstants,
  CheckboxConstants
};
