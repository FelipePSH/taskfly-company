"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Atualiza os valores do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envia os dados para o Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("contacts").insert([form]);

    if (error) {
      setError("Something went wrong. Try again later.");
      console.error(error);
    } else {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="flex flex-col items-center text-center py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      
      {/* Título */}
      <h2 className="text-4xl font-display font-bold text-primary dark:text-blue-300">
        Get in <span className="text-secondary">Touch</span>
      </h2>

      <p className="mt-4 max-w-3xl text-lg font-sans text-gray-700 dark:text-gray-300">
        Have a question or a project in mind? Fill in the form below and we'll get back to you.
      </p>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          rows="4"
        />
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-primary text-white dark:bg-blue-500 py-3 px-6 rounded-lg font-medium hover:bg-secondary dark:hover:bg-blue-400 transition"
        >
          <Send className="w-5 h-5" />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Mensagens de Sucesso ou Erro */}
      {success && <p className="mt-4 text-green-500 font-semibold">Message sent successfully!</p>}
      {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
    </section>
  );
};

export default Contact;