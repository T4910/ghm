import React, { ReactNode } from 'react'

const CornerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="before:size-0 before:absolute before:right-0
                    before:border-l-[30px]  before:border-t-[30px] before:border-t-black before:border-l-transparent
                    relative
                    after:size-0 after:absolute after:-translate-y-full
                    after:border-r-[30px]  after:border-b-[30px] after:border-b-black after:border-r-transparent">
        {children}
    </div>
  )
}

export default CornerWrapper