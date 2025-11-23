import { Bounce, toast } from 'react-toastify';

export default function AppointmentInfo({
  appointment,
  appointments,
  setAppointments,
}) {
  const removeAppointment = (id) => {
    const updated = appointments.filter((item) => item.id !== id);

    localStorage.setItem('appointment', JSON.stringify(updated));

    setAppointments(updated);

    toast.error('Appointment cancelled successfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  return (
    <>
      <div className="border border-gray-300 p-10 rounded-4xl my-10">
        <div className="flex flex-wrap justify-between mb-5 items-center border-b border-dashed border-gray-300">
          <div>
            <p className="font-semibold">{appointment.name}</p>
            <small>{appointment.speciality}</small>
          </div>
          <div>
            <small>Appointment Fee : {appointment.fee} Taka</small>
          </div>
        </div>
        <button
          onClick={() => removeAppointment(appointment.id)}
          className="btn btn-outline w-full border-red-600 text-red-600 rounded-full"
        >
          Cancel Appointment
        </button>
      </div>
    </>
  );
}
