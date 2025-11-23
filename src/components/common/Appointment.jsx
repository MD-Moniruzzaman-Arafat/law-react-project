import { useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { getAvailable } from '../../utility';

export default function Appointment({ data }) {
  const navigate = useNavigate();
  const handleAppointment = (data) => {
    // Step 1: Get stored data
    let appointment = JSON.parse(localStorage.getItem('appointment')) || [];

    // Step 2: Check if already exists
    const exists = appointment.find((app) => app.id === data.id);

    if (exists) {
      toast.warning(
        'You have already booked an appointment with this lawyer.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        }
      );
      return;
    }

    // Step 3: Add new appointment
    appointment.push(data);

    // Step 4: Save back to localStorage
    localStorage.setItem('appointment', JSON.stringify(appointment));

    console.log(appointment);
    navigate('/my-bookings');

    toast.success('Appointment booked successfully!', {
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
      <div className="border border-gray-300 rounded-lg p-6 my-10">
        <h1 className="text-center font-bold border-b border-dashed border-gray-300 pb-4">
          Book an Appointment
        </h1>
        <div className="flex justify-between items-center border-b py-2 mb-4 border-gray-300 ">
          <span className="font-bold">
            <p>Availability</p>
          </span>
          {getAvailable(data.availability) ? (
            <span className="bg-[#e6f5ea] px-3 rounded-full">
              <small className="text-[#09982f]">Lawyer Available Today</small>
            </span>
          ) : (
            <span className="bg-[#fdecea] px-3 rounded-full">
              <small className="text-[#d93025]">
                Lawyer Not Available Today
              </small>
            </span>
          )}
        </div>
        <div>
          <span>
            <small className="bg-[#fff5e5] text-[#ffa000] border px-2 py-0.5 rounded-2xl border-[#f3e0bb]">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </small>
            {getAvailable(data.availability) ? (
              <button
                onClick={() => handleAppointment(data)}
                className="btn w-full bg-[#0EA106] text-white rounded-full mt-5"
              >
                Book Appointment Now
              </button>
            ) : (
              <button
                disabled
                className="btn w-full bg-[#fdecea] text-[#d93025] rounded-full mt-5"
              >
                Book Appointment Later
              </button>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
