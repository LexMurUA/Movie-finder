import type { MainProps } from "../../interfaces/main"


export const Main =({children}:MainProps)=>{

    return(
        <main className="container">{children}</main>
    )
}