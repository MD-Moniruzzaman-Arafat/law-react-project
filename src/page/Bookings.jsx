import { useEffect, useState } from 'react';
import AppointmentsList from '../components/AppointmentsList/AppointmentsList';
import CustomShapeBarChart from '../components/Chart/CustomShapeBarChart';
import Title from '../components/common/Title';

export default function Bookings() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem('appointment')) || [];
    setAppointments(storedAppointments);
  }, []);
  console.log(appointments);
  return (
    <div className="container mx-auto my-10 px-2">
      <div className="border border-gray-300 p-3 lg:p-10 mb-5 rounded-4xl">
        <CustomShapeBarChart appointments={appointments} />
      </div>
      <Title
        title={'My Today Appointments'}
        description={
          'Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.'
        }
      />
      {appointments.length === 0 ? (
        <p className="text-center my-10 font-bold">
          You have no appointments booked.
        </p>
      ) : (
        <AppointmentsList
          appointments={appointments}
          setAppointments={setAppointments}
        />
      )}
    </div>
  );
}
