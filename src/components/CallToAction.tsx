import Button from './Button';

export default function CallToAction() {
  return (
    <section className="border-y border-primary bg-offwhite py-12" id="cta">
      <div className="container grid md:grid-cols-2 items-center gap-8">
        <h2 className="text-3xl font-bold font-poppins">Are you ready to take the next step?</h2>
        <div className="space-y-4 md:text-right">
          <p>Join our community of visionaries shaping the future today.</p>
          <Button className="w-full md:w-auto">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
