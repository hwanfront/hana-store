import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>main</h1>
      <p>home</p>
      <Link href="login">login</Link>
    </main>
  );
}
