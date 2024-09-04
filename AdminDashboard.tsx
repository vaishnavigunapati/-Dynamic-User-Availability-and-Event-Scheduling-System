import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    async function fetchAvailabilities() {
      const response = await axios.get('/api/availabilities');
      setAvailabilities(response.data);
    }
    fetchAvailabilities();
  }, []);

  return (
    <div>
      <h2>User Availability</h2>
      {availabilities.map((availability) => (
        <div key={availability.userId}>
          <h3>{availability.userId}</h3>
          {availability.timeSlots.map((slot) => (
            <p key={slot.startTime}>
              {new Date(slot.startTime).toLocaleString()} - {new Date(slot.endTime).toLocaleString()}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;

