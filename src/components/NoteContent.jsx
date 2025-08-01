import { Download, Share2 } from 'lucide-react'
import { MdFormatListBulleted,MdOutlineFormatBold } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import { PiTextAUnderlineBold } from "react-icons/pi";
import { FaCopy } from "react-icons/fa";

const NoteContent = () => {
  return (
    <div className="bg-white rounded-xl py-6 w-full border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 border-gray-100 pb-3 mb-4 px-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Notes for Science Basics
          </h2>
          <div className="flex items-center gap-2 mt-1 text-gray-500">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/josh.jpg"
                alt="Josh Homme"
                className="w-full h-full object-cover"
              />
            </div>
            <span className='text-lg'>Josh Homme</span>
            <span className=" text-gray-400">(Lecturer)</span>
          </div>
        </div>

        {/* Share and Download */}
        <div className="flex gap-2  hover:text-gray-700">
          <button>
            <Share2 size={18} />
          </button>
          <button>
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Note Paragraphs */}
      <div className="space-y-6  text-lg leading-relaxed px-4 py-6">
        <p>
          <strong>1. The Scientific Method:</strong> Science is a process of discovery that relies on a set of steps called the scientific method. It involves making observations, asking questions, forming hypotheses, testing those hypotheses through experiments, analyzing the results, and drawing conclusions. This method allows scientists to understand the natural world and develop new technologies and medicines.
        </p>
        <p>
          <strong>2. The Three Branches of Science:</strong> There are three main branches of science: physical science, life science, and earth science. Physical science deals with the study of non-living matter and energy, including chemistry, physics, and astronomy. Life science focuses on living organisms, such as biology, zoology, and botany. Earth science studies the natural processes that shape our planet, such as geology, meteorology, and oceanography.
        </p>
        <p>
          <strong>3. The Metric System:</strong> The metric system is a system of measurement used by scientists around the world. It is based on the decimal system and uses units such as meters, grams, and liters. The metric system is important in science because it allows scientists to communicate their findings accurately and consistently, regardless of where they are in the world.
        </p>
        <p>
          <strong>4. Scientific Ethics:</strong> Science is not just about knowledge, it's also about ethics. Scientists must be honest and transparent in their research, and they must treat research subjects with respect and dignity. They must also ensure that their research does not harm the environment or society. In addition, scientists must be aware of potential biases in their research and take steps to mitigate them. Good scientific practice involves being transparent about research methods and findings, and being willing to revise conclusions in light of new evidence.
        </p>
      </div>

      {/* Static Rich Text Toolbar */}
      <div className="mt-6 border-t-2 border-gray-300 pt-5 flex items-center gap-3 text-gray-500 ">
        <button className="hover:text-gray-700 font-bold">
          <MdOutlineFormatBold className='w-6 h-6' />
        </button>
        <button className="hover:text-gray-700 italic">
          <PiTextAUnderlineBold className='w-6 h-6' />
        </button>
        <button className="hover:text-gray-700">
          <RiEditLine className='w-6 h-6' />
        </button>
        <button className="hover:text-gray-700">
          <MdFormatListBulleted className='w-6 h-6'/>
        </button>
        <button className="hover:text-gray-700">
          <FaCopy className='w-6 h-6'/>
        </button>
      </div>
    </div>
  )
}

export default NoteContent
