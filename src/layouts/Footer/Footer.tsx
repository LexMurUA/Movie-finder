import { useGetPersonMoviesQuery } from '../../api/api'



export const Footer = ()=>{
    const data = useGetPersonMoviesQuery({ id: 974169 })
console.log(data);

    return(
        <footer className="container container-footer">Footer</footer>
    )
}