import type { evaluationProps } from "../layout/EvaluationCard";
import Gallery from "../layout/Gallery";
import Header from "../layout/Header";
import ServiceCard from "../layout/ServiceCard";

import user from "../../assets/client1.png";
import EvaluationCard from "../layout/EvaluationCard";
import Footer from "../layout/Footer";

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

    const evaluations: evaluationProps[] = [
        {
            photo: user,
            name: "Cliente 1",
            evaluation: "Muito bom, com certeza vou voltar.",
            stars: 5,
            date: new Date()
        },
        {
            photo: user,
            name: "Cliente 2",
            evaluation: "Corta muito bem, tem futuro, mas tirou demais em cima. Lorem impsum dolor et mani nao dosna foja sjaks dia dafnois ksjand ndks",
            stars: 4,
            date: "2025-10-30T19:30:00"
        },
        {
            photo: user,
            name: "Cliente 3",
            evaluation: "Ótimo atendimento, mas demorou um pouco.",
            stars: 4.5,
            date: "2025-10-30T15:30:00"
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

            <section className="my-16">
                <h2 className="text-primary-p text-xl px-8 mb-8" id="services">Avaliações</h2>
                <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
                    {evaluations.map((evaluation, index) => (
                        <EvaluationCard
                            key={index}
                            photo={evaluation.photo}
                            name={evaluation.name}
                            evaluation={evaluation.evaluation}
                            stars={evaluation.stars}
                            date={evaluation.date}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};