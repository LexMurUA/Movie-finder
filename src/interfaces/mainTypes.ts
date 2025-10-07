import type React from "react";
import type { ReactNode } from "react";

export interface MainProps {
    children: ReactNode
}

export type DebounceHook = (value:string|number,num?:number) => string|number

export type searchEnterType = (e:React.KeyboardEvent<HTMLInputElement>,value:string | number)=>void