# CRUD de usuarios com React que consome API
## API
### Hooks
Para a relação com a API foi utilizado o Axios
- Primeiro é definido o primeiro estado *[buscaapei, setBuscaapi]*, com a utilização do hook *useState()*.
- Em seguinda é setado o efeito utilizando o *useEffect()*, que vai dizer o que deve ser executado a cada chamada, como não existem parametros de chamada do *useEffect()*, logo irá chamar apanas quando a página for atualizada.
- Como o que queremos executar dentro do *useEffect()* é a chamada da API, então criaremos uma arrowfunction que vai conter a ação de chamada.
```JavaScript
const [buscaapi, setBuscaapi] = useState()
```
### Axios
- A ação de chamada vai ocorrer por meio do axios, utilizando sua respectiva sintaxe.
- no .then existirá uma arrowfunction que utilizando o *setBuscaapi*, vai mudar a variavel buscaapei em função da *response.data*.
- Dentro do retorno o utiliza-se uma arrowfunction com com o *.map*, que tem a função de percorrer o vetor, neste caso estará percorrendo o response.data, que recebe o nome de printresposta.
```JavaScript
useEffect(() => {
    axios.get("http://localhost:3001/users/all")
    .then((response) => setBuscaapi(response.data))
}, [])
```
### Chave de impressão
- Para definir o laço, utiliza-se o *key*, neste exemplo o *key* irá repetir o que está dentro da li percorrendo os ids que encontrar.
```JavaScript
{buscaapi?.map(printresposta => (
    <li key={printresposta.id}>
        <div>{printresposta.name}</div>
    </li>
))}
```