import Hero from '../components/Hero/Hero';
import Lawyers from '../components/Lawyers/Lawyers';

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Hero />
        <Lawyers />
      </div>
    </>
  );
}
