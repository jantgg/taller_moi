import React, { useState, useContext } from "react";
import useUrl from "../hooks/useUrlState";

export const UpdateLink = () => {
  const [url, setUrl] = useUrl();
  const [linkId, setLinkId] = useState(1); // Replace with the actual link ID you want to update
  const [formData, setFormData] = useState({
    fecha: "",
    citas: "",
    telefono: "",
    direccion: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const response = await fetch(url + `links/${linkId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      location.reload();
    }
  };

  return (
    <form
      className="d-flex flex-column pt-5 mt-5 col-12"
      onSubmit={handleSubmit}
    >
      <div className="text-center who-h1">ACTUALIZAR ARCHIVO DE LINKS</div>
      <input
        className="my-2"
        type="text"
        name="fecha"
        placeholder="Fecha"
        value={formData.fecha}
        onChange={handleInputChange}
      />
      <input
        className="my-2"
        type="text"
        name="citas"
        placeholder="Citas"
        value={formData.citas}
        onChange={handleInputChange}
      />
      <input
        className="my-2"
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleInputChange}
      />
      <input
        className="my-2"
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={formData.direccion}
        onChange={handleInputChange}
      />
      <button className="my-2" type="submit">
        Update Link
      </button>
    </form>
  );
};
