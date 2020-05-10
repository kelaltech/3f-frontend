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
    setWebP(require('../../../../' + path + '?webp'))
    setOther(require('../../../../' + path + ''))
  }, [path])

  return (
    <picture>
      <source
        srcSet={webP ?? require('../../../../' + path + '?lqip')}
        type="image/webp"
      />
      <source
        srcSet={other ?? require('../../../../' + path + '?lqip')}
        type={`image/${path.slice(path.indexOf('.') + 1).toLowerCase()}`}
      />
      <img
        src={other ?? require('../../../../' + path + '?lqip')}
        loading="lazy"
        {...imgProps}
        style={{
          overflow: `hidden`,
          ...imgProps?.style,
          ...(!other
            ? { filter: `blur(25px) ` + (imgProps?.style?.filter || '') }
            : {}),
        }}
      />
    </picture>
  )
}

export default Img
