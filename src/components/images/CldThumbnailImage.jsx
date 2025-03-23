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
const CldThumbnailImage = ({ publicId }) => {
  const myImage = cld
    .image(publicId)
    .resize(thumbnail().width(400).height(400))
    .delivery(format('auto'))
    .delivery(quality('auto:good'));
  return (
    <AdvancedImage
      cldImg={myImage}
      style={{ maxWidth: '100%' }}
    />
  );
};
export default CldThumbnailImage;
