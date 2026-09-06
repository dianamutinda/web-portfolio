import { MessageCircle } from "lucide-react"

function WhatsAppButton() {
  const phoneNumber = "254117659030"

  const message = encodeURIComponent(
    "Hi Diana, I'd like to discuss a website project."
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Diana on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-transform
        duration-200
        hover:scale-105
        active:scale-95
        sm:bottom-8
        sm:right-8
      "
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  )
}

export default WhatsAppButton