import './App.css';

function Navbar() {
    return (
        <div class="flex items-center justify-end px-24 h-20">
            <nav class="flex gap-24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img class="h-20 absolute left-0 top-0" src="/logo.jpg" alt="logo"/>
                <a href="index.js">Om os</a>
                <a href="index.js">Orupdal</a>
                <a href="index.js">Bestil</a>
                <a href="index.js">Kontakt</a>
            </nav>
        </div>
    );
}

export default Navbar;
