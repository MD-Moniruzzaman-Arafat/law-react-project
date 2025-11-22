import { Link } from 'react-router';
import img from '../../assets/doctor-sample.png';

export default function Card() {
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
            <span className="bg-[#e6f5ea] px-3 rounded-full">
              <small className="text-[#09982f]">Available</small>
            </span>
            <span className="bg-[#e8f0fc] px-3 rounded-full">
              <small className="text-[#176ae5]">5+ Years Experience</small>
            </span>
          </div>
          <h2 className="card-title">Awlad Hossain</h2>
          <p>Criminal Expert</p>
          <p>
            <small className="flex items-center">License No: BD 12451254</small>
          </p>
          <Link
            to={'/details'}
            className="btn btn-outline rounded-full text-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
