import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-600">Course queries, demo requests or corporate training — message kijiye.</p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="px-4 py-3 rounded-lg border border-gray-200" />
              <input required placeholder="Email" type="email" className="px-4 py-3 rounded-lg border border-gray-200" />
              <input placeholder="Phone (optional)" className="px-4 py-3 rounded-lg border border-gray-200" />
              <select className="px-4 py-3 rounded-lg border border-gray-200">
                <option>Interested Course</option>
                <option>Intro to Robotics</option>
                <option>Embedded Systems</option>
                <option>Competition Training</option>
              </select>
              <textarea placeholder="Message" className="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200" rows="4"></textarea>

              <div className="md:col-span-2 flex items-center justify-between">
                <button type="submit" className="px-6 py-3 rounded-md bg-blue-600 text-white">Send Message</button>
                <div className="text-sm text-gray-500">We reply within 48 hours</div>
              </div>
            </form>

          </div>
        </section>
  );
};

export default Contact;
