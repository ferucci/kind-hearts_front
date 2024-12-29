import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponents = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      fill={'none'}
      height={'22'}
      viewBox={'0 0 22 22'}
      width={'22'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
      ref={ref}
    >
      <path
        d={'M16 10L11 15L6 10'}
        stroke={'#130024'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponents)

export const ArrowIcon = memo(ForwardRef)
