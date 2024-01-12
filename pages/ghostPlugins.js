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
      <div>
        <p>Ghost Plugins</p>
        <hr />
      </div>
      <div className="mt-[33px] h-auto max-w-[870px]">
        <div className='flex flex-col gap-[22px]'>
          {/* 1.you account */}
          <div className="border-1 max-w-[418.5px] border border-white p-[22px]">
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
          <div className="border-1 max-w-[418.5px] border border-white p-[22px]">
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
          <div className="border-1 max-w-[418.5px] border border-white p-[22px]">
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
        </div>
      </div>
    </>
  )
}
