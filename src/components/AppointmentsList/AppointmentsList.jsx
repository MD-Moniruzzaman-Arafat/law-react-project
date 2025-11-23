import AppointmentInfo from '../common/AppointmentInfo';

export default function AppointmentsList({ appointments, setAppointments }) {
  return (
    <>
      {appointments.map((appointment) => (
        <AppointmentInfo
          key={appointment.id}
          appointment={appointment}
          appointments={appointments}
          setAppointments={setAppointments}
        />
      ))}
    </>
  );
}
