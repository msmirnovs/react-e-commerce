import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function SearchResults() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative'>
          <nav className='flex justify-between border-b'>
            <div className='px-12 py-8 flex w-full items-center'>
              <a className='hidden xl:block mr-16' href='#'>
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M18 15.4688H0V17.7207H18V15.4688Z' fill='black' />
                  <path
                    d='M11.0226 7.87402H0V10.126H11.0226V7.87402Z'
                    fill='black'
                  />
                  <path d='M18 0.279297H0V2.53127H18V0.279297Z' fill='black' />
                </svg>
              </a>
              <ul className='hidden xl:flex font-semibold font-heading'>
                <li className='mr-12'>
                  <a className='hover:text-gray-600' href='#'>
                    Category
                  </a>
                </li>
                <li className='mr-12'>
                  <a className='hover:text-gray-600' href='#'>
                    Collection
                  </a>
                </li>
                <li className='mr-12'>
                  <a className='hover:text-gray-600' href='#'>
                    Story
                  </a>
                </li>
                <li>
                  <a className='hover:text-gray-600' href='#'>
                    Brand
                  </a>
                </li>
              </ul>
              <a
                className='flex-shrink-0 xl:mx-auto text-3xl font-bold font-heading'
                href='#'
              >
                <img
                  className='h-9'
                  src='yofte-assets/logos/yofte-logo.svg'
                  alt=''
                  width='auto'
                />
              </a>
              <div className='hidden xl:inline-block mr-14'>
                <input
                  className='py-5 px-8 w-full placeholder-gray-400 text-xs uppercase font-semibold font-heading bg-gray-50 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                  type='text'
                  placeholder='Search'
                />
              </div>
              <div className='hidden xl:flex items-center'>
                <a className='mr-10 hover:text-gray-600' href='#'>
                  <svg
                    width={23}
                    height={20}
                    viewBox='0 0 23 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
                <a className='flex items-center hover:text-gray-600' href='#'>
                  <svg
                    className='mr-3'
                    width={23}
                    height={23}
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='inline-block w-6 h-6 text-center bg-gray-50 rounded-full font-semibold font-heading'>
                    3
                  </span>
                </a>
              </div>
            </div>
            <button className='flex-shrink-0 hidden xl:block px-8 border-l'>
              <div className='flex items-center'>
                <img
                  className='w-9 h-9 object-cover mr-2'
                  src='yofte-assets/elements/avatar.svg'
                  alt=''
                />
                <span className='mr-2 font-medium'>Robert</span>
                <span>
                  <svg
                    width={10}
                    height={6}
                    viewBox='0 0 10 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </button>
            <a
              className='xl:hidden flex mr-6 items-center text-gray-600'
              href='#'
            >
              <svg
                className='mr-2'
                width={23}
                height={23}
                viewBox='0 0 23 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='inline-block w-6 h-6 text-center bg-gray-50 rounded-full font-semibold font-heading'>
                3
              </span>
            </a>
            <a className='navbar-burger self-center mr-12 xl:hidden' href='#'>
              <svg
                width={20}
                height={12}
                viewBox='0 0 20 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z'
                  fill='#8594A5'
                />
              </svg>
            </a>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-8'>
                <a className='mr-auto text-3xl font-bold font-heading' href='#'>
                  <img
                    className='h-9'
                    src='yofte-assets/logos/yofte-logo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <button className='navbar-close'>
                  <svg
                    className='h-2 w-2 text-gray-500 cursor-pointer'
                    width={10}
                    height={10}
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002'
                      stroke='black'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
              <div className='flex mb-8 justify-between'>
                <button>
                  <div className='flex items-center'>
                    <img
                      className='w-9 h-9 object-cover mr-2'
                      src='yofte-assets/elements/avatar.svg'
                      alt=''
                    />
                    <span className='mr-2 font-medium'>Robert</span>
                    <span>
                      <svg
                        width={10}
                        height={6}
                        viewBox='0 0 10 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <div className='flex items-center'>
                  <a className='mr-10' href='#'>
                    <svg
                      width={23}
                      height={20}
                      viewBox='0 0 23 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                  <a className='flex items-center' href='#'>
                    <svg
                      className='mr-3'
                      width={23}
                      height={23}
                      viewBox='0 0 23 23'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span className='inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading'>
                      3
                    </span>
                  </a>
                </div>
              </div>
              <input
                className='block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none'
                type='search'
                placeholder='Search'
              />
              <ul className='text-3xl font-bold font-heading'>
                <li className='mb-8'>
                  <a href='#'>Category</a>
                </li>
                <li className='mb-8'>
                  <a href='#'>Collection</a>
                </li>
                <li className='mb-8'>
                  <a href='#'>Story</a>
                </li>
                <li>
                  <a href='#'>Brand</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className='py-20 bg-gray-100'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4 mb-20 items-center justify-between'>
              <div className='w-full lg:w-auto px-4 mb-12 xl:mb-0'>
                <h2 className='text-5xl font-bold font-heading'>
                  <span>Found 125 results for</span>
                  <a className='relative text-blue-300 underline' href='#'>
                    Sports
                  </a>
                </h2>
              </div>
              <div className='w-full lg:w-auto px-4 flex flex-wrap items-center'>
                <div className='w-full sm:w-auto mb-4 sm:mb-0 mr-5'>
                  <select
                    className='pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                    name=''
                    id=''
                  >
                    <option value={1}>Sort by newest</option>
                    <option value={2}>Sort by price</option>
                    <option value={3}>Sort by most popular</option>
                  </select>
                </div>
                <a
                  className='inline-block mr-3 h-full p-4 bg-white rounded-md border'
                  href='#'
                >
                  <svg
                    width={20}
                    height={24}
                    viewBox='0 0 20 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width={4} height={4} rx={2} fill='#2B51C6' />
                    <rect x={8} width={4} height={4} rx={2} fill='#2B51C6' />
                    <rect x={16} width={4} height={4} rx={2} fill='#2B51C6' />
                    <rect y={10} width={4} height={4} rx={2} fill='#2B51C6' />
                    <rect
                      x={8}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill='#2B51C6'
                    />
                    <rect
                      x={16}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill='#2B51C6'
                    />
                    <rect y={20} width={4} height={4} rx={2} fill='#2B51C6' />
                    <rect
                      x={8}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill='#2B51C6'
                    />
                    <rect
                      x={16}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill='#2B51C6'
                    />
                  </svg>
                </a>
                <a
                  className='inline-block h-full p-4 hover:bg-white border rounded-md group'
                  href='#'
                >
                  <svg
                    className='text-gray-200 group-hover:text-blue-300'
                    width={28}
                    height={24}
                    viewBox='0 0 28 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width={4} height={4} rx={2} fill='currentColor' />
                    <rect
                      x={8}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={16}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={24}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={8}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={16}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={24}
                      y={10}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={8}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={16}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                    <rect
                      x={24}
                      y={20}
                      width={4}
                      height={4}
                      rx={2}
                      fill='currentColor'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3'>
              <div className='w-full lg:hidden px-3'>
                <div className='flex flex-wrap -mx-2'>
                  <div className='w-1/2 md:w-1/3 px-2 mb-4'>
                    <div className='py-6 px-2 text-center bg-gray-50'>
                      <a className='font-bold font-heading' href='#'>
                        Category
                      </a>
                      <ul className='hidden text-left mt-6'>
                        <li className='mb-4'>
                          <a href='#'>New in</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Activewear</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Hoodies &amp; Sweatshirts</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Jackets</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Multipacks</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Bags</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Sports</a>
                        </li>
                        <li className='mb-4'>
                          <a href='#'>Gifts</a>
                        </li>
                        <li>
                          <a href='#'>Notes</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-1/2 md:w-1/3 px-2 mb-4'>
                    <div className='py-6 px-2 text-center bg-gray-50'>
                      <a className='font-bold font-heading' href='#'>
                        Colors
                      </a>
                      <div className='hidden mt-6 flex flex-wrap'>
                        <button className='mr-4 mb-2 rounded-full border border-blue-300 p-1'>
                          <div className='rounded-full bg-blue-300 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-orange-300 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-gray-900 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-red-300 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-green-300 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-pink-300 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-yellow-300 w-5 h-5' />
                        </button>
                        <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                          <div className='rounded-full bg-gray-100 w-5 h-5' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 md:w-1/3 px-2 mb-4'>
                    <div className='py-6 px-4 text-center bg-gray-50'>
                      <a className='font-bold font-heading' href='#'>
                        Price
                      </a>
                      <div className='hidden mt-6'>
                        <input
                          className='w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer'
                          type='range'
                          min={1}
                          max={100}
                          defaultValue={50}
                        />
                        <div className='flex justify-between'>
                          <span className='inline-block text-lg font-bold font-heading text-blue-300'>
                            $0
                          </span>
                          <span className='inline-block text-lg font-bold font-heading text-blue-300'>
                            $289
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 md:w-1/3 px-2 mb-4'>
                    <div className='py-6 px-4 text-center bg-gray-50'>
                      <a className='font-bold font-heading' href='#'>
                        Size
                      </a>
                      <div className='hidden mt-6 flex flex-wrap -mx-2 -mb-2'>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          36
                        </button>
                        <button className='relative mb-2 mr-1 w-16 border rounded-md'>
                          37
                          <span className='absolute bottom-0 left-0 w-full py-px bg-blue-300' />
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          38
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          39
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          40
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          41
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          42
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          43
                        </button>
                        <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                          44
                        </button>
                      </div>
                      <div className='hidden mt-4 text-right'>
                        <a
                          className='inline-flex underline text-blue-300 hover:text-blue-400'
                          href='#'
                        >
                          <span className='mr-2'>Show all</span>
                          <svg
                            width={14}
                            height={27}
                            viewBox='0 0 14 27'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z'
                              fill='#3C60D9'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 md:w-1/3 px-2 mb-4'>
                    <div className='py-6 px-4 text-center bg-gray-50'>
                      <a className='font-bold font-heading' href='#'>
                        Location
                      </a>
                      <div className='hidden mt-6'>
                        <label className='flex mb-3 items-center text-lg'>
                          <input type='checkbox' />
                          <span className='ml-2'>Standard</span>
                        </label>
                        <label className='flex items-center text-lg'>
                          <input type='checkbox' />
                          <span className='ml-2'>Next day (yes!)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='w-1/2 md:w-1/3 px-2 mb-4'>
                    <div className='py-6 px-4 text-center bg-gray-50'>
                      <a className='font-bold font-heading' href='#'>
                        Location
                      </a>
                      <input
                        className='hidden mt-6 w-full px-8 py-4 bg-white border rounded-md'
                        type='serach'
                        placeholder='City'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-3/4 px-3'>
                <div className='relative mb-6 bg-gray-50'>
                  <span className='absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500'>
                    -15%
                  </span>
                  <div className='flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12'>
                    <div className='w-full md:w-1/4 px-4 mb-4 md:mb-0'>
                      <a href='#'>
                        <img
                          className='mx-auto md:mx-0 w-40 h-52 object-contain'
                          src='yofte-assets/images/waterbottle.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-full md:w-3/4 px-4'>
                      <a className='block mb-8' href='#'>
                        <h3 className='mb-2 text-xl font-bold font-heading'>
                          BRILE water filter
                        </h3>
                        <p className='mb-6 text-lg font-bold font-heading text-blue-500'>
                          <span>$29.89</span>
                          <span className='text-xs text-gray-500 font-semibold font-heading line-through'>
                            $33.69
                          </span>
                        </p>
                        <p className='max-w-md text-gray-500'>
                          Maecenas commodo libero ut molestie dictum sit lorem
                          ipsum. Morbi placerat eros id porttitor sagittis sagna
                          lorem ipsum.
                        </p>
                      </a>
                      <div className='flex flex-wrap items-center justify-between'>
                        <a
                          className='inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase'
                          href='#'
                        >
                          Add to cart
                        </a>
                        <div className='ml-auto'>
                          <a
                            className='flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={27}
                              height={27}
                              viewBox='0 0 27 27'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z'
                                stroke='black'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </a>
                          <a
                            className='flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={24}
                              height={23}
                              viewBox='0 0 24 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z'
                                fill='black'
                                stroke='black'
                                strokeWidth='0.35'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative mb-6 bg-gray-50'>
                  <span className='absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500'>
                    -15%
                  </span>
                  <div className='flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12'>
                    <div className='w-full md:w-1/4 px-4'>
                      <a className='mb-4 md:mb-0' href='#'>
                        <img
                          className='mx-auto md:mx-0 w-40 h-52 object-contain'
                          src='yofte-assets/images/cycle.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-full md:w-3/4 px-4'>
                      <a className='block mb-8' href='#'>
                        <h3 className='mb-2 text-xl font-bold font-heading'>
                          Bicycle S20
                        </h3>
                        <p className='mb-6 text-lg font-bold font-heading text-blue-500'>
                          <span>$14.30</span>
                          <span className='text-xs text-gray-500 font-semibold font-heading line-through'>
                            $16.90
                          </span>
                        </p>
                        <p className='max-w-md text-gray-500'>
                          Maecenas commodo libero ut molestie dictum sit lorem
                          ipsum. Morbi placerat eros id porttitor sagittis sagna
                          lorem ipsum.
                        </p>
                      </a>
                      <div className='flex flex-wrap items-center justify-between'>
                        <a
                          className='inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase'
                          href='#'
                        >
                          Add to cart
                        </a>
                        <div className='ml-auto'>
                          <a
                            className='flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={27}
                              height={27}
                              viewBox='0 0 27 27'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z'
                                stroke='black'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </a>
                          <a
                            className='flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={24}
                              height={23}
                              viewBox='0 0 24 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z'
                                fill='black'
                                stroke='black'
                                strokeWidth='0.35'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative mb-6 bg-gray-50'>
                  <span className='absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-blue-300 rounded-full uppercase text-blue-300'>
                    New
                  </span>
                  <div className='flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12'>
                    <div className='w-full md:w-1/4 px-4 mb-4 md:mb-0'>
                      <a className='block' href='#'>
                        <img
                          className='mx-auto md:mx-0 w-40 h-52 object-contain'
                          src='yofte-assets/images/skateboard.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-full md:w-3/4 px-4'>
                      <a className='block mb-8' href='#'>
                        <h3 className='mb-2 text-xl font-bold font-heading'>
                          Kiteboard WH-004
                        </h3>
                        <p className='mb-6 text-lg font-bold font-heading text-blue-500'>
                          $199.90
                        </p>
                        <p className='max-w-md text-gray-500'>
                          Maecenas commodo libero ut molestie dictum sit lorem
                          ipsum. Morbi placerat eros id porttitor sagittis sagna
                          lorem ipsum.
                        </p>
                      </a>
                      <div className='flex flex-wrap items-center justify-between'>
                        <a
                          className='inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase'
                          href='#'
                        >
                          Add to cart
                        </a>
                        <div className='ml-auto'>
                          <a
                            className='flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={27}
                              height={27}
                              viewBox='0 0 27 27'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z'
                                stroke='black'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </a>
                          <a
                            className='flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={24}
                              height={23}
                              viewBox='0 0 24 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z'
                                fill='black'
                                stroke='black'
                                strokeWidth='0.35'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative mb-6 bg-gray-50'>
                  <span className='absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-blue-300 rounded-full uppercase text-blue-300'>
                    New
                  </span>
                  <div className='flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12'>
                    <div className='w-full md:w-1/4 px-4 mb-4 md:mb-0'>
                      <a className='block' href='#'>
                        <img
                          className='mx-auto md:mx-0 w-40 h-52 object-contain'
                          src='yofte-assets/images/basketball.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-full md:w-3/4 px-4'>
                      <a className='block mb-8' href='#'>
                        <h3 className='mb-2 text-xl font-bold font-heading'>
                          Nike basketball ball
                        </h3>
                        <p className='mb-6 text-lg font-bold font-heading text-blue-500'>
                          $34.30
                        </p>
                        <p className='max-w-md text-gray-500'>
                          Maecenas commodo libero ut molestie dictum sit lorem
                          ipsum. Morbi placerat eros id porttitor sagittis sagna
                          lorem ipsum.
                        </p>
                      </a>
                      <div className='flex flex-wrap items-center justify-between'>
                        <a
                          className='inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase'
                          href='#'
                        >
                          Add to cart
                        </a>
                        <div className='ml-auto'>
                          <a
                            className='flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={27}
                              height={27}
                              viewBox='0 0 27 27'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z'
                                stroke='black'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </a>
                          <a
                            className='flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={24}
                              height={23}
                              viewBox='0 0 24 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z'
                                fill='black'
                                stroke='black'
                                strokeWidth='0.35'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative bg-gray-50'>
                  <span className='absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-blue-300 rounded-full uppercase text-blue-300'>
                    New
                  </span>
                  <div className='flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12'>
                    <div className='w-full md:w-1/4 px-4 mb-4 md:mb-0'>
                      <a className='block' href='#'>
                        <img
                          className='mx-auto md:mx-0 w-40 h-52 object-contain'
                          src='yofte-assets/images/waterbottle.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-full md:w-3/4 px-4'>
                      <a className='block mb-8' href='#'>
                        <h3 className='mb-2 text-xl font-bold font-heading'>
                          BRILE water filter
                        </h3>
                        <p className='mb-6 text-lg font-bold font-heading text-blue-500'>
                          <span>$29.89</span>
                          <span className='text-xs text-gray-500 font-semibold font-heading line-through'>
                            $33.69
                          </span>
                        </p>
                        <p className='max-w-md text-gray-500'>
                          Maecenas commodo libero ut molestie dictum sit lorem
                          ipsum. Morbi placerat eros id porttitor sagittis sagna
                          lorem ipsum.
                        </p>
                      </a>
                      <div className='flex flex-wrap items-center justify-between'>
                        <a
                          className='inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase'
                          href='#'
                        >
                          Add to cart
                        </a>
                        <div className='ml-auto'>
                          <a
                            className='flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={27}
                              height={27}
                              viewBox='0 0 27 27'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z'
                                stroke='black'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </a>
                          <a
                            className='flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500'
                            href='#'
                          >
                            <svg
                              className='w-6 h-6'
                              width={24}
                              height={23}
                              viewBox='0 0 24 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z'
                                fill='black'
                                stroke='black'
                                strokeWidth='0.35'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden lg:block w-1/4 px-3'>
                <div className='mb-6 py-10 px-12 bg-gray-50'>
                  <h3 className='mb-8 text-2xl font-bold font-heading'>
                    Category
                  </h3>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        New in
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Activewear
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Hoodies &amp; Sweatshirts
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Jackets
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Multipacks
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Bags
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Sports
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-lg' href='#'>
                        Gifts
                      </a>
                    </li>
                    <li>
                      <a className='text-lg' href='#'>
                        Notes
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='mb-6 py-10 px-12 bg-gray-50'>
                  <h3 className='mb-8 text-2xl font-bold font-heading'>
                    Colors
                  </h3>
                  <div className='flex flex-wrap'>
                    <button className='mr-4 mb-2 rounded-full border border-blue-300 p-1'>
                      <div className='rounded-full bg-blue-300 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-orange-300 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-gray-900 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-red-300 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-green-300 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-pink-300 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-yellow-300 w-5 h-5' />
                    </button>
                    <button className='mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1'>
                      <div className='rounded-full bg-gray-100 w-5 h-5' />
                    </button>
                  </div>
                </div>
                <div className='mb-6 py-10 px-12 bg-gray-50'>
                  <h3 className='mb-8 text-2xl font-bold font-heading'>
                    Price
                  </h3>
                  <div>
                    <input
                      className='w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer'
                      type='range'
                      min={1}
                      max={100}
                      defaultValue={50}
                    />
                    <div className='flex justify-between'>
                      <span className='inline-block text-lg font-bold font-heading text-blue-300'>
                        $0
                      </span>
                      <span className='inline-block text-lg font-bold font-heading text-blue-300'>
                        $289
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mb-6 py-10 py-12 pl-12 pr-6 bg-gray-50'>
                  <h3 className='mb-8 text-2xl font-bold font-heading'>Size</h3>
                  <div className='flex flex-wrap -mx-2 -mb-2'>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      36
                    </button>
                    <button className='relative mb-2 mr-1 w-16 border rounded-md'>
                      37
                      <span className='absolute bottom-0 left-0 w-full py-px bg-blue-300' />
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      38
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      39
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      40
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      41
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      42
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      43
                    </button>
                    <button className='mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md'>
                      44
                    </button>
                  </div>
                  <div className='mt-4 text-right'>
                    <a
                      className='inline-flex underline text-blue-300 hover:text-blue-400'
                      href='#'
                    >
                      <span className='mr-2'>Show all</span>
                      <svg
                        width={14}
                        height={27}
                        viewBox='0 0 14 27'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z'
                          fill='#3C60D9'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='mb-6 py-10 px-12 bg-gray-50'>
                  <h3 className='mb-6 text-2xl font-bold font-heading'>
                    Location
                  </h3>
                  <label className='flex mb-3 items-center text-lg'>
                    <input type='checkbox' />
                    <span className='ml-2'>Standard</span>
                  </label>
                  <label className='flex items-center text-lg'>
                    <input type='checkbox' />
                    <span className='ml-2'>Next day (yes!)</span>
                  </label>
                </div>
                <div className='mb-6 py-10 px-12 bg-gray-50'>
                  <h3 className='mb-6 text-2xl font-bold font-heading'>
                    Location
                  </h3>
                  <input
                    className='w-full px-8 py-4 bg-white border rounded-md'
                    type='serach'
                    placeholder='City'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 bg-blue-800'>
          <div className='container mx-auto px-4'>
            <div className='text-center pb-20 border-b border-gray-500'>
              <a
                className='inline-block mb-20 text-3xl font-bold font-heading text-white'
                href='#'
              >
                <img
                  className='h-9'
                  src='yofte-assets/logos/yofte-logo-white.svg'
                  alt=''
                  width='auto'
                />
              </a>
              <ul className='flex flex-wrap -mb-4 -mx-3 items-center justify-center'>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Category
                  </a>
                </li>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Collection
                  </a>
                </li>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Story
                  </a>
                </li>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Brand
                  </a>
                </li>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Partners
                  </a>
                </li>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Videos
                  </a>
                </li>
                <li className='w-1/2 md:w-1/3 lg:w-auto px-3 mb-4'>
                  <a
                    className='inline-block w-32 py-2 px-6 rounded-full border border-white hover:bg-white hover:text-blue-900 font-semibold font-heading text-white transition duration-200'
                    href='#'
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className='flex mt-20 -mx-4 flex-wrap text-left'>
                <div className='w-full lg:w-auto px-4 mb-10 lg:mb-0'>
                  <h3 className='mb-3 text-xl text-orange-300 font-bold font-heading'>
                    Contact Us
                  </h3>
                  <p className='text-2xl md:text-3xl text-white font-bold font-heading'>
                    +41 0087 44 431
                  </p>
                </div>
                <div className='w-full lg:w-auto px-4 mb-10 lg:mb-0'>
                  <h3 className='mb-3 text-xl text-orange-300 font-bold font-heading'>
                    Email
                  </h3>
                  <p className='text-2xl md:text-3xl text-white font-bold font-heading'>
                    help@example.com
                  </p>
                </div>
                <div className='w-auto md:ml-auto px-4'>
                  <div className='flex flex-wrap items-center'>
                    <h3 className='mr-10 text-xl text-orange-300 font-bold font-heading'>
                      Follow Us:
                    </h3>
                    <div className='flex'>
                      <a
                        className='inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full'
                        href='#'
                      >
                        <img
                          src='yofte-assets/buttons/facebook-white-circle.svg'
                          alt=''
                        />
                      </a>
                      <a
                        className='inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full'
                        href='#'
                      >
                        <img
                          src='yofte-assets/buttons/instagram-circle.svg'
                          alt=''
                        />
                      </a>
                      <a
                        className='inline-flex items-center justify-center w-12 h-12 rounded-full'
                        href='#'
                      >
                        <img
                          src='yofte-assets/buttons/twitter-circle.svg'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10 text-center'>
              <p className='text-gray-400'>© Copyright 2021 Yofte</p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

