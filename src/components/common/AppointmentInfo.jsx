export default function AppointmentInfo() {
  return (
    <>
      <div className="border border-gray-300 p-10 rounded-4xl my-10">
        <div className="flex flex-wrap justify-between mb-5 items-center border-b border-dashed border-gray-300">
          <div>
            <p className="font-semibold">Awlad Hossain</p>
            <small>Criminal Expert</small>
          </div>
          <div>
            <small>Appointment Fee : 2000 Taka</small>
          </div>
        </div>
        <button className="btn btn-outline w-full border-red-600 text-red-600 rounded-full">
          Cancel Appointment
        </button>
      </div>
    </>
  );
}
