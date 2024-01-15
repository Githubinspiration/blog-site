import { useState } from 'react'
export default function GhostPlugins() {
  const [data, setData] = useState(undefined)
  const [leaveNote, setLeaveNote] = useState('')
  const option = [
    '😍 - Amazing',
    '😁 - Great',
    '😊 - Good ',
    '🙂 - First Time',
    '😐 - Meh',
    '🙁 - Bad',
    '😡 - #!@*&',
  ]

  const optionSelect = (event) => {
    setData(event.target.value)
    console.log(data)
  }
  const leaveHandler = (e) => {
    setLeaveNote(e.target.value)
  }
  return (
    <>
      <div className="mb-[33px]">
        <p>Ghost Plugins</p>
        <hr />
      </div>
      <div className="m-auto flex h-auto w-[870px] justify-between">
        <div className="flex flex-col gap-[22px]">
          {/* 1.you account */}
          <div className="border-1 w-[418.5px] border border-white p-[22px]">
            <div className="mb-[22px] flex justify-between">
              <div className="text-[22px]">1. Your Account</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-[14px]">
              <p className="">Signed in with {'admin@gmail.com'}</p>
              <p>
                Not you? <a>Sign out</a>
              </p>
            </div>
            <div className="text-[14px]">{'admin@gmail.com'}</div>
            <div className="mt-[22px]">
              <button className="w-full rounded-sm bg-white p-[11px] text-center text-black">
                Countinue
              </button>
            </div>
          </div>
          {/* 2. comment card */}
          <div className="border-1 w-[418.5px] border border-white p-[22px]">
            <div className="mb-[22px] flex justify-between">
              <div className="text-[22px]">2. Comment Card</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-[14px]">
              <div className="flex flex-col gap-3">
                <p className="text-[14px]">Rate Your Experience : {data}</p>
                <select className=" w-full text-black " onChange={optionSelect}>
                  <option></option>
                  {option.map((option, index) => {
                    return (
                      <option value={option} key={index}>
                        {option}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[14px]">Leave a Note : {leaveNote}</p>
                <input type="text" className="text-black" onChange={leaveHandler} />
              </div>
            </div>
            <div className="mt-[22px]">
              <button className="w-full rounded-sm bg-white p-[11px] text-center text-black">
                Countinue
              </button>
            </div>
          </div>
          {/* 3. Payment & Discounts */}
          <div className="border-1 w-[418.5px] border border-white p-[22px]">
            <div className="mb-[22px] flex justify-between">
              <div className="text-[22px]">3. Payment & Discounts</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-[14px]">
              <div className="flex flex-col gap-3">
                <p className="text-[14px]">Rate Your Experience : {data}</p>
                <select className=" w-full text-black " onChange={optionSelect}>
                  <option></option>
                  {option.map((option, index) => {
                    return (
                      <option value={option} key={index}>
                        {option}
                      </option>
                    )
                  })}
                </select>
                <p>Transactions are secure and payment information is saved</p>
              </div>
              <div className="flex">
                <input type="text" className="w-[70%] text-black" placeholder="Discount Code" />
                <button className="w-[30%] border-none bg-slate-300 text-center text-black">
                  Apply
                </button>
              </div>
            </div>
            <div className="mt-[22px]">
              <button className="w-full rounded-sm bg-white p-[11px] text-center text-black">
                Countinue
              </button>
            </div>
          </div>
          {/* 4. Review & Purchase */}
          <div className="border-1 w-[418.5px] border border-white p-[22px]">
            <div className="mb-[22px] flex justify-between">
              <div className="text-[22px]">3. Payment & Discounts</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-[14px]">
              <div className="flex flex-col gap-3">
                <p className="text-[14px]">
                  By Clicking subscribe, you agree that: your subscription will be set to continuous
                  auto-renewal payments of $10.00 every month with your next payment due on February
                  13, 2024. You atuthorize us to take this amount from your card every month. You
                  can cancel your subscription at any time on your account
                </p>
              </div>
              <div className="flex cursor-pointer justify-between">
                <a>Return Policy.</a>
                <a>Terms of Service</a>
                <a>Privacy Policy</a>
              </div>
            </div>
            <div className="mt-[22px]">
              <button className="w-full rounded-sm bg-white p-[11px] text-center text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-1 w-[418.5px] border border-white p-[22px]">
            <div className="mb-[22px] flex justify-between">
              <div className="text-[22px]">Order Summary</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[20px]">Ghost +50</p>
              <p>Every month</p>
              <div className="flex">
                <input type="text" className="w-[70%] text-black" placeholder="Discount Code" />
                <button className="w-[30%] border-none bg-slate-300 text-center text-black">
                  Apply
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-slate-500">Subtotal</p>
                    <p className="text-slate-500">$10.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-slate-500">tax</p>
                    <p className="text-slate-500">$0.00</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>$10.00</p>
                </div>
                <hr />
              </div>
              <div className="m-auto flex items-center gap-4">
                <div>
                  <svg
                    className="h-[15px] w-[15px] cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                  >
                    <path
                      d="M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p>SECURE SSL CHECHOUT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
