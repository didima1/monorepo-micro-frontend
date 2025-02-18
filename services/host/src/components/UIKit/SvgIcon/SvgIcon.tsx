import { FC, SVGProps } from 'react'
import { SpriteNamesType } from '@/types/sprites'

interface Props extends SVGProps<SVGSVGElement> {
   name: SpriteNamesType
   size?: number
}

export const SvgIcon: FC<Props> = ({
   name,
   color,
   size = 24,
   ...props
}) => (
   <svg
      width={size}
      height={size}
      {...props}
   >
      <use
         xlinkHref={
            process.env.NODE_ENV === 'production' ?
               '/public/sprite.svg'
            :  '' + `#${name}`
         }
         color={color}
      />
   </svg>
)
