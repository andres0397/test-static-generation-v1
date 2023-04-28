import Head from "next/head";
import { FC, ReactNode } from "react";
import NavBar from "@/components/ui/NavBar/NavBar";

type Props = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="author" content="Andres Alvarez" />
        <meta name="description" content="Pokemon information xxxxxx" />
        <meta name="keywords" content={`${title}. pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />

      <main className="px-5">{children}</main>
    </>
  );
};

export default Layout;
