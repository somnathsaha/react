import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OPPSS!!!!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>
        Error Code :- {err.status} - {err.statusText}
      </h2>
      <h3>Error Description :- {err.error.message}</h3>
    </div>
  );
};

export default Error;
