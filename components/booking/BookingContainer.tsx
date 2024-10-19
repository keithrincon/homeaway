'use client';
import React from 'react';
import { useProperty } from '@/utils/store';
import ConfirmBooking from './ConfirmBooking';
import BookingForm from './BookingForm';

function BookingContainer() {
  const { range } = useProperty((state) => state);
  if (!range || !range.from || !range.to) return null;

  if (range.to.getTime() === range.from.getTime()) return null;
  // atleast 1 day. If both are are equal/not atleast 1 day. Return null

  return (
    <div className='w-full'>
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
}

export default BookingContainer;