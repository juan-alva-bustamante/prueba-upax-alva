import { FC, useEffect, useState } from "react";

import * as styles from "./styles.module.scss";

import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import Shimmer from "../../components/Shimmer";
import UserTable from "./UserTable";

import { IUser, UsersService } from "../../services/UsersService";
import { Logger } from "../../util/Logger";
import { useSidebarStore } from "../../store/Sidebar/sidebar";
import Sidebar from "../../components/Sidebar";

const HomePage: FC<any> = () => {
  // Estados para manejar usuarios, búsqueda, paginación y carga
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  // Instancia del servicio de usuarios
  const userService = new UsersService();

  // Filtrado de usuarios basado en la búsqueda
  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Lógica de paginación
  const totalItems = filteredUsers.length;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(start, end);

  const { openSidebar } = useSidebarStore();

  const onClickUser = (user: IUser) => {
    const Content = () => {
      return (
        <div className={styles.content}>
          <h2>{user.name}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>City:</strong> {user.address?.city}
          </p>
        </div>
      );
    };
    openSidebar(<Content />);
    Logger.log("Usuario seleccionado:", user);
  };

  useEffect(() => {
    userService
      .getUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((err) => {
        Logger.log("Error al cargar usuarios:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, itemsPerPage]);

  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <div className={styles.bodyContainer}>
        <h1 className={styles.title}>Usuarios</h1>

        <div className={styles.wrapper}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Buscar usuario..."}
            className={styles.input}
            disabled={loading}
          />
        </div>

        <UserTable
          paginatedUsers={paginatedUsers}
          onClickRow={(user) => {
            onClickUser(user);
          }}
        />
        {loading && (
          <div className={styles.shimmerContainer}>
            <Shimmer />
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
