import { MessageCircleMore } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "51922330782";
  const message = encodeURIComponent(
    "Hola, deseo información sobre los servicios de Galaxia Software."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
    >
      <MessageCircleMore size={30} />
    </a>
  );
}