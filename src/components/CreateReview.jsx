import React, { useState } from "react";

import { validateControlNumber } from "../utils/Validations";
import { createReviewAPI } from "../services/review";
import { useNavigate } from "react-router-dom";

import { securityQuestions } from "../utils/security-questions";

const CreateReview = () => {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [controlNumber, setControlNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [state, setState] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true });

    if (!validateControlNumber(controlNumber)) {
      setState({
        loading: false,
        error: "Verifica el número de control",
        success: false,
      });
      return;
    }

    if (title === "" || user === "" || description === "") {
      setState({
        ...state,
        loading: false,
        error: "Todos los campos son requeridos",
      });
      return;
    }

    try {
      const review = {
        title,
        user,
        description,
      };

      await createReviewAPI(review);
      setState({ ...state, loading: false, success: true, error: null });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setState({ ...state, error: "Ocurrio un error en el servidor" });
      throw error;
    }
  };

  return (
    <div>
      <form
        className="flex flex-col p-4 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="text-white my-2">
          Titulo
        </label>
        <input
          type="text"
          placeholder="Día arruinado"
          className="p-2 rounded-md"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title" className="text-white my-2">
          Nota
        </label>
        <textarea
          rows={6}
          type="text"
          placeholder="Ayer me cai afuera de cafeteria y se me cayeron los tacos"
          className="p-2 rounded-md"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="author" className="text-white my-2">
          Autor*
        </label>
        <input
          type="text"
          placeholder="Juanito Perez"
          className="p-2 rounded-md"
          disabled={isAnonymous}
          onChange={(e) => setUser(e.target.value)}
        />

        <div>
          <input
            type="checkbox"
            name="anonymus"
            id="anonymus"
            className="p-2 mr-2 my-2"
            onChange={(e) => {
              setIsAnonymous(e.target.checked);
              setUser("Anónimo");
            }}
          />
          <label htmlFor="anonymus" className="text-white">
            Marcar como anonimo
          </label>
        </div>

        <label htmlFor="controlNumber" className="text-white my-2">
          Numero de control*
        </label>
        <input
          type="text"
          placeholder="XXXXXXXX"
          className="p-2 rounded-md "
          onChange={(e) => setControlNumber(e.target.value)}
        />
        <label
          htmlFor="securityQuestion"
          className="text-white font-semibold mt-2"
        >
          Pregunta de seguridad
        </label>
        <p className="text-white mb-3">
          {
            securityQuestions[
              Math.floor(Math.random() * securityQuestions.length)
            ].question
          }
        </p>
        <input
          type="text"
          placeholder="Jose"
          className="p-2 rounded-md"
          onChange={(e) => setAnswer(e.target.value)}
        />
        {state.error && (
          <p className="text-red-500 font-bold mt-2">{state.error}</p>
        )}
        {state.success && (
          <p className="text-green-500 font-bold mt-2">
            Nota creada correctamente
          </p>
        )}
        <button
          disabled={state.loading}
          type="submit"
          className="bg-blue-400 p-4 rounded-md text-white uppercase font-semibold my-4 cursor-pointer hover:opacity-90"
        >
          {state.loading ? "Cargando..." : "Crear nota"}
        </button>

        <p className="my-4 text-white text-xs">
          *El numero de control no se guardara, solo se utilizara para validar
          si eres alumno de la escuela. <br />
          *Al marcar como anonimo, no se guardara ningun nombre en la base de
          datos.
        </p>
      </form>
    </div>
  );
};

export default CreateReview;
