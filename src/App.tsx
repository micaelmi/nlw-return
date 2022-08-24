import { Widget } from "./components/Widget";
import Space from "./assets/galaxy.png";

export function App() {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <h1 className="text-center text-4xl mt-6 text-zinc-100">
          Conheça o Widget Feedback
        </h1>
        <img src={Space} alt="Space" className="max-w-full max-h-80 mt-12" />
      </main>
      <Widget />
    </>
  );
}
