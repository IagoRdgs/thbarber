import logo from "../../assets/thbarber.svg";
import scissors from "../../assets/scissors.svg";
import Button from "./Button";
import { LargeScreensNav } from "./Nav";

export default function Header() {
    return (
        <>
            <header className="w-full flex flex-col items-center px-4 sticky top-0 z-99 backdrop-blur-sm mb-16">
                <div className="flex w-full justify-center items-center border-b border-tertiary-p py-4">
                    <div className="w-full flex space-x-2">
                        <img src={scissors} alt="tesoura amarela" />
                        <span className="font-bold text-xl">TH Barbearia</span>
                    </div>

                    <div className="hidden lg:flex justify-center w-[50%] fixed mx-auto z-100">
                        <LargeScreensNav />
                    </div>

                    <div>
                        <Button text="Entrar" />
                    </div>
                </div>
            </header>

            <img className="mx-auto" src={logo} alt="th barber logo" />
        </>
    );
};