import { Link } from 'react-router';
import img from '../../assets/lawyer.png';
import { getAvailable } from '../../utility';

export default function Card({ lawyer }) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={img}
            alt="Movie"
            className="p-5 max-w-[160px] rounded-4xl"
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap gap-2 items-center">
            {getAvailable(lawyer.availability) ? (
              <span className="bg-[#e6f5ea] px-3 rounded-full">
                <small className="text-[#09982f]">Available</small>
              </span>
            ) : (
              <span className="bg-[#fdecea] px-3 rounded-full">
                <small className="text-[#d93025]">Not Available</small>
              </span>
            )}
            <span className="bg-[#e8f0fc] px-3 rounded-full">
              <small className="text-[#176ae5]">
                {lawyer.experience} Experience
              </small>
            </span>
          </div>
          <h2 className="card-title">{lawyer.name}</h2>
          <p>{lawyer.speciality}</p>
          <p>
            <small className="flex items-center">
              License No: {lawyer.licenseNumber}
            </small>
          </p>
          <Link
            to={`/details/${lawyer.id}`}
            className="btn btn-outline rounded-full text-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
