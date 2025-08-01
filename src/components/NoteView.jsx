
import NoteContent from './NoteContent'
import NoteSidebar from './NoteSidebar'
import { CiSearch, CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const NoteView = () => {
  return (
    <div>
      <div className="flex justify-between items-center  border-b pb-2">
                    <h1 className="text-2xl font-semibold ml-6">Notes</h1>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 bg-[#dddbdb] rounded-3xl outline-none placeholder:text-[#f5f5f5]"
                          />
                        </div>
                        <div>
                          <IoIosNotificationsOutline className="text-gray-500" />
                        </div>
                        <div>
                          <CiMail className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

    <div className="flex flex-col lg:flex-row p-6 bg-white min-h-screen ">
      <div className="w-full m-2">
        <NoteContent />
      </div>
    <NoteSidebar/>
    </div>
    </div>
  )
}

export default NoteView
