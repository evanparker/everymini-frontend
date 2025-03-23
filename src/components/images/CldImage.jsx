import { Cloudinary } from '@cloudinary/url-gen';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage } from '@cloudinary/react';
import { scale } from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});
// eslint-disable-next-line react/prop-types
const CldImage = ({ publicId }) => {
  const myImage = cld
    .image(publicId)
    .resize(scale().width(1248))
    .delivery(format('auto'))
    .delivery(quality('auto'));
  return (
    <AdvancedImage
      cldImg={myImage}
      style={{ maxWidth: '100%' }}
    />
  );
};
export default CldImage;
