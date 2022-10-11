# avionschool-components

avionschool-components is the component library used to build Avionschool projects.

### Usage
To add to a repository, clone the latest version into your project's `src` folder.
For aliasing, add the following lines to your `webpack.config.js` and `tsconfig.js`.

```javascript
  // tsconfig.js
  {
    ...{
      ..."paths": {
        ...,
        "@components": ["./src/components/src/index.ts"]
      }
    }
  }
```

```javascript
  // webpack.config.js
  module.exports = {
    ...,
    resolve: {
      ...,
      alias: {
        ...,
        '@components': path.resolve(__dirname, "./src/components/src/index.ts"),
      }
    }
  }
```

You can now import from the library using `@components`:
```javascript
 import { Button, Datepicker } from '@components';

 const App = () => (
  <>
    <Button type="primary" round={true} text="Hello World"/>
    <Input placeholder="input component"/>
  </>
 );
```

## Components

###Box
A simple box component that can also be used for select options.

####Properties
#####`id`
Standard unique ID of an element
#####`isDisabled`
Decides if the box is disabled, and if it displays its requisite styles. 
#####`isSelected`
Decides if the box is selected and if it displays its requisite styles.
#####`handleClick`
Function that is called when the component is clicked.
#####`children`
Components that are rendered inside the box.
#####`isReadOnly`
Decides whether a box can be clicked or not. Similar to `isDisabled`, except it does not display the disabled styles.
#### Sample Usage
```javascript
import React from 'react';
import { Box } from '@components';

const SampleBoxComponent: React.FC = () => {
  return (
    <>
      <Box>
        <div className="sample class names">
          Sample Box
        </div>
      </Box>
    </>
  )
}
```


###Button
A button component!
####Properties
####`id`
Standard unique ID of an element
####`text`
The text displayed inside the button.
####`variant`
Button variant. Accepted values are `solid`, `ghost`, and `outline`.
####`disabled`
Decides whether the button is disabled.
####`status`
Shows the status of the button. Accepted values are `error`, `success`, and `warning`.
####`size`
Button size. If not specified, will scale to inner content. Accepted values are `small`, `medium`, `large`, and `full`.
####`icon`
Icon the button shows. Is of type `ReactNode`.
####`iconLocation`
Decides whether the icon appears to the left or to the right of the button's text. Accepted values are `left` and `right`. `left` is selected by default.
####`onClick`
Function that fires when the button is clicked.
####`className`
Additional tailwind classes you might want to add to the button.
####`round`
Decides whether your want the button to have rounded edges.
####`primary`
Decides if the button should use primary styling.
####`loading`
Turns the button's icon into a loading animation and renders the button unclickable. Boolean.

#### Sample Usage
```javascript
import React from 'react';
import { Button } from '@components';
import { BiSample } from 'react-icons/bi';

const ModifiedButton: React.FC = () => {
  return (
    <Button
      size="small"
      text="Sample Button"
      icon={<BiSample/>}
      variant="solid"
      round={true}
      iconLocation="left"
    />
  )
}
```

###Checkbox
A checkbox component. Wrap in a label or form tag.
####Properties
####`id`
Standard unique ID of an element.
####`value`
Value of the checkbox option. Is used in forms when selected.
####`disabled`
Decides whether the checkbox can be selected.
####`large`
Boolean property, increases the size of the checkbox when true.
####`label`
Label of the checkbox
####`name`
Name of the checkbox
####`checked`
Boolean property, decides if a checkbox is filled.
####`onChange`
Event fired when the checkbox `checked` property is changed.
####`showLabel`
Boolean value. When true, it shows the value of the label assigned to the checkbox.
####Sample Usage
```javascript
import React from 'react';
import { Checkbox } from '@components';

const SampleCheckbox: React.FC = () => {
  return (
    <Checkbox
      value="samplecheckbox"
      label="samplecheckbox"
      name="checkbox"
      checked={true}
      onChange={() => console.log('change')}
    />
  )
}
```

###Datepicker
Datepicker component
####Properties
####`id`
Standard unique ID of an element.
####`initialDate`
Default date of the datepicker.
####`placeholderText`
Placeholder text displayed when datepicker's input component is empty.
####`name`
Name passed to datepicker component, usually used in forms.
####`onChange`
Function called when the datepicker's value is changed.
####`value`
Value assigned to the datepicker.
####`isError`
Decides if the datepicker's input component will display the error values.
####Sample Usage
````javascript
import React, { useState } from 'react';
import { Datepicker } from '@components';

