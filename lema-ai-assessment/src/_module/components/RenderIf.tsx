import { Fragment, type ReactNode } from "react";

type TProps = {
  children: ReactNode;
  condition: boolean;
};

export function RenderIf(props: TProps) {
  const { condition, children } = props;

  if (!condition) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}
