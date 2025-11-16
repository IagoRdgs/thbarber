import { Clock } from "lucide-react";

type serviceProps = {
    service: string;
    price: number;
    description: string;
    duration: number;
    onClick?: () => void;
    selected?: boolean;
};

export default function ServiceCard({
    service,
    price,
    description,
    duration,
    onClick,
    selected
}: serviceProps) {
    return (
        <div className={`bg-secondary-bg border border-yellow-mid rounded-lg px-4 py-8 space-y-4
            hover:scale-102 hover:shadow-lg hover:shadow-yellow-mid/30
            active:scale-102 active:shadow-lg active:shadow-yellow-mid/30
            focus:scale-102 focus:shadow-lg focus:shadow-yellow-mid/30 outline-none
            transition-all duration-300 ${selected ? 'border-2 scale-102 shadow-lg shadow-yellow-mid/30' : 'border'}`}
            tabIndex={0}
            onClick={onClick}
        >
            <div className="flex justify-between items-center">
                <span>{service}</span>
                <span className="text-yellow-full font-medium text-lg">{price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
            </div>

            <div className="text-tertiary-p text-sm space-y-2">
                <p>{description}</p>
                <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{duration} minutos</span>
                </div>
            </div>
        </div>
    );
};