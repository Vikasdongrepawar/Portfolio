import { motion } from "motion/react";

export default function SupernovaCaseStudy() {
  const meta = [
    { label: "Role", value: "Full Stack Developer" },
    { label: "Stack", value: "Node.js / Express / MongoDB / RabbitMQ / AWS" },
    { label: "Year", value: "2024" },
  ];

  const architecture = [
    { name: "Client", tech: "React + Redux", type: "Frontend" },
    { name: "Nginx", tech: "API Gateway", type: "Infrastructure" },
    { name: "Auth Service", tech: "JWT + Google OAuth", type: "Microservice" },
    { name: "Product Service", tech: "MongoDB + Redis cache", type: "Microservice" },
    { name: "Cart Service", tech: "Redis", type: "Microservice" },
    { name: "Order Service", tech: "RabbitMQ publisher", type: "Microservice" },
    { name: "Payment Service", tech: "Razorpay integration", type: "Microservice" },
    { name: "AWS ECS", tech: "Fargate (Docker)", type: "Infrastructure" },
    { name: "MongoDB Atlas", tech: "Cloud DB", type: "Data" },
  ];

  const results = [
    { label: "Microservices Deployed", value: "5" },
    { label: "Services Independently Scalable", value: "100%" },
    { label: "Auth Implementation", value: "JWT + OAuth" },
  ];

  return (
    <main className="min-h-screen bg-black pt-[44px]">
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden space-y-10">
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-semibold text-primary uppercase tracking-[0.3em] text-sm"
          >
            Case Study
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-semibold tracking-tighter apple-gradient-text"
          >
            Supernova.
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto pt-8">
            {meta.map(item => (
              <div key={item.label} className="text-center">
                <div className="text-[10px] uppercase tracking-widest text-primary mb-2">{item.label}</div>
                <div className="text-sm font-medium text-white/80">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 pt-8">
            <a href="https://github.com/vikasdongrepawar/supernova" target="_blank" rel="noreferrer" className="sf-button-primary px-10 py-4 scale-110 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">code</span>
              View on GitHub
            </a>
          </div>
      </section>

      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                  The Architecture.
                </h2>
                <p className="text-xl text-zinc-400 font-normal leading-relaxed">
                  Decoupling for scale. By breaking down the monolithic commerce flow into specialized services, 
                  we achieved isolated failure domains and independent scaling capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {architecture.map(item => (
                    <div key={item.name} className="bg-black/20 p-4 rounded-apple-inner border border-white/5 flex flex-col">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">{item.type}</span>
                      <span className="text-white text-sm font-semibold">{item.name}</span>
                      <span className="text-zinc-500 text-xs">{item.tech}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-32 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                Event-Driven Flow.
              </h2>
              <p className="text-xl text-zinc-400 font-normal leading-relaxed">
                Utilizing RabbitMQ for asynchronous order processing. This ensures that the user's checkout experience is never blocked 
                by downstream payment processing or inventory updates.
              </p>
           </div>
           <div className="flex-1 bg-[#161617] rounded-apple p-12 border border-white/5 font-mono text-[13px] text-primary/80 overflow-x-auto shadow-2xl">
<pre className="whitespace-pre">
{`// Order Service — RabbitMQ Event Publisher
const publishOrderEvent = async (orderData) => {
  const channel = await rabbitmq.createChannel();
  await channel.assertQueue('order_created');
  channel.sendToQueue(
    'order_created',
    Buffer.from(JSON.stringify({
      orderId: orderData._id,
      userId: orderData.userId,
      amount: orderData.totalAmount,
      status: 'processing'
    }))
  );
  console.log('Order event published:', orderData._id);
};`}
</pre>
           </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-32 px-6">
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {results.map(item => (
              <div key={item.label} className="text-center space-y-4 sf-glass p-10">
                 <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{item.value}</div>
                 <div className="text-[11px] uppercase tracking-widest text-primary font-semibold max-w-[120px] mx-auto">{item.label}</div>
              </div>
            ))}
         </div>
      </section>

      <div className="py-24 text-center space-y-12 bg-black border-t border-white/5">
         <p className="text-on-surface-variant text-sm font-normal">
            Developed by Vikas Dongre. Built with clean architecture in Bhopal.
         </p>
         <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="sf-button-secondary">Back to top</button>
      </div>
    </main>
  );
}
