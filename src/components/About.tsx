import SectionHeading from './SectionHeading';
import Image from 'next/image';
import aboutImage from '@/assets/frames/Frame 20115.png';

export default function About() {
  return (
    <section id="about" className="container md:grid md:grid-cols-2 gap-16 py-24 items-center">
      <div className="relative order-2 md:order-1">
        <SectionHeading label="About Us" title="Turning ideas into successful startups" align="left" />
        <p className="mt-6 max-w-md text-neutral-600">
          We provide mentorship, resources and a vibrant community to help budding entrepreneurs turn concepts into thriving businesses.
        </p>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <Image src={aboutImage} alt="Team collaboration illustration" width={400} height={300} className="rounded-xl" />
      </div>
    </section>
  );
}
