import React from "react";

const services = [
  {
    img: "robotics training.jpg",
    title: "Robotics Training",
    desc: "We conduct hands-on robotics workshops in schools, provide STEM lab setups, and teacher training programs.",
  },
  {
    img: "6.jpg",
    title: "Robotics Kits",
    desc: "From beginner kits to advanced DIY robotics sets, we supply affordable and high-quality kits for students.",
  },
  {
    img: "school website development.jpg",
    title: " Website Development",
    desc: "We design and develop modern, responsive websites , including galleries, events, and admin panels.",
  },
];

const Services = () => {
  return (
    <section className="text-center py-16 px-10">
      <h1 className="text-3xl font-bold text-sky-500 mb-10">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-blue-900 text-white p-6 rounded-xl max-w-xs shadow-md">
            <img src={service.img} alt={service.title} className="rounded-md mb-4 w-full" />
            <h2 className="text-2xl text-sky-400 mb-2">{service.title}</h2>
            <p className="text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
