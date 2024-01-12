export default function GhostPlugins() {
    return (
      <>
        <div>
          <p>Ghost Plugins</p>
          <hr />
        </div>
        <div className="max-w-[870px] h-auto mt-[33px]">
          <div>
            {/* 1.you account */}
          <div className="max-w-[418.5px] p-[22px] border border-1 border-white mb-[22px]">
            <div className="flex justify-between">
              <div>1. Your Account</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div>
              <p>Signed in with {'famousman0412@gmail.com'}</p>
              <p>Not you? <a>Sign out</a></p>
            </div>
            <div className="mt-[22px]">
              <button className="w-full p-[11px] text-center rounded-sm bg-white text-black">Countinue</button>
            </div>
          </div>
          {/* 2. comment card */}
          <div className="max-w-[418.5px] p-[22px] border border-1 border-white">
            <div className="flex justify-between">
              <div>2. Comment Card</div>
              <div>
                <button>Edit</button>
              </div>
            </div>
            <div>
              <p>Signed in with {'admin@gmail.com'}</p>
              <p>Not you? <a>Sign out</a></p>
            </div>
            <div>{'admin@gmail.com'}</div>
            <div className="mt-[22px]">
              <button className="w-full p-[11px] text-center rounded-sm bg-white text-black">Countinue</button>
            </div>
          </div>
          </div>
        </div>
      </>
    )
  }
  