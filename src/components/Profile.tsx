import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/raissamartinsmenezes.png" alt="Raissa Martins"/>
      <div>
        <strong>
          Raissa Martins
        </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          level 1
        </p>
      </div>
    </div>
  );
}