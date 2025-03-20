import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME,
  },
});
// eslint-disable-next-line react/prop-types
const CldImage = ({ publicId }) => {
  const myImage = cld
    .image(publicId)
    .resize(thumbnail().width(600))
    .delivery(format('auto'))
    .delivery(quality('auto:good'));
  return (
    <AdvancedImage
      cldImg={myImage}
      style={{ maxWidth: '100%' }}
    />
  );
};
export default CldImage;
