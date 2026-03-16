import Image from "next/image";
import VolunteerForm from "@/components/VolunteerForm";
import { Brain, Heart, Users } from "lucide-react";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-white font-display">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary text-secondary text-sm font-bold rounded-full mb-6">Join Our Mission</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-secondary leading-tight mb-8">
              Be the Voice for Those Who <span className="text-primary italic">Can&apos;t Speak</span>
            </h1>
            <p className="text-xl text-secondary/70 mb-10 leading-relaxed">
              Join our community of passionate volunteers dedicated to rescuing, rehabilitating, and finding forever homes for animals in need. Your time can save lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#register" className="bg-primary hover:bg-primary-dark text-secondary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all active:scale-95">
                Register to Volunteer
              </a>
              <a href="#faq" className="bg-white border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary hover:text-white transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">Why Volunteer with Us?</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Benefit 1 */}
            <div className="bg-white p-10 rounded-3xl border border-secondary/10 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl"><Heart /></span>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-4">Make a Difference</h3>
              <p className="text-secondary/60 leading-relaxed">Directly impact the lives of animals who have nowhere else to go. Your care makes their recovery possible.</p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white p-10 rounded-3xl border border-secondary/10 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl"><Brain /></span>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-4">New Skills</h3>
              <p className="text-secondary/60 leading-relaxed">Gain hands-on experience in animal care, medical basics, and non-profit operations from experts in the field.</p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white p-10 rounded-3xl border border-secondary/10 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl"><Users /></span>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-4">Build Community</h3>
              <p className="text-secondary/60 leading-relaxed">Join a family of like-minded animal lovers and activists. Form lifelong friendships while working for a cause.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="register" className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl overflow-hidden relative border-8 border-primary">
            <div className="relative z-10">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">Volunteer Registration</h2>
                <p className="text-secondary/60">Fill out the form below and our coordinator will get in touch with you within 48 hours.</p>
              </div>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-6">
            <div className="p-8 bg-white rounded-3xl border-2 border-secondary/5 hover:border-primary transition-colors">
              <h4 className="text-xl font-bold text-secondary mb-3">Is there a minimum age requirement?</h4>
              <p className="text-secondary/60 leading-relaxed">Yes, all on-site volunteers must be at least 18 years old. For those aged 14-17, we offer limited remote and awareness roles with parental consent.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border-2 border-secondary/5 hover:border-primary transition-colors">
              <h4 className="text-xl font-bold text-secondary mb-3">What is the minimum time commitment?</h4>
              <p className="text-secondary/60 leading-relaxed">We ask for a minimum of 4 hours per month to ensure stability for our animals and consistency in our training programs.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border-2 border-secondary/5 hover:border-primary transition-colors">
              <h4 className="text-xl font-bold text-secondary mb-3">Do I need prior experience?</h4>
              <p className="text-secondary/60 leading-relaxed">Prior experience is great but not required! We provide all necessary training during our mandatory orientation session.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
