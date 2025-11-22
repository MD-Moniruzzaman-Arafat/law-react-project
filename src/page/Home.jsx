import Hero from '../components/Hero/Hero';
import Lawyers from '../components/Lawyers/Lawyers';
import Services from '../components/Services/Services';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-2">
        <Hero />
        <Lawyers />
        <Services />
      </div>
    </>
  );
}
