import { Star, StarHalf } from "lucide-react";

export type evaluationProps = {
    photo: string;
    name: string;
    evaluation: string;
    stars: number;
    date?: Date | string;
};

export default function EvaluationCard({
    photo,
    name,
    evaluation,
    stars,
    date = new Date()
}: evaluationProps) {
    const totalStars: number = 5;

    function countAndColorStars(stars: number) {
        const starsArray = [];

        for (let i = 1; i <= totalStars; i++) {
            if (stars >= i)
                starsArray.push(<Star key={i} color="var(--color-yellow-full)" fill="var(--color-yellow-full)" size={14} />);
            else if (stars >= i - 0.5)
                starsArray.push(<StarHalf key={i} color="var(--color-yellow-full)" fill="var(--color-yellow-full)" size={14} />);
            else
                starsArray.push(<Star key={i} color="var(--color-tertiary-p)" size={14} />)
        };

        return starsArray;
    };

    function formatDate(dateValue: Date | string) {
        const date = new Date(dateValue);

        const time = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
        const day = date.getDate().toString().padStart(2, "0");
        const month = date.toLocaleString("pt-BR", { month: "short" }).replace(".", "");
        const year = date.getFullYear();

        const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1) + ".";

        return `${time} - ${day}, ${formattedMonth} ${year}`;
    };

    return (
        <div className="bg-secondary-bg flex border border-yellow-mid rounded-lg p-4 space-x-4 items-start
            hover:scale-103 hover:shadow-lg hover:shadow-yellow-mid/30
            active:scale-103 active:shadow-lg active:shadow-yellow-mid/30
            focus:scale-105 focus:shadow-lg focus:shadow-yellow-mid/30 outline-none
            transition-all duration-300"
        >
            <div className="w-12 h-12 overflow-hidden shrink-0 rounded-full border border-yellow-mid">
                <img className="w-full h-full object-cover" src={photo} alt="photo" />
            </div>

            <div className="space-y-2 w-full leading-0">
                <div className="flex justify-between items-center">
                    <span>{name}</span>
                    <span className="flex space-x-1">{countAndColorStars(stars)}</span>
                </div>

                <div className="flex flex-col space-y-1">
                    <span className="text-sm line-clamp-3">{evaluation}</span>
                    <span className="text-xs text-tertiary-p">{formatDate(date)}</span>
                </div>
            </div>
        </div>
    );
};