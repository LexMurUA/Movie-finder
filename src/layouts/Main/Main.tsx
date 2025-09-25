import type { MainProps } from "../../interfaces/mainTypes"


export const Main = ({ children }: MainProps) => {

    return (
        <main className="container container-main">{children}</main>
    )
}