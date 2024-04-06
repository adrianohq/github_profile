import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        const fetchRepositorios = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`);
                if (!res.ok) {
                    throw new Error('Erro ao carregar os repositórios. Por favor, verifique o nome de usuário.');
                }
                const resJson = await res.json();
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 1000);
            } catch (error) {
                console.error('Erro:', error.message);
                setEstaCarregando(false);
                setRepos([]);
            }
        };

        fetchRepositorios();
    }, [nomeUsuario]);

    if (estaCarregando && repos.length === 0) {
        return <h1>Carregando...</h1>;
    }

    return (
        <div className="container">
            {repos.length === 0 && (
                <div>
                    <h1>Usuário inválido</h1>
                    <h2>Verifique se digitou o usuário corretamente e tente novamente!</h2>
                </div>
            )}
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReposList;