const SampleDatepicker: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date);

  return (
    <Datepicker
      initialDate={date}
      placeholderText="MM/DD/YYYY"
      id="datepickersample"
      name="datepickerdisplay"
      onChange={setDate}
      value={date}
    />
  )
}
````

###Dropdown
Dropdown/Select component
####Properties
####`id`
Standard unique ID of an element.
####`label`
Form Label for the component
####`isDisabled`
`Boolean`. Decides whether component is disabled
####`isWarning`
`Boolean`.  Displays component warning styles.
#### `isSuccess`
`Boolean`.  Displays component success styles.
####`placeholder`
Placeholder text
####`onChange`
onChange function for component
####`options`
Options to be displayed by the component


###Form Control
Form Control Component
####Properties
####`label`
Label for form control component
####`helperText`
Helper text displayed above its controlled component
####`messageText`
Message text to be displayed in case of success/error/warning
####`isDisabled`
`Boolean`. Decides whether component and its children are disabled.
####`isRequired`
`Boolean`. Decides whether form item is required
####`isWarning`
`Boolean`. Decides whether it should display warning status
####`isSuccess`
`Boolean`. Decides whether it should display success status
####`children`
`ReactNode[]`. Decides which children to display inside component

###Input
Input Component
####Properties
####`id`
Standard unique ID of an element.
####`name`
Name for component
####`label`
Label for component
####`isDisabled`
`Boolean`. Decides whether component and its children are disabled.
####`isRequired`
`Boolean`. Decides whether form item is required
####`isWarning`
`Boolean`. Decides whether it should display warning status
####`isSuccess`
`Boolean`. Decides whether it should display success status
####`placeholder`
`String`. Placeholder for component in case it is empty.
####`onChange`
Function called when value of form changes
####`value`
Value passed inside component in case you need to use it as a externally controlled component
####`onPaste`
Function called when paste event is triggered
####`initialValue`
Initial value of component
####`className`
Any classNames or styles needed for the component
####`maxLength`
Maximum length accepted by component
####`maskPlaceholder`
In case of input masking, defines the placeholder element while fulfilled length is not met.
####`mask`
Pattern for masking of input element.
See https://www.npmjs.com/package/react-input-mask for guidelines.
####`alwaysShowMask`
`Boolean`. Defines whether mask should be shown at all times or not
####`onKeyDown`
Function called on keypress down. Can be used for mobile devices

###Radio
Radio Component
`NOTE: This is purely a radio component, wrap it with corresponding label and name to create a functional radio group.`
####Properties
####`id`
Standard unique ID of an element.
####`name`
Name for component
####`label`
Label for component
####`value`
Value of radio item
####`disabled`
`Boolean`. Decides whether radio item is disabled.
####`checked`
`Boolean`. Decides whether radio item is checked.
####`onChange`
Function called when value of radio button is changed
####`showLabel`
`Boolean`. Decides whether label passed in is shown. Can be disabled for custom CSS/Elements on label


###Sidebar Items
Sidebar Item Component
NOTE: Pass in an array of the ff properties into the `Sidebar` component's`items` prop to use:
####`link`
Link to where the item redirects to
####`name`
Name to be displayed by sidebar item
####`isActive`
`Boolean`. Decides whether item is the currently selected one.
####`disabled`
`Boolean`. Decides whether sidebar item is disabled.
####`icon`
Corresponding icon that is displayed beside the name. Use Boxicons.
####`onClick`
Function called when item is clicked

###Sidebar
Sidebar Component
####`logo`
Logo displayed on desktop view
####`logoAlt`
Alternate display in case logo is not viewable
####`mobileLogo`
Logo on mobile view
####`mobileLogoAlt`
Alternate display in case `mobileLogo` is not viewable.
####`items`
Array of items as specified in `Sidebar Items`.
####`className`
Any tailwind or css classes needed for further customization of the sidebar.

###TextArea
TextArea Component
####Properties
####`id`
Standard unique ID of an element.
####`name`
Name for component
####`label`
Label for component
####`isDisabled`
`Boolean`. Decides whether component and its children are disabled.
####`isRequired`
`Boolean`. Decides whether form item is required
####`isWarning`
`Boolean`. Decides whether it should display warning status
####`isSuccess`
`Boolean`. Decides whether it should display success status
####`placeholder`
`String`. Placeholder for component in case it is empty.
####`onChange`
Function called when value of form changes
####`value`
Value passed inside component in case you need to use it as a externally controlled component
####`initialValue`
Initial value of component
####`className`
Any classNames or styles needed for the component
####`maxLength`
Maximum length accepted by component
####`cols`
`Number`. Number of columns shown in textarea component.
####`rows`
`Number`. Number of rows shown in textarea component.
