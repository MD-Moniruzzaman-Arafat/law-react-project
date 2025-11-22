import { useEffect, useState } from 'react';
import Card from '../common/Card';
import Title from '../common/Title';

export default function Lawyers() {
  const [lawyers, setLawyers] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setLawyers(data));
  }, []);
  return (
    <div className="my-20 ">
      <Title
        title={'Our Best Lawyers'}
        description={`Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {!show
          ? lawyers
              .slice(0, 4)
              .map((lawyer) => <Card key={lawyer.id} lawyer={lawyer} />)
          : lawyers.map((lawyer) => <Card key={lawyer.id} lawyer={lawyer} />)}
      </div>
      <div className="text-center mt-10">
        {!show ? (
          <button
            onClick={() => setShow(!show)}
            className="btn bg-[#0EA106] text-white rounded-full px-10"
          >
            Show All Lawyer
          </button>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="btn bg-[#0EA106] text-white rounded-full px-10"
          >
            Hide
          </button>
        )}
      </div>
    </div>
  );
}
