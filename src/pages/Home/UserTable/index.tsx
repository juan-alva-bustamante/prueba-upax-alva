import { FC } from "react";

import * as styles from "./styles.module.scss";

interface IUserTable {
  paginatedUsers: any[];
  onClickRow?: (user: any) => void;
}

const UserTable: FC<IUserTable> = ({
  paginatedUsers,
  onClickRow = () => {},
}) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Compañía</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr
              key={user.id}
              onClick={() => onClickRow(user)}
              className={styles.row}
            >
              <td data-label="Nombre">{user.name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Compañía">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
