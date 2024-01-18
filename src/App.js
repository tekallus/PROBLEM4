// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın
import { useState } from "react";

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  // Navbar componentinde kullanici oturum acti mi acmadi durumunu belirleyen isAuthUser = false; tanimlamaya gore kodu duzenleyelim
  //bunun icin bir javascript kodu yazalim {isAuthUser ? ( dashboard + signout) :(Login)}
  //<></> fragment <div className="navbar-links"> altina tanimlarsak :
  return (
    <header className="navbar-wrapper flex justify-center mt-10">
      <nav className="navbar">
        <Logo />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Hesabiniza giris yapin
        </h2>
        {isAuthUser ? (
          <>
            <button
              href="#"
              className="navbar-link flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Dashboard
            </button>
            <button
              onClick={() => setIsAuthUser((p) => !p)}
              href="#"
              className="navbar-link mt-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsAuthUser((p) => !p)}
            href="#"
            className="navbar-link mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex lg:flex-1 justify-center">
      <a href="#" className="-m-1.5 p-1.5">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt=""
        />
      </a>
    </div>
  );
}
//Bu şekilde, Navbar component'ı içinde kullanıcının oturum durumuna bağlı olarak dinamik bir yapı oluşturuldu.
// Kullanıcı oturum açmışsa Dashboard ve Sign out linkleri görüntülenir, aksi takdirde Login linki görüntülenir.
//Logo component'ı ise her durumda görüntülenir.
