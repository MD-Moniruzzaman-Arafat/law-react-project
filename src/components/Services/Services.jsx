import doctor from '../../assets/success-doctor.png';
import patients from '../../assets/success-patients.png';
import review from '../../assets/success-review.png';
import staffs from '../../assets/success-staffs.png';
import ServiceCard from '../common/ServiceCard';
import Title from '../common/Title';

export default function Services() {
  return (
    <div className="my-20">
      <Title
        title={'We Provide Best Law Services'}
        description={
          'Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. '
        }
      />
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 mt-5">
        <ServiceCard img={doctor} count={199} description={'Total Lawyer'} />
        <ServiceCard img={review} count={467} description={'Total Reviews'} />
        <ServiceCard
          img={patients}
          count={1900}
          description={'Cases Initiated'}
        />
        <ServiceCard img={staffs} count={300} description={'Total Stuffs'} />
      </div>
    </div>
  );
}
