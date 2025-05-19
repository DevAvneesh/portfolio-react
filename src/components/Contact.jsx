import React from "react";

const Contact = () => {
  const socialLinks = [
    {
      label: "WhatsApp",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124034.png",
      url: "https://wa.me/8789802057",
    },
    {
      label: "Email",
      icon: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
      url: "mailto:avneeshboss11@gmail.com",
    },
    {
      label: "LinkedIn",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      url: "https://www.linkedin.com/in/avneesh-rajpoot-aa541522a/",
    },
    {
      label: "X (Twitter)",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
      url: "https://x.com/Avneeshwa",
    },
  ];

  return (
    <section className="bg-primary-light dark:bg-primary-dark px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Let's Connect</h2>

      {/* Social Media Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-24 border border-gray-300 rounded-lg flex flex-col items-center justify-center hover:shadow-md hover:scale-105 transition"
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8 mb-2" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form className="max-w-xl mx-auto p-8 border rounded-xl shadow-md space-y-5">
        <div>
          <label className="block font-medium mb-1">Name *</label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email *</label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message *</label>
          <textarea
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="block mx-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
