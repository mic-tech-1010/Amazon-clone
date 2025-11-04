import { ModeToggle } from "@/components/home/toggle";
import { useMediaQuery } from '@/hooks/use-media-query';
import UserLocationTab from "@/components/home/UserLocationTab";
import { Button } from "@/components/ui/button";
import SearchTab from "@/components/home/SearchTab";
import LocationTab from '@/components/home/LocationTab';
import AccountTab from '@/components/home/AccountTab';
import HamburgerMenu from '@/components/home/HamburgerMenu';

const menuItems = [
    { label: "Today's Deals", href: "#" },
    { label: "Customer Service", href: "#" },
    { label: "Registry", href: "#" },
    { label: " Gift Cards", href: "#" },
    { label: " Sell", href: "#" },
    { label: "Amazon Basics", href: "#" },
    { label: "New Releases", href: "#" },
    { label: "Music", href: "#" },
    { label: "Saks", href: "#" },
    { label: "Prime", href: "#" },
];



function Header() {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (

        <header className='overflow-hidden'>

            <nav aria-label='main'>

                <div className='flex justify-between gap-2 items-end w-full text-nav-color max-w-full p-2.5 bg-header-bgcolor-dark'>
                    {/* top Nav Bar added here */}
                    <Button variant="navButton" asChild>
                        <a href="/" aria-label="Amazon" className="hover:bg-transparent focus:bg-transparent">
                            <img src="images/amazon_logo.png" className='w-[100px] h-auto' alt="amazon" width="1596" height="529" />
                        </a>
                    </Button>

                    <UserLocationTab isDesktop={isDesktop} />

                    <SearchTab />

                    <LocationTab />

                    <AccountTab />

                    <a href="" className="text-left leading-[1.1] text-nav-color hover:outline-solid! hover:outline-offset-3! hover:outline-white! hover:outline-1">
                        <span className="text-[13px]">Returns</span>
                        <span className="block text-base'>">&amp; Orders</span>
                    </a>

                    <a href="" className="flex items-end gap-1 text-left leading-[1.1] text-nav-color hover:outline-solid! hover:outline-offset-3! hover:outline-white! hover:outline-1 pr-3">
                        <img src="images/cart_icon.png" alt="shopping cart" className='w-8 h-auto' />
                        <span className='w-[15px] text-bold'>Cart</span>
                    </a>

                   <ModeToggle />

                </div>

                <div className='flex gap-[3ch] justifty-start items-center py-1.5 px-4 bg-submenu-bgcolor text-nav-color'>
                    {/* bottom Nav Bar added here */}

                    <HamburgerMenu />

                    <menu className="flex items-center gap-4">
                        {menuItems.map(({label, href}, index) => (
                                <li key={index}>
                                    <a href={href} className='text-base p-0 hover:outline-solid! hover:outline-offset-3! hover:outline-white! hover:outline-1 focus-visible:border-none rounded-none! focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_#ff9900,0_0_0_3px_rgba(255,153,0,0.5)] transition-none'>{label}</a>
                                </li>
                            ))}
                    </menu>

                </div>

            </nav>

        </header>

    )
}

export default Header

