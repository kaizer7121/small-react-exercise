import { useRouteError } from 'react-router-dom';

interface ErrorObject {
  statusText?: string;
}

export function FallbackPage() {
  const error = useRouteError() as ErrorObject;

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}
