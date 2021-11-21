import LayoutHeader from "./header/layoutHeader.container";

export default function Layou({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      <div>{children}</div>
    </>
  );
}
