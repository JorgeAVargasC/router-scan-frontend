import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

import { ToggleSection } from '@/components/general'

export const Accordion = ({ sections = [] }) => {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      {sections?.map(({ title, children, icon, tags }, i) => (
        <div className='flex flex-col' key={i}>
          <motion.header
            initial={false}
            onClick={() => setExpanded(i === expanded ? false : i)}
            className={`${i === sections.length - 1 && i !== expanded ? 'mb-0' : 'mb-4'} `}
          >
            <ToggleSection {...{ title, isOpen: i === expanded, icon, tags }} />
          </motion.header>
          <AnimatePresence initial={false}>
            {i === expanded && (
              <motion.section
                key='content'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <motion.div
                  variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                  transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div
                    className={`border rounded-lg border-neutral-2 p-4 ${
                      i === sections.length - 1 && i === expanded ? 'mb-0' : 'mb-4'
                    }`}
                  >
                    {children}
                  </div>
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  )
}

// props

Accordion.propTypes = {
  sections: PropTypes.array,
}
