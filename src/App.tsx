import { useQuery } from "react-query";

function App() {
  const { isLoading, isSuccess, isError, data } = useQuery<string[]>(
    "names",
    () =>
      fetch("/api/names").then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
  );

  return (
    <main>
      <h1>Cypress Demo</h1>

      {isLoading && <div aria-label="loading">Loading...</div>}
      {isSuccess && (
        <ul>
          {data!.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      {isError && <div>Error fetching names!</div>}
    </main>
  );
}

export default App;
