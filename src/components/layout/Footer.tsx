export default function Footer() {
    const linkBaseStyle = "hover:text-yellow-mid hover:underline active:text-yellow-mid active:underline transition-all duration-300";

    return <footer className="flex flex-col items-center mt-16 mb-8 space-y-4 border-t border-tertiary-p pt-4 mx-4">
        <div className="flex space-x-4 text-xs text-secondary-p">
            <a className={linkBaseStyle} href="#">Política de privacidade</a>
            <a className={linkBaseStyle} href="#">Termos de uso</a>
        </div>
        <p className="text-tertiary-p text-xs">&copy; Iago Rodrigues 2025. All Rights Reserved.</p>
    </footer>
};