import React from 'react'

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65.25" viewBox="0 0 256 261"><path fill="#FF4B19" d="M64.653 244.896c-10.596-5.665-20.27-12.791-28.859-21.048v-37.887l38.05-34.36v34.273L226.665 47.851c8.356 10.224 15.112 21.773 20.071 34.241z"/><path fill="#00D2FF" d="m144.814 210.882l109.836-98.518c.795 5.817 1.35 11.711 1.35 17.747c0 13.002-1.963 25.536-5.513 37.384L147.326 258.31c-6.989 1.161-14.118 1.913-21.437 1.913c-6.516 0-12.867-.635-19.125-1.56V1.56C113.022.635 119.373 0 125.889 0c6.445 0 12.73.624 18.925 1.529z"/><path fill="#556991" d="m106.764 116.824l99.078-89.214c-10.484-8.191-22.25-14.76-34.956-19.452L0 162.475a129.225 129.225 0 0 0 15.6 36.436z"/><path fill="#FF4B19" d="M35.794 180.727v9.177l38.05-34.361V10.899c-14.196 6.207-27.036 14.888-38.05 25.475z"/></svg>
          <span className="ml-3 text-xl">Artesanal</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header