import dayjs, { Dayjs } from 'dayjs';
import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import CalendarContainer from './CalendarContainer';
import { twMerge } from 'tailwind-merge';

import "./styles/react-datepicker.css";
import DatepickerHeader from './DatepickerHeader';
import { DatepickerProps } from './Datepicker.types';
import Input from '../Input';

const generateDayClassNames = (date: Date, startDate: Date) => {
  const dayClassName = [
    'rounded-full',
    'cursor-pointer',
    'bg-grayscale-light-white',
    'hover:bg-primary-100',
    'active:bg-primary-700',
    'active:text-grayscale-light-white',
    'text-black',
    'font-extrabold',
    'text-sm'
  ].join(' ');

  const selectedClasses = [
    'bg-primary-500',
    'text-grayscale-light-white',
    'hover:bg-primary-600',
    'active:bg-primary-700'
  ].join(' ');

  let dayClasses = dayClassName;
  // Check if today is current date
  const dayjsSelected = dayjs(date);

  if (dayjs(startDate).isSame(dayjsSelected, 'day')) {
    dayClasses = twMerge(
      `
        ${dayClassName}
        ${selectedClasses}
      `
    );
  };

  return dayClasses;
};

const Datepicker: React.FC<DatepickerProps> = ({
  initialDate,
  placeholderText = 'MM/DD/YYYY',
  id,
  name,
  onChange,
  value,
  isError = false
}) => {
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const [startDate, setStartDate] = useState<Date>(typeof(value) === 'string' ? new Date(value) : dayjs().subtract(18, 'year').toDate());
  const [showMonthPicker, setShowMonthPicker] = useState<boolean>(true);
  const [showYearPicker, setShowYearPicker] = useState<boolean>(false);
  const [showDayPicker, setShowDayPicker] = useState<boolean>(false);

  const closeCalendarCallback = () => {
    setShowMonthPicker(true);
    setShowYearPicker(false);
  };

  useEffect(() => {
    if (typeof(value) === 'string') {
      setStartDate(new Date(value));
    }
  }, [value])

  const handleStateChange = () => {
    // Check if monthpicker is open
    if (showMonthPicker) {
      setShowDayPicker(true);
      setShowYearPicker(false);
      setShowMonthPicker(false);
    }

    if (showDayPicker) {
      setShowDayPicker(false);
      setShowMonthPicker(true);
      setShowYearPicker(true);
    }

    if (showYearPicker) {
      setShowMonthPicker(true);
      setShowYearPicker(false);
      setShowDayPicker(false);
    }
  }

  const handleDateOnChange = (date: Date, e: ChangeEvent<any>) => {

    // Check if only year or month has changed
    // This is because the built-in react-datepicker's yearpicker resets the month and date.
    // Overriding it so that doesn't happen
    const newDate = getNewDate(startDate ? startDate : new Date(), date);

    // Handle datepicker state changes
    handleStateChange();

    // Check if computed date is null
    if (newDate) {
      onChange ? onChange(name, dayjs(newDate).format('YYYY-MM-DD')) : '';
      setStartDate(newDate);
    }
  }

  const yearPickerDateChange = (initial_date: Dayjs, new_date: Dayjs) => {
    // Retain month and date
    return new Date(new_date.year(), initial_date.month(), initial_date.date());
  }
  
  const getNewDate = (initial_date: Date, new_date: Date) => {
    let newDate: Date;
  
    // Check if valid date, otherwise return null
    if (!dayjs(new_date).isValid()) {
      return null;
    }
  
    // Converting to dayjs
    const dayjsInitialDate = dayjs(initial_date);
    const dayjsNewDate = dayjs(new_date);
  
    // Check if datepicker is on year mode
    switch (showYearPicker) {
      case false:
        // Check if only year has changed
        if (dayjsInitialDate.year() !== dayjsNewDate.year() && dayjsInitialDate.month() === dayjsNewDate.month()) {
          // Retain month and date
          newDate = new Date(dayjsNewDate.year(), dayjsInitialDate.month(), dayjsInitialDate.date());
        }
        // Check if only month has changed
        else if (dayjsInitialDate.month() !== dayjsNewDate.month() && dayjsInitialDate.date() === dayjsNewDate.date()) {
          // Retain date
          newDate = new Date(dayjsNewDate.year(), dayjsNewDate.month(), dayjsInitialDate.date());
        } else {
          newDate = new_date;
        }
        break;
      default:
        newDate = yearPickerDateChange(dayjsInitialDate, dayjsNewDate);
    }
  
    
    return newDate;
  }

  return (
    <>
      <DatePicker
        id={id}
        name={name}
        selected={startDate}
        onChange={(date: Date, e: ChangeEvent) => handleDateOnChange(date, e)}
        calendarContainer={CalendarContainer}
        dayClassName={(date: Date) => generateDayClassNames(date, startDate ? startDate : new Date())}
        renderCustomHeader={({
          date,
          increaseMonth,
          decreaseMonth,
          increaseYear,
          decreaseYear,
          changeYear
        }) => {
          return (
            DatepickerHeader({
              shownDate: date,
              increaseMonth,
              decreaseMonth,
              showMonthPicker,
              setShowMonthPicker,
              showYearPicker,
              setShowYearPicker,
              increaseYear,
              decreaseYear,
              changeYear
            })
          );
        }}
        showMonthYearPicker={showMonthPicker || showYearPicker}
        showFourColumnMonthYearPicker={showMonthPicker}
        showYearPicker={showYearPicker}
        onCalendarClose={closeCalendarCallback}
        shouldCloseOnSelect={showYearPicker ? true : false}
        placeholderText={placeholderText}
        customInput={
          <Input
            name={name}
            id={id}
            isError={isError}
            mask='99/99/9999'
            maskPlaceholder='*'
          />
        }
        popperPlacement="top-start"
        data-testid={id}
        withPortal={width < 640 ? true : false}
        onFocus={e => e.target.blur()}
      />
    </>
  );
};

export default Datepicker;
