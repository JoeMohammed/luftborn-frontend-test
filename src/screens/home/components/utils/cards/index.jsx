import {
  AdjustmentsIcon,
  CalendarIcon,
  LockClosedIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import styles from "./card.module.scss";

export default function Card({ img, title, price, editClick, cardClassName }) {
  function truncateString(yourString, maxLength) {
    // get the index of space after maxLength
    const index = yourString.indexOf(" ", maxLength);
    return index === -1 ? yourString : yourString.substring(0, index);
  }

  function stopActionHundler(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className={` ${styles.card}`}>
      <div className={`${cardClassName} ${styles.card_inner}`}>
        <div className={styles.card_inner_front}>
          <div className={styles.card_header}>
            <img src={img} alt={title} className="img-fluid" />
            <div
              className={`clickAction ${styles.card_header_edite}`}
              onClick={editClick}
            >
              <AdjustmentsIcon />
            </div>
          </div>
          <div className={styles.card_body}>
            <h3 className={styles.card_body_title}>
              {truncateString(title, 15)}...
            </h3>
            <p className={styles.card_body_price}>
              <span className={styles.card_body_price_e}>£ {price}</span>
              <span className={styles.card_body_price_text}>incl.VAT</span>
            </p>
          </div>
        </div>
        <div className={styles.card_inner_back}>
          <div
            className={styles.card_inner_back_action}
            onClick={(e) => {
              stopActionHundler(e);
            }}
          >
            <PencilAltIcon />
            <span>Edit</span>
          </div>
          <div
            className={styles.card_inner_back_action}
            onClick={(e) => {
              stopActionHundler(e);
            }}
          >
            <CalendarIcon />
            <span>Availability</span>
          </div>
          <div
            className={styles.card_inner_back_action}
            onClick={(e) => {
              stopActionHundler(e);
            }}
          >
            <LockClosedIcon />
            <span>Make private</span>
          </div>
          <div
            className={`${styles.card_inner_back_action} ${styles.card_inner_back_action__trash}`}
            onClick={(e) => {
              stopActionHundler(e);
            }}
          >
            <TrashIcon />
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
