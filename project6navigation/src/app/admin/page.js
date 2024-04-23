import Image from 'next/image';
import img from '@/11.jpg';
import styles from '@/Home.module.css'; // Import a separate CSS module for styling

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ประวัติ</h1>
        <p />
        <h1 className={styles.contentText}>
          ชื่อ: นาย อรรถพล พุ่มชัย
          <p />
          ระดับการศึกษา: ปวส
          <p />
          สาขาวิชา: เทคโนโลยีสารสนเทศ
          <p />
          บ้านเลขที่: 188/8 ม.3 ต.นางหลง
        </h1>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={img}
            width={250}
            height={250}
            alt="Picture of the author"
          />
        </div>

        <h1 className={styles.textAdmin}>Admin By Attapol Pumchai</h1>
      </div>
    </div>
  );
};

export default Home;
