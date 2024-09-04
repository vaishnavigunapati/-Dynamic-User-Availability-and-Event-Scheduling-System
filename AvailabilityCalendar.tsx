import axios from 'axios';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const AvailabilityCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = async ({ start, end }) => {
    const title = window.prompt('Enter your availability');
    if (title) {
      const newEvent = { start, end, title };
      setEvents([...events, newEvent]);

      // Send the availability to the backend
      try {
        await axios.post('http://localhost:5000/api/availabilities/add', {
          userId: 'USER_ID_HERE', // replace with dynamic user id
          day: moment(start).format('YYYY-MM-DD'),
          timeSlots: [{ startTime: start, endTime: end }]
        });
      } catch (error) {
        console.error('Error adding availability:', error);
      }
    }
  };

  return (
    <div style={{ height: 600 }}>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        defaultView="week"
        views={['week', 'day']}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default AvailabilityCalendar;
