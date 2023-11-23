describe("mi primera prueba de api", () => {
  const URL_get = "http://127.0.0.1:5000/getData";
  const URL_insert = "http://127.0.0.1:5000/createData";
  const URL_delete = "http://127.0.0.1:5000/deleteData";
  const URL_updata = "http://127.0.0.1:5000/updateData/";
  //const URL_updata = "http://127.0.0.1:5000/updateData/90";
  const edadCorte = 40;
  const listaAEliminar = [];

  it("prueba 1 GET(Obtener usuarios)", () => {
    cy.request(URL_get).then((Response) => {
      const data = Response.body;

      data.map((elemento) => {
        const age = JSON.stringify(elemento.age);
        cy.expect(parseInt(age)).to.be.lte(edadCorte);
        const id = JSON.stringify(elemento.id);
        listaAEliminar.push(id);
      });

      cy.wait(2000);
    });
  });

  it("pruebas 2 Creacion de uisuario en API con formulario", () => {
    const formData = new FormData();
    formData.set("name", "gomi");
    formData.set("email", "gomi@gomi.cl");
    formData.set("age", "40");

    cy.request("POST", URL_insert, formData).then((Response) => {
      cy.log(JSON.stringify(Response));
    });
  });

  it("pruebas 3 Creacion de usuario en API con JSON", () => {
    const data = {};
    data.name = "gomi";
    data.email = "gomi@gomi.cl";
    data.age = "40";

    cy.request("POST", URL_insert, data).then((Response) => {
      cy.log(JSON.stringify(Response));
    });
  });

  it("pruebas 4 Eliminar registros en API usando un objeto", () => {
    const data = {};
    data.id = "81";
    cy.request("POST", URL_delete, data).then((Response) => {
      cy.log(JSON.stringify(Response));
    });
  });

  it("pruebas 5 Eliminar valores dede una lista en API ", () => {
    cy.log("lista", listaAEliminar);
    listaAEliminar.map((id) => {
      const formData = new FormData();
      formData.set("id", id);
      cy.request("POST", URL_delete, formData).then((Response) => {
        cy.log(JSON.stringify(Response));
      });
    });
  });

  it("pruebas 6 update (actualizacion de un registro ej: id 90) de datos", () => {
    const data = {};
    data.name = "test";
    data.email = "gomi@gomi.cl";
    data.age = "22";
    data.id = "90";

    cy.request("POST", `${URL_updata}${90}`, data).then((Response) => {
      cy.log(JSON.stringify(Response.body));
    });
  });

  it("pruebas 7 update (actualizacion de un segundo registro distinto ej: id 92) de datos", () => {
    const data = {};
    data.name = "gomi";
    data.email = "gomi@gomi.cl";
    data.age = "40";
    data.id = "92";

    cy.request("POST", `${URL_updata}${92}`, data).then((Response) => {
      cy.log(JSON.stringify(Response.body));
    });
  });
});
