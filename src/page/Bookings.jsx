import AppointmentsList from '../components/AppointmentsList/AppointmentsList';
import CustomShapeBarChart from '../components/Chart/CustomShapeBarChart';
import Title from '../components/common/Title';

export default function Bookings() {
  return (
    <div className="container mx-auto my-10 px-2">
      <div className="border border-gray-300 p-3 lg:p-10 mb-5 rounded-4xl">
        <CustomShapeBarChart />
      </div>
      <Title
        title={'My Today Appointments'}
        description={
          'Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.'
        }
      />
      <AppointmentsList />
      <AppointmentsList />
    </div>
  );
}
