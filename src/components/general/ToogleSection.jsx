import React from 'react'
import { AiOutlineBank as BankIcon } from 'react-icons/ai'
import 'react-icons/fa'
import {
  HiOutlineBriefcase as BriefcaseIcon,
  HiOutlineViewGridAdd as CirclesPlusIcon,
  HiOutlineClipboardCheck as ClipboardCheckIcon,
  HiOutlineDocumentSearch as DocumentSearchIcon,
  HiOutlineCurrencyDollar as DollarIcon,
  HiOutlineInformationCircle as InfoIcon,
  HiOutlineClock as TimeIcon,
  HiOutlineUserCircle as UserIcon,
} from 'react-icons/hi'
import { HiOutlineAcademicCap as GraduationIcon } from 'react-icons/hi2'
import {
  MdAddIcCall as AddPhoneIcon,
  MdKeyboardArrowRight,
} from 'react-icons/md'
import {
  TbBook2 as BookIcon,
  TbListDetails as ListIcon,
  TbMapPin as LocationIcon,
  TbPhonePlus as PhonePlusIcon,
  TbTable as TableIcon,
  TbTools as ToolsIcon,
  TbRouter as RouterIcon,
} from 'react-icons/tb'

import { PropTypes } from 'prop-types'

const icons = {
  info: <InfoIcon className='stroke-primary w-5 h-auto' />,
  location: <LocationIcon className='stroke-primary w-5 h-auto' />,
  user: <UserIcon className='stroke-primary w-5 h-auto' />,
  graduation: <GraduationIcon className='stroke-primary w-5 h-auto' />,
  tools: <ToolsIcon className='stroke-primary w-5 h-auto' />,
  book: <BookIcon className='stroke-primary w-5 h-auto' />,
  circlesPlus: <CirclesPlusIcon className='stroke-primary w-5 h-auto' />,
  briefcase: <BriefcaseIcon className='stroke-primary w-5 h-auto' />,
  addPhone: <AddPhoneIcon className='fill-primary w-5 h-auto' />,
  phonePlus: <PhonePlusIcon className='stroke-primary w-5 h-auto' />,
  documentSearch: <DocumentSearchIcon className='stroke-primary w-5 h-auto' />,
  dollar: <DollarIcon className='stroke-primary w-5 h-auto' />,
  bank: <BankIcon className='fill-primary w-5 h-auto' />,
  clipboardCheck: <ClipboardCheckIcon className='stroke-primary w-5 h-auto' />,
  time: <TimeIcon className='stroke-primary w-5 h-auto' />,
  list: <ListIcon className='stroke-primary w-5 h-auto' />,
  table: <TableIcon className='stroke-primary w-5 h-auto' />,
  router: <RouterIcon className='stroke-primary w-5 h-auto' />,
}

export const ToggleSection = ({
  title = 'title',
  isOpen = false,
  icon = 'info',
  tags = [],
}) => {
  return (
    <div
      className={`border duration-200
        ${isOpen ? 'border-white' : 'border-slate-700'} 
        flex flex-row items-center  w-full cursor-pointer justify-between h-12 rounded-lg px-4`}
    >
      <div className='flex gap-3 items-center'>
        {icon && icons[icon]}
        <h3 className='text-sm font-semibold uppercase text-secondary mr-4'>
          {title}
        </h3>
      </div>

      <div className='flex gap-1'>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{tag}</React.Fragment>
        ))}
        <MdKeyboardArrowRight
          size={30}
          className={`${
            isOpen ? 'rotate-90' : 'rotate-0'
          } duration-300 ease-in-out text-primary`}
        />
      </div>
    </div>
  )
}

ToggleSection.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  icon: PropTypes.string,
  tags: PropTypes.array,
}
