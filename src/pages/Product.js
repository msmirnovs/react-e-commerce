import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Product() {
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
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <ul className='flex flex-wrap mb-8 items-center'>
              <li className='mr-5'>
                <a
                  className='inline-block mr-5 text-xs font-bold font-heading uppercase text-gray-300'
                  href='#'
                >
                  HOME
                </a>
                <span className='inline-block'>
                  <svg
                    width={6}
                    height={11}
                    viewBox='0 0 6 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.131073 0.755835C-0.0436907 0.581885 -0.0436907 0.302414 0.131073 0.129744C0.305837 -0.0429273 0.588197 -0.0435662 0.76296 0.129744L5.86893 5.18707C6.04369 5.35975 6.04369 5.63922 5.86893 5.81317L0.762959 10.8705C0.588196 11.0432 0.305836 11.0432 0.131072 10.8705C-0.0436916 10.6972 -0.0436916 10.4171 0.131072 10.2444L4.78774 5.4998L0.131073 0.755835Z'
                      fill='#151515'
                    />
                  </svg>
                </span>
              </li>
              <li className='mr-5'>
                <a
                  className='inline-block mr-5 text-xs font-bold font-heading uppercase text-gray-300'
                  href='#'
                >
                  WATER FILTERS
                </a>
                <span className='inline-block'>
                  <svg
                    width={6}
                    height={11}
                    viewBox='0 0 6 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.131073 0.755835C-0.0436907 0.581885 -0.0436907 0.302414 0.131073 0.129744C0.305837 -0.0429273 0.588197 -0.0435662 0.76296 0.129744L5.86893 5.18707C6.04369 5.35975 6.04369 5.63922 5.86893 5.81317L0.762959 10.8705C0.588196 11.0432 0.305836 11.0432 0.131072 10.8705C-0.0436916 10.6972 -0.0436916 10.4171 0.131072 10.2444L4.78774 5.4998L0.131073 0.755835Z'
                      fill='#151515'
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a
                  className='inline-block text-xs font-bold font-heading uppercase text-gray-300'
                  href='#'
                >
                  BRILE WATER FILTER CARAFE
                </a>
              </li>
            </ul>
            <div className='flex -mx-1 mb-16' style={{ maxHeight: 590 }}>
              <div className='w-full lg:w-1/2 px-1 md:px-4'>
                <img
                  className='object-cover w-full h-full'
                  src='yofte-assets/images/product-bottle.png'
                  alt=''
                />
              </div>
              <div className='w-full h-full lg:w-1/2 px-1 md:px-4'>
                <div className='flex -mx-1 md:-mx-4 mb-2 md:mb-8'>
                  <div className='w-1/2 px-1 md:px-4'>
                    <img
                      className='object-cover w-full h-full'
                      src='yofte-assets/images/product-bottle2.png'
                      alt=''
                    />
                  </div>
                  <div className='w-1/2 px-1 md:px-4'>
                    <img
                      className='object-cover w-full h-full'
                      src='yofte-assets/images/product-bottle4.png'
                      alt=''
                    />
                  </div>
                </div>
                <img
                  className='object-cover w-full h-full'
                  style={{ maxHeight: 270 }}
                  src='yofte-assets/images/product-bottle.png'
                  alt=''
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full md:w-1/2 px-4 mb-12 md:mb-0'>
                <span className='text-gray-500'>Brille</span>
                <h2 className='mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading'>
                  BRILE water filter carafe
                </h2>
                <div className='mb-8'>
                  <button>
                    <img
                      className='h-6'
                      src='yofte-assets/elements/star-gold.svg'
                      alt=''
                    />
                  </button>
                  <button>
                    <img
                      className='h-6'
                      src='yofte-assets/elements/star-gold.svg'
                      alt=''
                    />
                  </button>
                  <button>
                    <img
                      className='h-6'
                      src='yofte-assets/elements/star-gold.svg'
                      alt=''
                    />
                  </button>
                  <button>
                    <img
                      className='h-6'
                      src='yofte-assets/elements/star-gold.svg'
                      alt=''
                    />
                  </button>
                  <button>
                    <img
                      className='h-6'
                      src='yofte-assets/elements/star-gray.svg'
                      alt=''
                    />
                  </button>
                </div>
                <p className='inline-block mb-8 text-2xl font-bold font-heading text-blue-300'>
                  <span>$29.99</span>
                  <span className='font-normal text-base text-gray-400 line-through'>
                    $33.69
                  </span>
                </p>
                <p className='max-w-md text-gray-500'>
                  Maecenas commodo libero ut molestie dictum. Morbi placerat
                  eros id porttitor sagittis. porta, eleifend feugiat nunc. In
                  semper euismod mi a accums lorem sad. Morbi at auctor nibh.
                </p>
              </div>
              <div className='w-full md:w-1/2 px-4'>
                <div className='mb-12'>
                  <span className='block font-bold font-heading text-gray-400 uppercase'>
                    Size
                  </span>
                  <div className='flex flex-wrap -mx-2 -mb-2'>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        XS
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        S
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='relative block py-4 text-center font-bold font-heading border text-blue-300 rounded-md'
                        href='#'
                      >
                        M
                        <span className='absolute bottom-0 left-0 block w-full h-px bg-blue-300' />
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        L
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        XL
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        XXL
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        3XL
                      </a>
                    </div>
                    <div className='w-1/3 md:w-1/4 p-2'>
                      <a
                        className='block py-4 text-center font-bold font-heading text-gray-600 border hover:border-gray-500 rounded-md'
                        href='#'
                      >
                        4XL
                      </a>
                    </div>
                  </div>
                </div>
                <span className='block mb-4 font-bold font-heading text-gray-400 uppercase'>
                  QTY
                </span>
                <div className='flex -mx-2 flex-wrap mb-14 items-center'>
                  <div className='w-full lg:w-1/5 px-2 mb-4 lg:mb-0'>
                    <div className='inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'>
                      <button className='py-2 hover:text-gray-700'>
                        <svg
                          width={12}
                          height={2}
                          viewBox='0 0 12 2'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g opacity='0.35'>
                            <rect
                              x={12}
                              width={2}
                              height={12}
                              transform='rotate(90 12 0)'
                              fill='currentColor'
                            />
                          </g>
                        </svg>
                      </button>
                      <input
                        className='w-12 m-0 px-2 py-5 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md'
                        type='number'
                        placeholder={1}
                      />
                      <button className='py-2 hover:text-gray-700'>
                        <svg
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g opacity='0.35'>
                            <rect
                              x={5}
                              width={2}
                              height={12}
                              fill='currentColor'
                            />
                            <rect
                              x={12}
                              y={5}
                              width={2}
                              height={12}
                              transform='rotate(90 12 5)'
                              fill='currentColor'
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='w-full lg:w-2/5 px-2 mb-4 lg:mb-0'>
                    <a
                      className='block bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200'
                      href='#'
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className='w-full lg:w-2/5 px-2'>
                    <a
                      className='flex-shrink-0 flex w-full flex-wrap items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500'
                      href='#'
                    >
                      <svg
                        className='-mt-1 mr-2'
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
                      <span className='font-bold font-heading uppercase'>
                        Wishlist
                      </span>
                    </a>
                  </div>
                </div>
                <div className='flex items-center justify-between py-6 border-b'>
                  <h4 className='text-xl font-bold font-heading'>
                    Description
                  </h4>
                  <a
                    className='inline-flex items-center justify-center w-12 h-12 border hover:border-gray-500 rounded-md'
                    href='#'
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x={5} width={2} height={12} fill='#161616' />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform='rotate(90 12 5)'
                        fill='#161616'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex items-center justify-between py-6 border-b'>
                  <h4 className='text-xl font-bold font-heading'>
                    Customer reviews
                  </h4>
                  <a
                    className='inline-flex items-center justify-center w-12 h-12 border hover:border-gray-500 rounded-md'
                    href='#'
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect x={5} width={2} height={12} fill='#161616' />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform='rotate(90 12 5)'
                        fill='#161616'
                      />
                    </svg>
                  </a>
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

