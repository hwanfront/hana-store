import Link from 'next/link';

import Title from '@/component/Title';

export default function Home() {
  return (
    <main>
      <h1>main</h1>
      <p>home</p>
      <Title />
      <Link href='login'>login</Link>
    </main>
  );
}
