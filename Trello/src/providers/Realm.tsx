import { PropsWithChildren } from "react";
import { RealmProvider } from "@realm/react";

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider>{children}</RealmProvider>;
}
