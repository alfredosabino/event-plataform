import { Logo } from "./Logo";

export function Header () {
    return (
        <header className="flex justify-center bg-gray-900 border-b border-gray-500">
            <Logo/>
        </header>
    )
}