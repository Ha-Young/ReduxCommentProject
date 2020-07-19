import { useCallback, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.name]: action.value };

    case "RESET":
      return { ...action.initialForm };

    default:
      throw new Error("Unhandled action");
  }
}

function useInputs(initialForm) {
  // const[form, setForm] = useState(initialForm);
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;

    // setForm((form) => ({...form, [name]:value}));

    dispatch({
      type: "CHANGE",
      name,
      value,
    });
  }, []);

  // const reset = useCallback(() => setForm(initialForm), [initialForm]);
  const reset = useCallback(() => {
    dispatch({
      type: "RESET",
      initialForm,
    });
  }, [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
