import { useCallback, useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "../ui/carousel";

import Client1 from "../../assets/client1.png";

type galleryItems = {
    image: string;
    caption: string;
};

export default function Gallery() {
    const [api, setApi] = useState<CarouselApi | undefined>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<Number[]>([]);

    const onSelect = useCallback((currentApi?: CarouselApi) => {
        if (!currentApi) return;
        setSelectedIndex(currentApi.selectedScrollSnap());
    }, []);

    const onReinit = useCallback((currentApi?: CarouselApi) => {
        if (!currentApi) return;

        setScrollSnaps(currentApi.scrollSnapList());
        onSelect(currentApi);
    }, []);

    useEffect(() => {
        if (!api) return;

        setScrollSnaps(api.scrollSnapList());
        setSelectedIndex(api.selectedScrollSnap());

        api.on("select", onSelect);
        api.on("reInit", onReinit);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onReinit);
        }
    }, [api, onSelect, onReinit]);

    const galleryItems: galleryItems[] = [
        {
            image: Client1,
            caption: "Corte degradê navalhado"
        },
        {
            image: Client1,
            caption: "Corte degradê navalhado 2"
        },
        {
            image: Client1,
            caption: "Corte degradê navalhado 3"
        },
        {
            image: Client1,
            caption: "Corte degradê navalhado 4"
        },
        {
            image: Client1,
            caption: "Corte degradê navalhado 5"
        },
    ];

    return (
        <>
            <Carousel
                setApi={setApi}
                className="w-full max-w-md mx-auto md:max-w-3xl px-4"

            >
                <CarouselContent>
                    {galleryItems.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-secondary-bg border border-yellow-mid rounded-xl flex flex-col p-4 space-y-4">
                                <img src={item.image} alt={item.caption} />
                                <span className="text-sm">{item.caption}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className='absolute bg-secondary-bg text-secondary-p left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex hover:bg-secondary-bg/30 hover:text-yellow-mid hover:border-yellow-mid cursor-pointer' />
                <CarouselNext className='absolute bg-secondary-bg text-secondary-p right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex hover:bg-secondary-bg/30 hover:text-yellow-mid hover:border-yellow-mid cursor-pointer' />
            </Carousel>

            {api && (
                <div className='flex justify-center gap-2 mt-8'>
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api.scrollTo(index)}
                            aria-label={`ir para o depoimento ${index + 1}`}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${index === selectedIndex
                                ? 'bg-yellow-full w-4'
                                : 'bg-gray-300 hover:bg-gray-200'
                                }`}
                        >

                        </button>
                    ))}
                </div>
            )}
        </>
    );
};