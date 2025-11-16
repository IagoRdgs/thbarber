import { Check, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../layout/ServiceCard";
import { services, type serviceInfo } from "./Main";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";

type scheduleData = {
    service: serviceInfo | null;
    date: Dayjs | null;
    time: string | null;
};

export default function Scheduling() {
    const navigate = useNavigate();
    const [scheduleData, setScheduleData] = useState<scheduleData>({
        service: null,
        date: null,
        time: null
    });

    const availableDates = Array.from({ length: 7 }, (_, i) => dayjs().locale("pt-br").add(i, "day"));
    const availableTimes = [
        "08:00", "08:30", "09:00", "09:30",
        "10:00", "10:30", "11:00", "11:30",
        "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30",
        "18:00", "18:30"
    ];

    return (
        <main className="container mx-auto px-4 mb-32">
            <div className="flex items-center space-x-2 py-4 border-b border-tertiary-p mb-16">
                <button onClick={() => navigate(-1)} className="flex items-center p-.5 hover:text-yellow-full transition-all duration-300 cursor-pointer">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="text-lg leading-none">Fazer agendamento</h1>
            </div>

            <section className="my-16">
                <div className="flex gap-2 items-center">
                    <span className={`${scheduleData.service ? "bg-green-500" : "bg-tertiary-p"} rounded-full leading-none w-6 h-6 flex items-center justify-center text-sm`}>
                        {scheduleData.service ? (<Check size={18} />) : 1}
                    </span>
                    <h2 className="leading-none">Escolha um serviço</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service => (
                        <ServiceCard
                            key={service.service}
                            service={service.service}
                            price={service.price}
                            description={service.description}
                            duration={service.duration}
                            onClick={() => setScheduleData((prev) => ({
                                ...prev,
                                service
                            }))}
                            selected={scheduleData.service?.service === service.service}
                        />
                    )))}
                </div>
            </section>

            {scheduleData.service && (
                <section className="my-16">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className={`${scheduleData.date && scheduleData.time ? "bg-green-500" : "bg-tertiary-p"} rounded-full leading-none w-6 h-6 flex items-center justify-center text-sm`}>
                                {scheduleData.date && scheduleData.time ? (<Check size={18} />) : 2}
                            </span>
                            <h2 className="leading-none">
                                Escolha o dia e horário {" "}
                            </h2>
                        </div>
                        <span className="font-medium text-yellow-full">
                            {scheduleData.service.service}
                        </span>
                    </div>

                    <div className="flex gap-2 overflow-x-auto py-4">
                        {availableDates.map((date) => {
                            const isSelected = scheduleData.date?.isSame(date, "day");

                            return (
                                <button key={date.format("YYYY-MM-DD")}
                                    onClick={() => setScheduleData((prev) => ({
                                        ...prev,
                                        date,
                                        time: null
                                    }))}
                                    className={`flex flex-col px-4 py-2 rounded-xl border transition-all duration-300 ${isSelected
                                        ? "bg-yellow-mid text-white border-yellow-mid"
                                        : "border-tertiary-p hover:border-yellow-mid"
                                        }`}
                                >
                                    <span>{date.format("DD/MM")}</span>
                                    <span>{date.format("ddd")}</span>
                                </button>
                            )
                        })}
                    </div>

                    {scheduleData.date && (
                        <div className="mt-4">
                            <h3>Horários disponíveis</h3>

                            <div className="flex gap-2 overflow-x-auto py-4">
                                {availableTimes.map((time) => {
                                    const isSelected = scheduleData.time === time;
                                    const isDisabled = false;

                                    return (
                                        <button key={time} disabled={isDisabled}
                                            onClick={() => setScheduleData((prev) => ({
                                                ...prev,
                                                time
                                            }))}
                                            className={`px-3 py-2 rounded-md border text-sm transition-all duration-300 ${isSelected
                                                ? "bg-yellow-mid text-white border-yellow-mid"
                                                : isDisabled
                                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                                    : "border-tertiary-p hover:border-yellow-mid"
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {scheduleData.date && scheduleData.time && (
                        <div className="my-16">
                            <h2 className="leading-none">Confirmar agendamento</h2>

                            <div className="my-4 border border-yellow-mid rounded-md p-4">
                                <p>
                                    Serviço: {" "}
                                    <span className="text-yellow-full">
                                        {scheduleData.service.service}
                                    </span>
                                </p>

                                <p>
                                    Dia e horário: {" "}
                                    <span className="text-yellow-full">
                                        {scheduleData.date.format("DD/MM/YYYY")} - {scheduleData.time}
                                    </span>
                                </p>

                                <button className="bg-yellow-full text-primary-bg px-4 py-2 rounded-lg mt-4
                                hover:bg">Agendar</button>
                            </div>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
};