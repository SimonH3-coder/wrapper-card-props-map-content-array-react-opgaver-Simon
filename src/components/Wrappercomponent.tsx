import { ReactNode } from "react";
import Styles from "./wrappercomponent.module.scss";

interface WrappercomponentProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function Wrappercomponent({ title, subtitle, children }: WrappercomponentProps) {
  return (
    <div className={Styles.wrapper}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
}
