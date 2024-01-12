import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from './Link'
import {
  CodeIcon,
  HomeIcon,
  Pencil1Icon,
  DiscIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  FrameIcon,
  LaptopIcon,
  BarChartIcon,
  DrawingPinIcon,
  Link2Icon,
  QuoteIcon,
  CalendarIcon,
  PersonIcon,
  ArchiveIcon,
  TwitterLogoIcon,
  RocketIcon,
  ChatBubbleIcon,
  EnterIcon,
} from '@radix-ui/react-icons'
import useSound from 'use-sound'
import GhostPlugins from 'pages/ghostPlugins'

export default function GhostMembership() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDiscount, setIsDiscount] = useState(false)
  const [isDiscount2, setIsDiscount2] = useState(false)
  const [isDiscount3, setIsDiscount3] = useState(false)
  const [stripeModalOpen, setStripeModalOpen] = useState(false)
  const { data: session } = useSession()
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        duration: 0.3,
        delay: 0.4,
      },
    },
  }
  // const ghost = () => {
  //   console.log('dsdffsfdsfsf')
  // }
  const isshow = (index) => {
    switch (index) {
      case 1:
        setIsDiscount(true)
        setIsDiscount2(false)
        setIsDiscount3(false)
        break
      case 2:
        setIsDiscount(false)
        setIsDiscount2(true)
        setIsDiscount3(false)
        break
      case 3:
        setIsDiscount(false)
        setIsDiscount2(false)
        setIsDiscount3(true)
        break
      default:
        setIsDiscount(false)
        setIsDiscount2(false)
        setIsDiscount3(false)
        break
    }
  }

  const [ThemeSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <Menu.Button className=" ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600">
          <motion.button
            className="flex h-8 w-8 items-center justify-center p-2"
            whileTap={{
              scale: 0.5,
            }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            aria-label="Toggle List Menu"
            type="button"
          >
            {isOpen ? (
              <HamburgerMenuIcon className="h-4 w-4" />
            ) : (
              <HamburgerMenuIcon className="h-4 w-4" />
            )}
          </motion.button>
        </Menu.Button>
      </div>
      <div>
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <HomeIcon className="mr-4 mt-0.5" /> Ghost+ Super Plugins
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/blog">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <Pencil1Icon className="mr-4 mt-0.5" /> Ghost+ Templates
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <motion.div onClick={() => setStripeModalOpen(!stripeModalOpen)}>
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <CodeIcon className="mr-4 mt-0.5" /> Ghost+ 50
                    </div>
                  </a>
                </motion.div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/projects">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <ArchiveIcon className="mr-4 mt-0.5" /> Member Login
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
      <AnimatePresence className="">
        {stripeModalOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="fixed top-0 right-0 bottom-0 left-0 z-[990] flex items-center justify-center bg-black/80"
          >
            <motion.div
              className="flex h-auto w-[85%] max-w-[500px] flex-col justify-between rounded-[10px] bg-white px-[40px] py-[40px]"
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-end">
                <svg
                  onClick={() => setStripeModalOpen(false)}
                  className="h-[22px] w-[22px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                </svg>
              </div>
              <div className="m-auto">
                <p className="inline-block h-auto w-auto rounded-[10px] bg-[#0174F2] py-[7px] px-3">
                  Membership
                </p>
              </div>
              <div className="flex h-[80px] w-full items-center justify-center">
                <h5 className="text-[25px] font-[500] text-[#787878]">Ghost + 50 (Limited)😉</h5>
              </div>
              <div className="modal-content text-black">
                Enjoy exclusive access to a never-ending 50% off discount code that can be used
                towards Super Plugins and Templates.
              </div>
              <div className="text-black">
                <hr />
                <div className="py-[10px]">Unlimited, Never Ending</div>
                <div className="flex items-center justify-end">
                  <svg
                    onClick={() => isshow(1)}
                    className="h-[10px] w-[10px] cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                  </svg>
                </div>
                {isDiscount && <div>sdfsdfsfdsfdsdfsfd</div>}
                <hr />
                <div className="py-[10px]">Start and Stop Anytime</div>
                <div className="flex items-center justify-end">
                  <svg
                    onClick={() => isshow(2)}
                    className="h-[10px] w-[10px] cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                  </svg>
                </div>
                {isDiscount2 && <div>sdfsdfsfdsfdsdfsfd</div>}
                <hr />
                <div className="py-[10px]">Exclusive Discount Code</div>
                <div className="flex items-center justify-end">
                  <svg
                    onClick={() => isshow(3)}
                    className="h-[10px] w-[10px] cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                  </svg>
                </div>
                {isDiscount3 && <div>sdfsdfsfdsfdsdfsfd</div>}
                <hr />
              </div>
              <div className="flex flex-col gap-[10px] p-[10px]">
                <button className="inline-block h-auto w-full rounded-[10px] bg-black py-[10px] px-[5px]">
                  Spots are Limited. Grab yours today!
                </button>
                <Link href="/ghostPlugins">
                  <a
                    onClick={() => setStripeModalOpen(false)}
                    className="inline-block h-auto w-full cursor-pointer rounded-[10px] border border-black py-[10px] px-[5px] text-black"
                  >
                    $10 Per Month-Join Now
                  </a>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Menu>
  )
}