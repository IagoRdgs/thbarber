import { Clock } from "lucide-react";

type serviceProps = {
    service: string;
    price: number;
    description: string;
    duration: number;
};

export default function ServiceCard({
    service,
    price,
    description,
    duration
}: serviceProps) {
    return (
        <div className="bg-secondary-bg border border-yellow-mid rounded-lg px-4 py-8 space-y-4
            hover:scale-103 hover:shadow-lg hover:shadow-yellow-mid/30
            active:scale-103 active:shadow-lg active:shadow-yellow-mid/30
            focus:scale-105 focus:shadow-lg focus:shadow-yellow-mid/30 outline-none
            transition-all duration-300"
            tabIndex={0}
        >
            <div className="flex justify-between items-center">
                <span>{service}</span>
                <span className="text-yellow-full font-medium text-lg">{price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
            </div>


            <div className="text-tertiary text-sm space-y-2">
                <p>{description}</p>
                <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{duration} minutos</span>
                </div>
            </div>
        </div>
    );
};