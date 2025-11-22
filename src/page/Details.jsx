import { useLoaderData } from 'react-router';
import Appointment from '../components/common/Appointment';
import DetailsCard from '../components/common/DetailsCard';
import Title from '../components/common/Title';

export default function Details() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto px-2">
      <div className="border border-gray-300 rounded-lg p-6 my-10">
        <Title
          title={'Lawyer’s Profile Details'}
          description={
            'Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.'
          }
        />
      </div>
      <DetailsCard data={data} />
      <Appointment data={data} />
    </div>
  );
}
