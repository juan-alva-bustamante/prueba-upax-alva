import { FC } from "react";

import * as styles from "./styles.module.scss";

const Navbar: FC<any> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.options}>
        <p>Prueba UPAX</p>
      </div>
    </div>
  );
};

export default Navbar;
