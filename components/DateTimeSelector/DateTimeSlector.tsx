"use client"

import React, { useState, useRef, useEffect } from 'react';
import styles from './DateTimeSelector.module.css';

const DateTimeSelector: React.FC = () => {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const dateTimeSelectorRef = useRef<HTMLDivElement>(null);
  const dateTimePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dateTimeSelectorRef.current &&
        !dateTimeSelectorRef.current.contains(event.target as Node)
      ) {
        setShowDateTimePicker(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const now = new Date();
    setSelectedDate(now.toLocaleDateString('en-GB'));
    setSelectedTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const toggleDateTimePicker = () => {
    setShowDateTimePicker(!showDateTimePicker);
  };

  const handleSetDateTime = () => {
    const dateInput = (document.getElementById('dateInput') as HTMLInputElement).value;
    const timeInput = (document.getElementById('timeInput') as HTMLInputElement).value;

    if (dateInput) {
      setSelectedDate(new Date(dateInput).toLocaleDateString('en-GB'));
    }
    if (timeInput) {
      setSelectedTime(new Date(`1970-01-01T${timeInput}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }
    setShowDateTimePicker(false);
  };

  return (
    <div className={styles.pickupTime} ref={dateTimeSelectorRef} >
      <div className={styles.dateTimeSelector} onClick={toggleDateTimePicker}>
        <div className={styles.icon}>
          <img src="Photos/icons/calender.svg" alt="Calendar Icon" className={styles.calenderIcon} />
        </div>
        <div className={styles.dateTime}>
          <span className={styles.date}>{selectedDate}</span>
          <span className={styles.time}>{selectedTime}</span>
        </div>
      </div>
      {showDateTimePicker && (
        <div className={styles.dateTimePicker} ref={dateTimePickerRef}>
          <input type="date" id="dateInput" />
          <input type="time" id="timeInput" />
          <button onClick={handleSetDateTime}>Set</button>
        </div>
      )}
    </div>
  );
};

export default DateTimeSelector;
