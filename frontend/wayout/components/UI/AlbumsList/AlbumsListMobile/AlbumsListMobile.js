import styles from "./AlbumsListMobile.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AlbumsListCard from "../AlbumsListCard";
import config from "config";

const AlbumsList = ({ data }) => {
  return data ? (
    <div className={styles.albumsListWrapper}>
      {data.map((album) => {
        return (
          <div className={styles.cardWrapper}>
            <AlbumsListCard
              title={album.title}
              oldPrice={album.old_price}
              newPrice={album.new_price}
              previewUrl={`${config.apiUrl}/files/albums/${album.id}/0/`}
              slug={album.slug}
              className={styles.card}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <Skeleton width={"100%"} height={490} style={{ borderRadius: "15px" }} />
  );
};

export default AlbumsList;
