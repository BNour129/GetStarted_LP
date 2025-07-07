"use client"
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function ContactForm() {
  return (
    <section id="contact" className="container py-24 space-y-12">
      <SectionHeading label="Contact Us" title="Connect with us to turn your ideas into reality" />
      <form className="grid gap-6 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <input className="border p-3 rounded col-span-1" placeholder="First Name" />
        <input className="border p-3 rounded col-span-1" placeholder="Last Name" />
        <input className="border p-3 rounded md:col-span-2" type="email" placeholder="Email" />
        <input className="border p-3 rounded md:col-span-2" placeholder="Phone Number" />
        <textarea className="border p-3 rounded md:col-span-2" placeholder="Message" rows={4}></textarea>
        <div className="md:col-span-2">
          <Button className="w-full">Submit</Button>
        </div>
      </form>
    </section>
  );
}
