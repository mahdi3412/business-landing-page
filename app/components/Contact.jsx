'use client';

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
      </form>
    </section>
  );
}
