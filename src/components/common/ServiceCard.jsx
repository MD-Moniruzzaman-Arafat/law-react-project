import CountUp from 'react-countup';

export default function ServiceCard({ img, count, description }) {
  return (
    <>
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <img src={img} alt="" className="w-15" />
          <h1 className="text-2xl font-bold">
            <CountUp end={count} duration={5} enableScrollSpy />+
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
