import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    src: "images/products/product_img.jpg",
    alt: "",
    href: "product.html",
  },
  {
    src: "images/products/product1-1.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-2.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-3.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-4.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-5.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-6.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-7.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-8.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-9.jpg",
    alt: "",
    href: "",
  },
  {
    src: "images/products/product1-10.jpg",
    alt: "",
    href: "",
  },
];


function ProductSlider() {
    return (
        <section className="overflow-hidden my-6 bg-white mx-0 sm:mx-4 font-semibold">
            <h2 className="mt-6.5 ml-6.5 text-[clamp(1.1rem,0.79rem+1.103vw,1.5rem)] leading-[1.2] text-[#09090b]">Best Sellers in Sports & Outdoors</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="overflow-hidden w-full p-6.5"
            >
                <ul>
                    <CarouselContent className="">

                        {products.map(({href, src, alt}, index) => (
                            <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6 aspect-square max-h-52">
                                <li className="p-1 aspect-square">
                                    <a href={href}>
                                        <img src={src} alt={alt} className="object-contain max-h-full w-full"/>
                                    </a>
                                </li>
                            </CarouselItem>
                        ))}

                    </CarouselContent>

                </ul>
                <CarouselPrevious className="left-0 hover:bg-transparent cursor-pointer z-30 rounded-[0_3px_3px_0]" variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" height="75" strokeWidth="1" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        className="w-14 sm:w-16">
                        <path d="M15 6l-6 6l6 6" strokeWidth="2" stroke="black" />

                    </svg>
                </CarouselPrevious>
                <CarouselNext className="right-0 hover:bg-transparent cursor-pointer z-30 rounded-[3px_0_0_3px] text-black" variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="w-14 sm:w-16" height="75"
                        strokeWidth="1">
                        <path d="M10 6l6 6l-6 6" strokeWidth="2"></path>
                    </svg>
                </CarouselNext>
            </Carousel>
        </section>
    )
}

export default ProductSlider

