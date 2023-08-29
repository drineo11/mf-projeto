import { useParams } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import './filme-info.css';
import api from '../../service/api';


function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'd4d6054dc2431ca02d6a78332215fbea',
                    language: 'pt-BR',

                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);

            })
            .catch(()=> {
                console.log('Erro ao recuperar os dados');
            })
        }

        loadFilme();


        return () => {
            console.log('Componente desmontado');
        }
    }, []);

    if (loading) {  
        return (
            <div className="filme-info">
                <h1>Carregando filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Nota: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="#" >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;