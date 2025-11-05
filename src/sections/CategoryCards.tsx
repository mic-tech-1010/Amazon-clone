import ShopCategoryGrid from "@/components/home/ShopCategoryGrid"
import ShopCategoryCard from "@/components/home/ShopCategoryCard"

const categories = {
    homeEssentials: [
        {
            title: "Cleaning Tools",
            href: "#",
            imgSrc: "images/cards/card-cleaning-tool.jpg",
            imgAlt: "cleaning tools"
        },
        {
            title: "Home Storage",
            href: "#",
            imgSrc: "images/cards/card-home-storage.jpg",
            imgAlt: "home storage"
        },
        {
            title: "Home Decor",
            href: "#",
            imgSrc: "images/cards/card-home-decor.jpg",
            imgAlt: "home decor"
        },
        {
            title: "Bedding",
            href: "#",
            imgSrc: "images/cards/card-bedding.jpg",
            imgAlt: "bedding"
        },
    ],
    kitchenAppliances: [
        {
            title: "Cooker",
            href: "#",
            imgSrc: "images/cards/card-electric-pot.jpg",
            imgAlt: "cooker"
        },
        {
            title: "Cofee",
            href: "#",
            imgSrc: "images/cards/card-cofee.jpg",
            imgAlt: "cofee"
        },
        {
            title: "Pot",
            href: "#",
            imgSrc: "images/cards/card-pots.jpg",
            imgAlt: "pot"
        },
        {
            title: "Kettle",
            href: "#",
            imgSrc: "images/cards/card-kettle.jpg",
            imgAlt: "kettle"
        },
    ],
    fashion: [
        {
            title: "Cleaning Tools",
            href: "#",
            imgSrc: "images/cards/card-cleaning-tool.jpg",
            imgAlt: "cleaning tools"
        },
        {
            title: "Home Storage",
            href: "#",
            imgSrc: "images/cards/card-home-storage.jpg",
            imgAlt: "home storage"
        },
        {
            title: "Home Decor",
            href: "#",
            imgSrc: "images/cards/card-home-decor.jpg",
            imgAlt: "home decor"
        },
        {
            title: "Bedding",
            href: "#",
            imgSrc: "images/cards/card-bedding.jpg",
            imgAlt: "bedding"
        },
    ],
    newHomeArrivals: [
        {
            title: "Cleaning Tools",
            href: "#",
            imgSrc: "images/cards/card-cleaning-tool.jpg",
            imgAlt: "cleaning tools"
        },
        {
            title: "Home Storage",
            href: "#",
            imgSrc: "images/cards/card-home-storage.jpg",
            imgAlt: "home storage"
        },
        {
            title: "Home Decor",
            href: "#",
            imgSrc: "images/cards/card-home-decor.jpg",
            imgAlt: "home decor"
        },
        {
            title: "Bedding",
            href: "#",
            imgSrc: "images/cards/card-bedding.jpg",
            imgAlt: "bedding"
        },
    ],
    fashionTrends: [
        {
            title: "Cleaning Tools",
            href: "#",
            imgSrc: "images/cards/card-cleaning-tool.jpg",
            imgAlt: "cleaning tools"
        },
        {
            title: "Home Storage",
            href: "#",
            imgSrc: "images/cards/card-home-storage.jpg",
            imgAlt: "home storage"
        },
        {
            title: "Home Decor",
            href: "#",
            imgSrc: "images/cards/card-home-decor.jpg",
            imgAlt: "home decor"
        },
        {
            title: "Bedding",
            href: "#",
            imgSrc: "images/cards/card-bedding.jpg",
            imgAlt: "bedding"
        },
    ],
    space: [
        {
            title: "Cleaning Tools",
            href: "#",
            imgSrc: "images/cards/card-cleaning-tool.jpg",
            imgAlt: "cleaning tools"
        },
        {
            title: "Home Storage",
            href: "#",
            imgSrc: "images/cards/card-home-storage.jpg",
            imgAlt: "home storage"
        },
        {
            title: "Home Decor",
            href: "#",
            imgSrc: "images/cards/card-home-decor.jpg",
            imgAlt: "home decor"
        },
        {
            title: "Bedding",
            href: "#",
            imgSrc: "images/cards/card-bedding.jpg",
            imgAlt: "bedding"
        },
    ],
}

const twobyTwoGrid = "grid grid-cols-2 gap-x-4 gap-y-1.5"

const oneByThreeGrid = "grid grid-cols-3 [&>li:first-child]:col-span-3 [&>*:not(:first-child)]:aspect-square gap-x-2 gap-y-1.5"

function CategoryCards() {
    return (
        <section className="mt-8 sm:mt-[-23%] z-20 relative px-0 sm:px-4 overflow-hidden">
            <div className="grid grid-flow-col auto-cols-[90%] min-[30rem]:auto-cols-[75%] overflow-auto scrollbar-hide sm:grid-flow-row sm:grid-cols-[repeat(auto-fit,minmax(296px,1fr))] gap-4 px-4 sm:px-0">
                <ShopCategoryCard
                    title="Shop your Home Essentials"
                    link="Discover more in Home"
                    linkHref="#"
                >
                    <ShopCategoryGrid itemsArray={categories.homeEssentials} className={twobyTwoGrid} />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="Get Your game On"
                    link="Shop gaming"
                    linkHref="#"
                >
                    <img src="images/cards/card-game-box.jpg" className="h-full" />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="Top categories in kitchen appliances"
                    link="Explore all products in kitchen"
                    linkHref="#"
                >
                    <ShopCategoryGrid itemsArray={categories.kitchenAppliances} className={oneByThreeGrid} />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="Shop Fashion for less"
                    link="See all deals"
                    linkHref="#"
                >
                    <ShopCategoryGrid itemsArray={categories.fashion} className="grid grid-cols-2 gap-4" />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="New home arrivals under $50"
                    link="Shop the latest from home"
                    linkHref="#"
                >
                    <ShopCategoryGrid itemsArray={categories.newHomeArrivals} className="grid grid-cols-2 gap-4" />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="Fashion trends you like"
                    link="Explore more"
                    linkHref="#"
                >
                    <ShopCategoryGrid itemsArray={categories.fashionTrends} className="grid grid-cols-2 gap-4" />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="Toys under $25"
                    link="Shop now"
                    linkHref="#"
                >
                    <img src="images/cards/card2-toys.jpg" className="h-full" />
                </ShopCategoryCard>
                <ShopCategoryCard
                    title="Refresh your space"
                    link="See more"
                    linkHref="#"
                >
                    <ShopCategoryGrid itemsArray={categories.space} className="grid grid-cols-2 gap-4" />
                </ShopCategoryCard>
            </div>
        </section>
    )
}

export default CategoryCards