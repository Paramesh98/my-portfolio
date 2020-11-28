import { useDencrypt } from "use-dencrypt-effect";
import React from "react";

function DecriptText({ values }) {
  const { result, dencrypt } = useDencrypt();
  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  return <>{result}</>;
}

export default DecriptText;
