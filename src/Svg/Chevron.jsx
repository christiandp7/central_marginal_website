import React from 'react'

export const ChevronRight = ({ size="24", strokeWidth="12" }) => (
  <svg width={size} height={size} viewBox="0 0 500 500" fill="none">
    <path d="M108 18C144.5 146 240.5 218 403.5 250M108 482C144.438 354 240.276 282 403 250" stroke="black" stroke-width={strokeWidth} />
  </svg>  
)

export const ChevronLeft = ({ size="24", strokeWidth="12" }) => (
  <svg width={size} height={size} viewBox="0 0 500 500" fill="none">
  <path d="M392 481.999C355.5 353.999 259.5 281.999 96.4997 249.999M392 17.9991C355.561 145.999 259.724 217.999 96.9997 249.999" stroke="black" stroke-width={strokeWidth} />
  </svg>
  
)

export const ChevronDown = ({ size="24", strokeWidth="12" }) => (
  <svg width={size} height={size} viewBox="0 0 500 500" fill="none">
  <path d="M482 108C354 144.5 282 240.5 250 403.5M18 108C146 144.438 218 240.276 250 403" stroke="black" stroke-width={strokeWidth} />
  </svg>
)

