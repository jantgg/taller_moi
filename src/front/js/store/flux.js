const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      bikes: [],
      message: null,
      citas: null,
      telefono: null,
      direccion: null,

      backendurl:
        "https://3001-4geeksacade-reactflaskh-s41igp2nysj.ws-eu102.gitpod.io/api/",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getBikes: async () => {
        const response = await fetch(getStore().backendurl + "bikes");
        const data = await response.json();
        setStore({ bikes: data.body });
      },
      getLinks: async () => {
        const response = await fetch(getStore().backendurl + "link");
        const data = await response.json();
        setStore({ citas: data.body.citas });
        setStore({ telefono: data.body.telefono });
        setStore({ direccion: data.body.direccion });
        console.log(data.body);
      },
      setScrollTrigger: () => {
        setStore({ viewType: true });
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
