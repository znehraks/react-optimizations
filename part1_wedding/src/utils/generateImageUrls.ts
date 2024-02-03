function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dbisx4tgs/image/upload/${option}/v1706628947/${format}/${filename}.${format}`
}

export default generateImageUrl
