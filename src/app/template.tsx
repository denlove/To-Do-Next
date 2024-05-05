'use client'

import { motion } from 'framer-motion'
import { IParamChildren } from '@/types/interfacesBP'

export default function Template({ children }: IParamChildren) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                damping: 7,
                stiffness: 100,
                ease: 'easeInOut',
                duration: 0.5,
            }}
        >
            {children}
        </motion.div>
    )
}
