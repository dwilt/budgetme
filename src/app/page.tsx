import { BankNotesIcon } from "@/components/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav
        id="main-navigation"
        className="fixed left-0 right-0 bottom-0 h-20 bg-slate-300 flex items-center justify-center"
      >
        <a href="#" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">Transactions</span>
        </a>
      </nav>
      <main className="mb-20">
        <section id="summary" className="m-4 pb-4">
          <h1 className="text-2xl mb-3 font-bold tracking-tight dark:text-slate-50">
            July Summary
          </h1>
          <div className="grid">
            <div className="flex items-center mb-4 dark:text-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>

              <div id="summary-daily-spend">
                <h2 className="font-semibold ">Daily Spend</h2>
                <span className="font-mono mb-2">$126.45</span>
              </div>
            </div>
            <div className="flex items-center mb-4 dark:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <div id="summary-expenses-total">
                <h2 className="font-semibold">Expenses Total</h2>
                <span className="font-mono mb-2">$8,851.93</span>
              </div>
            </div>
            <div className="flex items-center mb-4 dark:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>

              <div id="summary-savings">
                <h2 className="font-semibold">Savings</h2>
                <span className="font-mono mb-2">$5,000.00</span>
              </div>
            </div>
          </div>
        </section>
        <section id="transactions" className="m-4 pb-4">
          <h1 className="text-2xl mb-3 font-bold tracking-tight dark:text-slate-50">
            July 7
          </h1>
          <ul className="flex flex-col mb-5">
            <li className="dark:text-slate-100 pb-3 border-b mb-3 border-b-slate-800">
              <button className="flex items-center w-full text-left">
                {/* <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                </div> */}

                <div className="min-w-0">
                  <div className="truncate mr-3 min-w-0">
                    Wing night with Jake at the Spring Valley Inn
                  </div>
                  <div className="rounded-sm text-slate-100 inline-flex items-center py-1 pl-1 pr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-2 leading-none text-xs uppercase font-medium">
                      Dining out
                    </span>
                  </div>
                </div>
                <div className="font-mono text-red-500 leading-none shrink-0">
                  -$15.93
                </div>
              </button>
            </li>
            <li className="dark:text-slate-100 pb-3 border-b mb-3 border-b-slate-800">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="truncate mr-3 min-w-0 flex-1">PP&L</div>
                  <div className="rounded-sm text-slate-100 inline-flex items-center py-1 pl-1 pr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-2 leading-none text-xs uppercase font-medium">
                      Utilities
                    </span>
                  </div>
                  <div className="rounded-sm text-slate-100 inline-flex items-center py-1 pl-1 pr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-2 leading-none text-xs uppercase font-medium">
                      1x
                    </span>
                  </div>
                </div>
                <div className="font-mono text-red-500 leading-none shrink-0">
                  -$215.10
                </div>
              </div>
            </li>
            <li className="dark:text-slate-100 pb-3 border-b mb-3 border-b-slate-800">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="truncate mr-3 min-w-0 flex-1">
                    Air Paycheck
                  </div>
                  <div className="rounded-sm text-slate-100 inline-flex items-center py-1 pl-1 pr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-2 leading-none text-xs uppercase font-medium">
                      Income
                    </span>
                  </div>
                  <div className="rounded-sm text-slate-100 inline-flex items-center py-1 pl-1 pr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-2 leading-none text-xs uppercase font-medium">
                      2x
                    </span>
                  </div>
                </div>
                <div className="font-mono dark:text-green-600 leading-none shrink-0">
                  $8,600.50
                </div>
              </div>
            </li>
            <li className="dark:text-slate-100 border-b-slate-800">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="truncate mr-3 min-w-0 flex-1">Venmo</div>
                  <div className="rounded-sm text-slate-100 inline-flex items-center py-1 pl-1 pr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-2 leading-none text-xs uppercase font-medium">
                      Reimbursement
                    </span>
                  </div>
                </div>
                <div className="font-mono dark:text-green-600 leading-none shrink-0">
                  $22.50
                </div>
              </div>
            </li>
          </ul>
          <button className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex items-center justify-center rounded-md border-2 border-dashed border-slate-500 text-sm leading-6 text-slate-100 font-medium py-3">
            <svg
              className="group-hover:text-blue-500 mr-1 text-slate-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </button>
        </section>

        {/* <button className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          New transaction
        </button> */}
      </main>
    </div>
  );
}
