import { useState } from "react";
import Header from "@/components/Header";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />

      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-3 animate-fade-in-up gradient-text">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-16 animate-fade-in-up font-mono" style={{ animationDelay: "0.1s" }}>
            {'>'} Have a project in mind? Let's talk about how I can help.
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-card p-10 rounded-2xl shadow-lg animate-slide-in-left border border-primary/20 cyber-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-mono text-primary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 bg-secondary border border-border rounded-xl font-body text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(180_100%_50%/0.2)] transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-mono text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 bg-secondary border border-border rounded-xl font-body text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(180_100%_50%/0.2)] transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium font-mono text-primary">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 bg-secondary border border-border rounded-xl font-body text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(180_100%_50%/0.2)] transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium font-mono text-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-5 py-4 bg-secondary border border-border rounded-xl font-body text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(180_100%_50%/0.2)] transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(180_100%_50%/0.4)] glow-cyan"
                >
                  Send Message →
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5 animate-slide-in-right">
              <div className="bg-card p-6 rounded-2xl shadow-md border border-primary/20">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-heading text-lg font-semibold mb-1 text-primary">Email</h3>
                <p className="text-muted-foreground text-sm font-mono">boopathi@example.com</p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-md border border-primary/20">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-heading text-lg font-semibold mb-1 text-primary">Phone</h3>
                <p className="text-muted-foreground text-sm font-mono">+91 98765 43210</p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-md border border-primary/20">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-heading text-lg font-semibold mb-1 text-primary">Location</h3>
                <p className="text-muted-foreground text-sm font-mono">Chennai, India</p>
              </div>

              <div className="mt-6">
                <h3 className="font-heading text-lg font-semibold mb-4 text-primary">Connect with me</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="px-5 py-2.5 bg-secondary text-primary border border-primary/30 rounded-full text-sm font-mono transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="px-5 py-2.5 bg-secondary text-primary border border-primary/30 rounded-full text-sm font-mono transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="px-5 py-2.5 bg-secondary text-primary border border-primary/30 rounded-full text-sm font-mono transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-8 px-5 py-4 bg-success-bg border border-success/30 rounded-xl">
                <span className="w-3 h-3 bg-success rounded-full pulse-dot" />
                <span className="text-success-foreground text-sm font-mono">Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
