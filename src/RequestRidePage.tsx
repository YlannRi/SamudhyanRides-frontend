import React from 'react';

const RequestRidePage: React.FC = () => {
  return (
    <div className="request-ride-page" style={{ padding: '20px' }}>
      <h2 className="uber-logo" style={{ marginBottom: '20px' }}>
        Request a ride
      </h2>

      <div className="request-form">
        {/* Destination Input */}
        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="destination" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Destination
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Where to?"
            style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Time of Arrival Input */}
        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="timeOfArrival" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Time of Arrival
          </label>
          <input
            type="time"
            id="timeOfArrival"
            style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Action Buttons */}
        <div className="action-buttons" style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
          <button style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestRidePage;