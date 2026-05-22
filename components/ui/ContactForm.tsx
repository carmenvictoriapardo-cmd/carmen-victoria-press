"use client";

import { useState } from "react";

const tiposConsulta = [
  "Conferencia / Keynote",
  "Workshop / Masterclass",
  "Mentoría Personal",
  "Colaboración de Medios",
  "Entrevista / Press",
  "Otro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    empresa: "",
    tipo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", whatsapp: "", empresa: "", tipo: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0f0f0f] border border-[var(--border)] text-[var(--foreground)] text-sm px-4 py-3 font-[family-name:var(--font-inter)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-[var(--muted)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1 uppercase tracking-wider">
            Nombre *
          </label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1 uppercase tracking-wider">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1 uppercase tracking-wider">
            WhatsApp
          </label>
          <input
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+1 (305) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1 uppercase tracking-wider">
            Empresa / Organización
          </label>
          <input
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1 uppercase tracking-wider">
          Tipo de consulta *
        </label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Selecciona una opción...</option>
          {tiposConsulta.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] font-[family-name:var(--font-inter)] mb-1 uppercase tracking-wider">
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Cuéntame sobre tu evento, proyecto o consulta..."
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-[var(--accent)] text-black font-semibold text-sm font-[family-name:var(--font-inter)] tracking-wide hover:bg-[var(--accent-light)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : "Enviar Solicitud →"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-400 font-[family-name:var(--font-inter)] text-center">
          ✓ Mensaje enviado. Te respondo en menos de 48 horas.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 font-[family-name:var(--font-inter)] text-center">
          Hubo un error. Por favor escríbeme directamente a cpardo@northfactoryllc.com
        </p>
      )}
    </form>
  );
}
