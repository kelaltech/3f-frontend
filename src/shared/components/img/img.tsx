import React, { useState, useEffect, useMemo } from 'react'

export type LiteParallaxProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'src'
> & {
  path: string
}

function Img({ path, ...imgProps }) {
  const [webP, setWebP] = useState<string>(undefined)
  const [other, setOther] = useState<string>(undefined)

  useEffect(() => {
    setWebP(require('../../../assets/images/' + path + '?webp'))
    setOther(require('../../../assets/images/' + path + ''))
  }, [path])

  return (
    <picture>
      <source
        srcSet={webP ?? require('../../../assets/images/' + path + '?lqip')}
        type="image/webp"
      />
      <source
        srcSet={other ?? require('../../../assets/images/' + path + '?lqip')}
        type={`image/${path.slice(path.indexOf('.') + 1).toLowerCase()}`}
      />
      <img
        src={other ?? require('../../../assets/images/' + path + '?lqip')}
        loading="lazy"
        {...imgProps}
        style={{
          overflow: `hidden`,
          ...imgProps?.style,
          ...(!other || !webP
            ? { filter: `blur(16px) ${imgProps?.style?.filter || ''}` }
            : {}),
        }}
      />
    </picture>
  )
}

export default Img
