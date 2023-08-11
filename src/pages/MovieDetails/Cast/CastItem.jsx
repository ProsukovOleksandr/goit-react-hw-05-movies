export const CastItem = ({credit})=> {
const{profile_path, name, character} = credit;
return(
    <li>
        <img src={'http://image.tmdb.org/t/p/w500/' + profile_path} alt={name} width={100} height={150}/>
        <p>{name}</p>
        <p>Character: {character}</p>
    </li>
)
}