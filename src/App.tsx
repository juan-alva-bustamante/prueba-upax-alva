import { RouterProvider } from "react-router-dom";
import { Suspense, useEffect } from "react";

import "./App.scss";

import { createDevRouter } from "./router/dev-router";
import { Logger } from "./util/Logger";

const App = () => {
  const initData = {
    owner: {
      lastName: "ALVA",
      secondLastName: "BUSTAMANTE",
      contactData: [
        {
          type: "EMAILADDRESS",
          value: "juan.alva@elektra.com.mx",
          usage: "INTERNAL",
        },
      ],
      role: {
        id: 1,
        title: "RECLUTADOR",
      },
      identifiers: [
        {
          provider: "OKTA",
          value: "1063648",
        },
      ],
      roles: [
        {
          id: 1,
          title: "RECLUTADOR",
          permissions: [
            {
              title: "Ver Bitacora",
              description: "Permisos para ver la bitacora en el admin",
              code: "VER_BITACORA",
            },
          ],
        },
      ],
      isUpdated: false,
      exportedDate: 1701392473452,
      isSuperAdmin: true,
      creationDate: "Mon Oct 17 20:36:31 CDT 2022",
      ownerId: "juan.alva@elektra.com.mx",
      firstName: "JUAN",
      companyId: "GSX000",
      isExported: true,
      _id: {
        $oid: "634e031fba46f42e11f574e4",
      },
      secondName: "ALVA",
    },
    userZeus: {
      employee_number: "1063648",
      name: "JUAN ALVA BUSTAMANTE",
    },
    username: "1063648@nodomain.com",
    refreshToken:
      process.env.REACT_APP_ENV === "dev"
        ? "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"
        : "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",
  };

  /*
  Use effect para inicializar los valores para levantar el proyecto:
  OWNER_DATA - Requerido: se usa para obtener la informacion del owner logueado
  USER_ZEUS - Requerido: Pendiente definir uso
  username - Requerido: Se usa para enviar el username en el refresh token
  refresh_token - Requerido: Se usa para generar un nuevo token, este refresh_token es el que esta cifrado
  isSuperAdmin - Requerido: Se usa para acceder al container, si no lo tiene no lo deja avanzar
  */
  useEffect(() => {
    Logger.log("Inicializando datos de bitacota...");
    localStorage.setItem("OWNER_DATA", JSON.stringify(initData.owner));
    localStorage.setItem("USER_ZEUS", JSON.stringify(initData.userZeus));
    localStorage.setItem("username", initData.username);
    localStorage.setItem("refresh_token", initData.refreshToken);
    sessionStorage.setItem("isSuperAdmin", "true");
  }, []);

  return (
    <Suspense fallback={null}>
      <RouterProvider router={createDevRouter} />
    </Suspense>
  );
};

export default App;
