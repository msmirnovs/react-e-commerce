import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Checkout() {
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
            <h2 className='mb-14 text-5xl font-bold font-heading'>Checkout</h2>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/2 px-4'>
                <form action=''>
                  <div className='flex mb-10 items-center'>
                    <span className='inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-blue-300 text-white'>
                      1
                    </span>
                    <h3 className='text-2xl font-bold font-heading'>
                      Delivery
                    </h3>
                  </div>
                  <div className='mb-12'>
                    <label
                      className='font-bold font-heading text-gray-600'
                      htmlFor=''
                    >
                      E-mail address
                    </label>
                    <input
                      className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                      type='email'
                    />
                  </div>
                  <div className='flex mb-10 items-center'>
                    <span className='inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-white'>
                      2
                    </span>
                    <h3 className='text-2xl font-bold font-heading'>
                      Shipping informations
                    </h3>
                  </div>
                  <div className='mb-12'>
                    <div className='flex flex-wrap -mx-4 mb-10'>
                      <div className='w-full md:w-1/2 px-4 mb-10 md:mb-0'>
                        <label
                          className='font-bold font-heading text-gray-600'
                          htmlFor=''
                        >
                          First name
                        </label>
                        <input
                          className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                          type='text'
                        />
                      </div>
                      <div className='w-full md:w-1/2 px-4'>
                        <label
                          className='font-bold font-heading text-gray-600'
                          htmlFor=''
                        >
                          Last name
                        </label>
                        <input
                          className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='mb-10'>
                      <label
                        className='font-bold font-heading text-gray-600'
                        htmlFor=''
                      >
                        Address
                      </label>
                      <input
                        className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                        type='text'
                      />
                    </div>
                    <div className='mb-10'>
                      <label
                        className='font-bold font-heading text-gray-600'
                        htmlFor=''
                      >
                        Appartament
                      </label>
                      <input
                        className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                        type='text'
                      />
                    </div>
                    <div className='mb-10'>
                      <label
                        className='font-bold font-heading text-gray-600'
                        htmlFor=''
                      >
                        Country/Region
                      </label>
                      <input
                        className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                        type='text'
                      />
                    </div>
                    <div className='flex flex-wrap -mx-4'>
                      <div className='w-full md:w-2/3 px-4 mb-10 md:mb-0'>
                        <label
                          className='font-bold font-heading text-gray-600'
                          htmlFor=''
                        >
                          City
                        </label>
                        <input
                          className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                          type='text'
                        />
                      </div>
                      <div className='w-full md:w-1/3 px-4'>
                        <label
                          className='font-bold font-heading text-gray-600'
                          htmlFor=''
                        >
                          Zip Code
                        </label>
                        <input
                          className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                          type='text'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex mb-10 items-center'>
                    <span className='inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-orange-300 text-white'>
                      3
                    </span>
                    <h3 className='text-2xl font-bold font-heading'>
                      Shipping methods
                    </h3>
                  </div>
                  <div className='mb-12'>
                    <div className='mb-2 py-3 px-8 bg-white rounded-full'>
                      <div className='flex flex-wrap items-center'>
                        <label
                          className='inline-flex mb-1 pr-4 py-2 items-center sm:border-r'
                          htmlFor=''
                        >
                          <input
                            type='radio'
                            name='deliveryType'
                            defaultValue=''
                            defaultChecked=''
                          />
                          <span className='ml-4 text-sm font-bold font-heading'>
                            Standard delivery
                          </span>
                        </label>
                        <p className='order-last w-full sm:w-auto pl-4 text-sm text-gray-500'>
                          3-4 business days
                        </p>
                        <span className='sm:order-last ml-auto text-blue-300 font-bold font-heading'>
                          $3.00
                        </span>
                      </div>
                    </div>
                    <div className='py-3 px-8 bg-white rounded-full'>
                      <div className='flex flex-wrap items-center'>
                        <label
                          className='inline-flex mb-1 pr-4 py-2 items-center sm:border-r'
                          htmlFor=''
                        >
                          <input
                            type='radio'
                            name='deliveryType'
                            defaultValue=''
                          />
                          <span className='ml-4 text-sm font-bold font-heading'>
                            Express
                          </span>
                        </label>
                        <p className='order-last w-full sm:w-auto pl-4 text-sm text-gray-500'>
                          Next day
                        </p>
                        <span className='sm:order-last ml-auto text-blue-300 font-bold font-heading'>
                          $20.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex mb-10 items-center'>
                    <span className='inline-flex mr-8 items-center justify-center w-12 h-12 rounded-full bg-pink-300 text-white'>
                      4
                    </span>
                    <h3 className='text-2xl font-bold font-heading'>
                      Order summary
                    </h3>
                  </div>
                  <div>
                    <div className='flex flex-wrap -mx-4 mb-10'>
                      <label
                        className='flex px-4 w-full sm:w-auto items-center'
                        htmlFor=''
                      >
                        <input
                          type='radio'
                          name='paymentType'
                          defaultValue=''
                          defaultChecked=''
                        />
                        <span className='ml-5 text-sm'>Credit card</span>
                      </label>
                      <label
                        className='flex px-4 w-full sm:w-auto items-center'
                        htmlFor=''
                      >
                        <input
                          type='radio'
                          name='paymentType'
                          defaultValue=''
                        />
                        <span className='ml-5 text-sm'>Cash on Delivery</span>
                      </label>
                      <label
                        className='flex px-4 w-full sm:w-auto items-center'
                        htmlFor=''
                      >
                        <input
                          type='radio'
                          name='paymentType'
                          defaultValue=''
                        />
                        <span className='ml-5 text-sm'>PayPal</span>
                      </label>
                    </div>
                    <div className='mb-10'>
                      <label
                        className='font-bold font-heading text-gray-600'
                        htmlFor=''
                      >
                        Name on Card
                      </label>
                      <input
                        className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                        type='text'
                      />
                    </div>
                    <div className='mb-10'>
                      <label
                        className='font-bold font-heading text-gray-600'
                        htmlFor=''
                      >
                        Credit Card Type
                      </label>
                      <input
                        className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                        type='text'
                      />
                    </div>
                    <div className='flex flex-wrap -mx-4'>
                      <div className='w-full w-2/3 px-4'>
                        <div className='mb-10'>
                          <label
                            className='font-bold font-heading text-gray-600'
                            htmlFor=''
                          >
                            Credit Card Number
                          </label>
                          <input
                            className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                            type='text'
                          />
                        </div>
                      </div>
                      <div className='w-full w-1/3 px-4'>
                        <div className='mb-10'>
                          <label
                            className='font-bold font-heading text-gray-600'
                            htmlFor=''
                          >
                            CVV
                          </label>
                          <input
                            className='block w-full mt-4 py-4 px-4 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                            type='text'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='py-16 px-6 md:px-14 bg-white'>
                  <div className='flex mb-12 items-center'>
                    <h2 className='text-4xl font-bold font-heading'>
                      Order summary
                    </h2>
                    <span className='flex-shrink-0 inline-flex ml-4 w-8 h-8 items-center justify-center rounded-full bg-orange-300 text-white'>
                      2
                    </span>
                  </div>
                  <div className='mb-12 pb-16 border-b'>
                    <div className='flex -mx-4 mb-8 flex-wrap items-center'>
                      <div className='self-stretch w-full lg:w-1/4 px-4'>
                        <img
                          className='mb-4 lg:mb-0 h-32 lg:h-42 object-contain'
                          src='yofte-assets/images/waterbottle.png'
                          alt=''
                        />
                      </div>
                      <div className='w-full md:w-3/4 px-4'>
                        <div className='flex justify-between'>
                          <div className='pr-2'>
                            <h3 className='mb-2 text-xl font-bold font-heading'>
                              BRILE water filter carafe
                            </h3>
                            <p className='mb-8 text-gray-500'>
                              Maecenas 0.7 commodo sit
                            </p>
                          </div>
                          <span className='text-lg text-blue-300 font-bold font-heading'>
                            $29.89
                          </span>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-gray-500'>In Stock</p>
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
                              className='w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md'
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
                      </div>
                    </div>
                    <div className='flex -mx-4 mb-8 flex-wrap items-center'>
                      <div className='self-stretch w-full lg:w-1/4 px-4'>
                        <img
                          className='mb-4 lg:mb-0 h-32 lg:h-42 object-contain'
                          src='yofte-assets/images/basketball.png'
                          alt=''
                        />
                      </div>
                      <div className='w-full md:w-3/4 px-4'>
                        <div className='flex justify-between'>
                          <div className='pr-2'>
                            <h3 className='mb-2 text-xl font-bold font-heading'>
                              Nike basketball ball
                            </h3>
                            <p className='mb-8 text-gray-500'>
                              Lorem ipsum dolor L
                            </p>
                          </div>
                          <span className='text-lg text-blue-300 font-bold font-heading'>
                            $59.78
                          </span>
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className='text-gray-500'>In Stock</p>
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
                              className='w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md'
                              type='number'
                              placeholder={2}
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
                      </div>
                    </div>
                  </div>
                  <div className='mb-12'>
                    <div className='mb-10'>
                      <div className='py-3 px-10 bg-blue-50 rounded-full'>
                        <div className='flex justify-between'>
                          <span className='font-medium'>Subtotal</span>
                          <span className='font-bold font-heading'>$89.67</span>
                        </div>
                      </div>
                      <div className='py-3 px-10 rounded-full'>
                        <div className='flex justify-between'>
                          <span className='font-medium'>Shipping</span>
                          <span className='font-bold font-heading'>$11.00</span>
                        </div>
                      </div>
                      <div className='py-3 px-10 bg-blue-50 rounded-full'>
                        <div className='flex justify-between'>
                          <span className='font-medium'>Tax</span>
                          <span className='font-bold font-heading'>$0.00</span>
                        </div>
                      </div>
                      <div className='py-3 px-10 rounded-full'>
                        <div className='flex justify-between'>
                          <span className='text-base md:text-xl font-bold font-heading'>
                            Total
                          </span>
                          <span className='font-bold font-heading'>
                            $100.67
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-10'>
                    <span className='inline-block mb-4 font-medium'>
                      Apply discount code:
                    </span>
                    <div className='flex mb-12 flex-wrap lg:flex-nowrap items-center'>
                      <input
                        className='mb-4 md:mb-0 mr-6 w-full px-8 py-4 placeholder-gray-800 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md'
                        type='text'
                        placeholder='SUMMER30X'
                      />
                      <a
                        className='inline-block mb-4 md:mb-0 px-8 py-4 text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md'
                        href='#'
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                  <a
                    className='block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200'
                    href='#'
                  >
                    Confirm Order
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

