import React from 'react';

type Trip = {
  id: number;
  title: string;
  meta: string;
  price: string;
  action: 'Rebook' | 'Reserve';
};

const pastTrips: Trip[] = [
  {
    id: 1,
    title: 'Second Bridge',
    meta: '21 Nov · 00:17',
    price: '£6.60',
    action: 'Rebook',
  },
  {
    id: 2,
    title: 'University of Bath',
    meta: '13 Nov · 22:03',
    price: '£7.63 · 2 drivers',
    action: 'Rebook',
  },
  {
    id: 3,
    title: 'University of Bath',
    meta: '31 Oct · 03:11',
    price: '£11.66',
    action: 'Rebook',
  },
  {
    id: 4,
    title: 'University of Bath',
    meta: '21 Oct · 03:25',
    price: '£10.14',
    action: 'Rebook',
  },
  {
    id: 5,
    title: 'University of Bath',
    meta: '17 Oct · 03:05',
    price: '£10.99 · 2 drivers',
    action: 'Rebook',
  },
  {
    id: 6,
    title: 'Bristol Airport (BRS)',
    meta: '14 Oct · 17:19',
    price: '£42.05',
    action: 'Reserve',
  },
];

const ActivityPage: React.FC = () => {
  return (
    <>
      <header className="uber-header">
        <h1 className="activity-title">Activity</h1>
      </header>

      {/* Upcoming */}
      <section className="uber-section">
        <h2 className="section-title">Upcoming</h2>

        <div className="card activity-upcoming-card">
          <div>
            <div className="activity-upcoming-title">
              You have no upcoming trips
            </div>
            <div className="activity-upcoming-subtitle">
              Reserve your trip →
            </div>
          </div>
          <div className="activity-upcoming-icon">📅</div>
        </div>
      </section>

      {/* Past list */}
      <section className="uber-section">
        <h2 className="section-title">Past</h2>

        <div className="past-list">
          {pastTrips.map((trip) => (
            <div key={trip.id} className="card trip-row-card">
              <div className="trip-row-left">
                <div className="trip-car-icon">🚗</div>
                <div className="trip-row-text">
                  <div className="trip-row-title">{trip.title}</div>
                  <div className="trip-row-meta">{trip.meta}</div>
                  <div className="trip-row-price">{trip.price}</div>
                </div>
              </div>

              <button className="pill pill-solid trip-row-button">
                {trip.action}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ActivityPage;
