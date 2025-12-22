import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Los Servidores de Minecraft funcionan con Bedrock?",
    answer: "Sí, una vez adquirido tu servidor, podrás hacerlo compatible con Bedrock sin inconvenientes. Puedes configurarlo fácilmente desde el panel de control, y si necesitas ayuda, nuestro equipo de soporte estará encantado de asistirte en el proceso.",
  },
  {
    question: "¿Por qué debería elegir NetherHost?",
    answer: "Puedes elegir el proveedor que quieras, pero creemos que somos tu mejor opción: soporte en español con experiencia, precios accesibles sin publicidad, comunidad activa en Discord y hardware potente para un rendimiento fluido, alojando el servidor de cientos de creadores de contenido.",
  },
  {
    question: "Actualmente estoy con otro host, ¿Puedo migrarme a NetherHost?",
    answer: "Sí, podrás importar tus datos fácilmente desde nuestro panel de control. También tienes la opción de hacerlo manualmente utilizando los datos de acceso SFTP de tu proveedor anterior.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos PayPal, crypto y todas las tarjetas. También usamos pasarelas de pago que incluyen medios locales como MercadoPago, OXXO, transferencias bancarias y más según tu país.",
  },
  {
    question: "¿Qué plan debería elegir?",
    answer: "Si no estás seguro de qué plan elegir, te recomendamos unirte a nuestro Discord para consultarnos directamente, o usar nuestra calculadora de RAM para determinar tus necesidades exactas.",
  },
  {
    question: "¿Podré subir o bajar mi plan luego de comprar?",
    answer: "Sí, desde el área de clientes puedes actualizar tu plan fácilmente, ya sea a uno superior o con menos recursos. Si tienes algún inconveniente, crea un ticket y nuestro equipo de soporte te asistirá.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            PREGUNTAS <span className="text-gradient-primary">FRECUENTES</span>
          </h2>
          <p className="text-muted-foreground">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
