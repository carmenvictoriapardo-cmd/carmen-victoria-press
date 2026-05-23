"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.svg",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!errored) {
          setErrored(true);
          setImgSrc(fallbackSrc);
        }
      }}
      unoptimized={typeof imgSrc === "string" && imgSrc.endsWith(".svg")}
    />
  );
}
