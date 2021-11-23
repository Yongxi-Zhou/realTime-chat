import React, { useEffect, useState } from "react";

function useFetch(url: string) {
  const [info, setInfo] = useState({ data: "", loading: true });

  useEffect(() => {
    setInfo((info) => ({ data: info.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((res) => {
        setInfo({ data: res, loading: false });
      });
  }, [url]);

  return info;
}

export default useFetch;
