import Image from 'next/image';
import Button from './Button';
import heroImage from '@/assets/frames/Frame 20112.png';

export default function Hero() {
  return (
    <section className="container grid md:grid-cols-2 gap-8 py-24 items-center" id="hero">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-poppins">
          Your Partner in Turning
          <br />Ideas into Future-Shaping
          <br />Startup
        </h1>
        <p className="max-w-md text-lg">We help founders bring innovative ideas to life with expert guidance and resources.</p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="relative h-80 md:h-[500px]">
        <Image src={heroImage} alt="device" fill className="object-contain rounded-xl shadow-lg" />
      </div>
    </section>
  );
}
