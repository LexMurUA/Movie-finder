import type { ReactNode } from "react";

export interface MainProps {
    children: ReactNode
}

export type DebounceHook = (value:string|number,num?:number) => string|number

