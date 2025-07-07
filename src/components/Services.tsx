import SectionHeading from './SectionHeading';
import Image from 'next/image';
import serviceIcon from '@/assets/icons/icon 100.png';

const services = [
  { icon: serviceIcon, title: 'Launch', desc: 'From idea to market, we guide you at every step.' },
  { icon: serviceIcon, title: 'Scale', desc: 'Grow your startup with expert mentorship.' },
  { icon: serviceIcon, title: 'Network', desc: 'Connect with investors and peers around the globe.' },
];

export default function Services() {
  return (
    <section id="services" className="container py-24 space-y-12">
      <SectionHeading label="What we do" title="Perfect Solution for Your Business" />
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl shadow p-6 text-center space-y-4 hover:-translate-y-1 transition">
            <div className="w-16 h-16 mx-auto bg-pale-gold flex items-center justify-center rounded">
              <Image src={s.icon} alt="icon" width={32} height={32} />
            </div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-sm text-neutral-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
