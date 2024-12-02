import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import { Logo } from "~/components/logo";
import MakeItYours from "~/components/make-it-yours/make-it-yours";

export default component$(() => {
  return (
    <>
      <Header/>
      <div class="bg-primary">
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <MakeItYours    />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
