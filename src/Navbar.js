import './App.css';
import React, { useState } from 'react';

function Navbar() {
    const [showNav, setShowNav] = useState(false)

    return (
        <nav class="backdrop-blur-sm h-20 text-white">
            <div class="mx-auto">
                <div class="flex justify-end py-6 px-16">
                    <img class="h-20 w-20 absolute left-0 top-0" src="/logo.jpg" alt="logo"/>

                    <div class="hidden md:flex gap-36 items-center">
                        <a class="hover:text-gray-300" href="index.js">Om os</a>
                        <a class="hover:text-gray-300" href="index.js">Orupdal</a>
                        <a class="hover:text-gray-300" href="index.js">Bestil</a>
                        <a class="hover:text-gray-300" href="index.js">Kontakt</a>
                    </div>

                    <div class="flex md:hidden absolute right-6">
                        <button class="mobile-menu-button" onClick={() => setShowNav((prev) => !prev)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

            <div class="mobile-menu hidden md:hidden" style={{display: showNav ? 'initial' : 'none'}}>
                <a class="hover:text-gray-300" href="index.js">Om os</a>
                <a class="hover:text-gray-300" href="index.js">Orupdal</a>
                <a class="hover:text-gray-300" href="index.js">Bestil</a>
                <a class="hover:text-gray-300" href="index.js">Kontakt</a>
            </div>

        </nav>
    );
}

export default Navbar;
