import React from 'react';

function Header() {
  return (
    <header className="bg-white py-4 drop-shadow-md">
      <div className="mx-auto py-4 flex items-center justify-between">
        <div>
          <span className="text-xl cursor-pointer font-bold ml-2">
            Ecommerce{' '}
            <span className="text-blue-500 font-bold">MarketPlace</span>
          </span>
        </div>

        <div className="hidden sm:flex flex-row space-x-4">
          <p>Offers</p>

          <p>Products</p>

          <p>Deals</p>
        </div>
        <div>
          <button>Your Cart</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
