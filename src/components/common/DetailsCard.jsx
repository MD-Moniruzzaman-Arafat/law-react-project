import img from '../../assets/lawyer.png';

export default function DetailsCard({ data }) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm my-10 ">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body justify-center">
          <div className="">
            <small className="text-[#176ae5] px-3 py-1 rounded-full bg-[#e8f0fc]">
              {data?.experience} Experience
            </small>
          </div>
          <h2 className="card-title">{data?.name}</h2>
          <div className="flex flex-wrap items-center gap-5">
            <span>
              <small>{data?.speciality}</small>
            </span>
            <span>
              <small>License No: {data?.licenseNumber}</small>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span>
              <small className="font-bold">Availability :</small>
            </span>
            {data?.availability.map((day, index) => (
              <span key={index}>
                <small className="bg-[#fff5e5] text-[#ffa000] border px-2 py-0.5 rounded-2xl border-[#f3e0bb]">
                  {day}
                </small>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span>
              <small className="font-bold">Consultation Fee :</small>
            </span>
            <span>
              <small className="font-bold text-[#0ea106]">
                Taka : {data?.fee}
              </small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
