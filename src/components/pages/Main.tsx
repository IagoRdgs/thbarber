import Gallery from "../layout/Gallery";
import Header from "../layout/Header";
import ServiceCard from "../layout/ServiceCard";

type serviceInfo = {
    service: string;
    price: number;
    description: string;
    duration: number;
};

export default function Main() {
    const services: serviceInfo[] = [
        {
            service: "Corte social",
            price: 12,
            description: "Corte simples com máquina e tesoura",
            duration: 30
        },
        {
            service: "Corte degradê",
            price: 15,
            description: "Corte com acabamento detalhado e personalizado",
            duration: 45
        },
        {
            service: "Barba",
            price: 5,
            description: "Fazer a barba e alinhamento/acabamento",
            duration: 10
        },
        {
            service: "Corte + Barba",
            price: 20,
            description: "Corte com acabamento detalhado + barba",
            duration: 55
        }
    ];

    return (
        <main className="container mx-auto">
            <Header />
            <section className="my-16">
                <h2 className="text-primary-p text-xl px-8" id="services">Serviços</h2>
                <div className="px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service => (
                        <ServiceCard
                            key={service.service}
                            service={service.service}
                            price={service.price}
                            description={service.description}
                            duration={service.duration}
                        />
                    )))}
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-primary-p text-xl px-8 mb-8" id="services">Galeria</h2>
                <Gallery />
            </section>
        </main>
    );
};