import { FaCalendarAlt, FaStickyNote } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import { SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/GalleryItem';
import GalleryItemInfo from './GalleryItemInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const GalleryItem = ({
  _id,
  galleryItemURL,
  galleryItemDate,
  galleryItemType,
  galleryItemCaption,
  displayInGallery,
  displayOnLanding,
  litter,
  puppy,
  createdAt
}) => {
  const date1 = day(galleryItemDate).format('MMM Do, YYYY');
  const date2 = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="gallery-item-image">
          <img src={galleryItemURL} alt={`Image of${galleryItemCaption}`} />
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <GalleryItemInfo icon={<FaCalendarAlt />} text={date1} />
          <GalleryItemInfo text={`Type: ${galleryItemType}`} />
          <GalleryItemInfo text={`In Gallery: ${displayInGallery}`} />
          <GalleryItemInfo text={`On Landing: ${displayOnLanding}`} />
          {litter && <GalleryItemInfo text={`LitterId: ${litter}`} />}
          {puppy && <GalleryItemInfo text={`PuppyId: ${puppy}`} />}
          <GalleryItemInfo icon={<FaCalendarAlt />} text={`Added: ${date2}`} />
          <GalleryItemInfo icon={<FaStickyNote />} text={galleryItemCaption} />
        </div>
        <footer className="actions">
          <Link to={`../gallery-admin/gallery-item-edit/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../gallery-admin/gallery-item-delete/${_id}`}>
            <SubmitBtn formBtn btnText="delete" />
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default GalleryItem;
