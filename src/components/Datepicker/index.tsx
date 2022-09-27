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

const getNewDate = (initial_date: Date, new_date: Date) => {
  let newDate: Date;
  // Converting to dayjs
  const dayjsInitialDate = dayjs(initial_date);
  const dayjsNewDate = dayjs(new_date);
  // Check if only year has changed
  if (dayjsInitialDate.year() !== dayjsNewDate.year()) {
    // Retain month and date
    newDate = new Date(dayjsNewDate.year(), dayjsInitialDate.month(), dayjsInitialDate.date());
  }
  // Check if only month has changed
  else if (dayjsInitialDate.month() !== dayjsNewDate.month()) {
    // Retain date
    newDate = new Date(dayjsNewDate.year(), dayjsNewDate.month(), dayjsInitialDate.date());
  } else {
    newDate = new_date;
  }

  return newDate;
};

const Datepicker: React.FC<DatepickerProps> = ({
  initialDate,
  placeholderText = "Select date",
  id,
  name,
  onChange,
  value,
  isError = false
}) => {
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const [startDate, setStartDate] = useState<Date>(typeof(value) === 'string' ? new Date(value) : dayjs().subtract(18, 'year').toDate());
  const [showMonthPicker, setShowMonthPicker] = useState<boolean>(false);
  const [showYearPicker, setShowYearPicker] = useState<boolean>(false);

  const closeCalendarCallback = () => {
    setShowMonthPicker(false);
    setShowYearPicker(false);
  };

  useEffect(() => {
    if (typeof(value) === 'string') {
      setStartDate(new Date(value));
    }
  }, [value])

  const handleDateOnChange = (date: Date, e: ChangeEvent<any>) => {

    // Check if only year or month has changed
    // This is because the built-in react-datepicker's yearpicker resets the month and date.
    // Overriding it so that doesn't happen
    const newDate = getNewDate(startDate ? startDate : new Date(), date)

    // Check if monthpicker is open
    if (showMonthPicker) {
      setShowMonthPicker(false);
    }

    if (showYearPicker) {
      setShowMonthPicker(true);
      setShowYearPicker(false);
    }

    onChange ? onChange(name, dayjs(newDate).format('YYYY-MM-DD')) : '';

    setStartDate(newDate);
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
        shouldCloseOnSelect={showMonthPicker || showYearPicker ? false : true}
        placeholderText={placeholderText}
        customInput={
          <Input
            name={name}
            id={id}
            isError={isError}
            value={value?.toString()}
          />
        }
        value={value ? dayjs(value).format('DD/MM/YYYY') : dayjs().subtract(18, 'year').format('DD/MM/YYYY')}
        dateFormat="yyyy-mm-dd"
        popperPlacement="top-start"
        data-testid={id}
        withPortal={width < 640 ? true : false}
      />
    </>
  );
};

export default Datepicker;
