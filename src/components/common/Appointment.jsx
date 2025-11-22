export default function Appointment() {
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
          <span className="bg-[#e6f5ea] px-3 rounded-full">
            <small className="text-[#09982f] font-semibold">
              Lawyer Available Today
            </small>
          </span>
        </div>
        <div>
          <span>
            <small className="bg-[#fff5e5] text-[#ffa000] border px-2 py-0.5 rounded-2xl border-[#f3e0bb]">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </small>
            <button className="btn w-full bg-[#0EA106] text-white rounded-full mt-5">
              Book Appointment Now
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
