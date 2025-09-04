import React, { useEffect } from "react";
import * as styles from "./styles.module.scss";
import { useSidebarStore } from "../../store/Sidebar/sidebar";

const Sidebar: React.FC = () => {
  const { isOpen, content, closeSidebar } = useSidebarStore();

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeSidebar]);

  // Cierre con overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
      onClick={handleOverlayClick}
    >
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={closeSidebar}>
          ✖
        </button>

        {content ? content : <p className={styles.empty}>No hay contenido</p>}
      </aside>
    </div>
  );
};

export default Sidebar;
