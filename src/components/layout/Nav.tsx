import { CalendarCheck, Home, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
    {
        title: "Início", icon: Home, path: "/"
    },
    {
        title: "Agendar", icon: CalendarCheck, path: "/scheduling"
    },
    {
        title: "Eu", icon: User, path: "/me"
    },
];

export default function Nav() {

    return (
        <>
            <nav className="flex justify-around items-center fixed bottom-0 left-0 right-0 border-t border-tertiary-p p-4 bg-primary-bg z-10 lg:hidden">
                {navItems.map(item => (
                    <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex flex-col items-center gap-1 hover:text-yellow-full transition-all duration-300 ${isActive ? "text-yellow-full" : "text-primary-p"}`} >
                        <span><item.icon /></span>
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </>
    );
};

export const LargeScreensNav = () => (
    <nav className="hidden lg:flex justify-center items-center gap-4">
        {navItems.map(item => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex flex-col items-center gap-1 hover:text-yellow-full transition-all duration-300 ${isActive ? "text-yellow-full" : "text-primary-p"}`} >
                <span className="hidden"><item.icon /></span>
                {item.title}
            </NavLink>
        ))}
    </nav>
);