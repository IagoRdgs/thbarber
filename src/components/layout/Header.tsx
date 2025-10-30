import logo from "../../assets/thbarber.svg";
import scissors from "../../assets/scissors.svg";
import Button from "./Button";

export default function Header() {
    return (
        <header className="w-full flex flex-col items-center px-4">
            <div className="flex w-full justify-center items-center border-b border-tertiary py-4 mb-16">
                <div className="w-full flex space-x-2">
                    <img src={scissors} alt="tesoura amarela" />
                    <span className="font-bold text-xl">TH Barbearia</span>
                </div>

                <div>
                    <Button text="Entrar" />
                </div>
            </div>
            <img src={logo} alt="th barbe logo" />
        </header>
    );
};