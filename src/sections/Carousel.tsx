import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

const carouselImages = [
    { src: "images/header1.jpg", alt: "" },
    { src: "images/header2.jpg", alt: "" },
    { src: "images/header3.jpg", alt: "" },
    { src: "images/header4.jpg", alt: "" },
    { src: "images/header5.jpg", alt: "" },
    { src: "images/header6.jpg", alt: "" },
]

function ImageCarousel() {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 4000,
                    stopOnLastSnap: true,
                    stopOnFocusIn: true
                }),
            ]}
            className="w-full max-w-screen overflow-hidden"
        >
            <CarouselContent className="w-screen">
                {carouselImages.map(({ src, alt }, index) => (
                    <CarouselItem key={index}>
                        <div className="w-full">
                            <a href="">
                                <img src={src} alt={alt} className="w-full mask-[linear-gradient(to_bottom,#000_50%,transparent_100%)]" />
                            </a>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 top-[20%] hover:bg-transparent cursor-pointer" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="75" strokeWidth="0.7"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" strokeWidth="0.6" stroke="black" />
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 6l-6 6l6 6" stroke="white" />
                </svg>
            </CarouselPrevious>
            <CarouselNext className="right-0 top-[20%] hover:bg-transparent cursor-pointer" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round"
                    width="65" height="75"
                    strokeWidth="0.7">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6" stroke="white"></path>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 6l6 6l-6 6" strokeWidth="0.6" stroke="black"></path>
                </svg>
            </CarouselNext>
        </Carousel>
    )
}

export default ImageCarousel