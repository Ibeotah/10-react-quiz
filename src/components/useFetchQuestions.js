import { useEffect } from "react";

export function useFetchQuestions(dispatch) {
  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhost:8000/questions", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(err);
          dispatch({ type: "dataFailed" });
        }
      });

    return () => {
      controller.abort();
    };
  }, [dispatch]);
}
