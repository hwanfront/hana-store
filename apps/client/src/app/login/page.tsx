export default function Page() {
  const obj = { min: 1, max: 5 };
  return <div>{JSON.stringify(obj)}</div>;
}
