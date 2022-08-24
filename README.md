# CRUD de usuarios com React que consome API
## Figma
O design Projetado para a aparencia e estilização do CRUD:
</br></br>
<div align="center">
<img height="250em" src="https://user-images.githubusercontent.com/90003046/186307817-9277fade-7013-4dd2-a214-a1f8d797ed4a.png"/>
<img height="250em" src="https://user-images.githubusercontent.com/90003046/186308572-2865d46d-7da5-4810-a02e-b6be4b7eaf14.png"/>
</div>

## API
Para a relação com a API foi utilizado o Axios.
### Método GET
#### Hooks
- Primeiro é definido o primeiro estado *[buscaapei, setBuscaapi]*, com a utilização do hook *useState()*.
- Em seguinda é setado o efeito utilizando o *useEffect()*, que vai dizer o que deve ser executado a cada chamada, como não existem parametros de chamada do *useEffect()*, logo irá chamar apanas quando a página for atualizada.
- Como o que queremos executar dentro do *useEffect()* é a chamada da API, então criaremos uma arrowfunction que vai conter a ação de chamada.
```JavaScript
const [buscaapi, setBuscaapi] = useState()
```
#### Axios
- A ação de chamada vai ocorrer por meio do axios, utilizando sua respectiva sintaxe.
- no *.then* existirá uma arrowfunction que utilizando o *setBuscaapi*, vai mudar a variavel buscaapei em função da *response.data*.
- Dentro do retorno o utiliza-se uma arrowfunction com com o *.map*, que tem a função de percorrer o vetor, neste caso estará percorrendo o *response.data*, que recebe o nome de *printresposta*.
```JavaScript
useEffect(() => {
    axios.get("http://localhost:3001/users/all")
    .then((response) => setBuscaapi(response.data))
}, [])
```
#### Chave de impressão
- Para definir o laço, utiliza-se o *key*, neste exemplo o *key* irá repetir o que está dentro da <li> percorrendo os *id*s que encontrar.
```JavaScript
{buscaapi?.map(printresposta => (
    <li key={printresposta.id}>
        <div>{printresposta.name}</div>
    </li>
))}
```
### Método POST
- Para utilizar o método POST precisa-se enviar um array de informação que segue o padrão do exemplo:
```JSON
{
    "name": "Maria",
    "email": "maria@gmail.com"
}
```
- Para tal precisa-se criar uma entrada para esses dados, coletar esses valores e e quando for acionado o botão, deve-se enviar o array com as informações para a API.
#### Hooks
- Para auxiliar neste processo foram criados os estados:
```JavaScript
const [namevalue, setNamevalue] = useState()
const [emailvalue, setEmailvalue] = useState()
```
#### Pegar as infos do Input
- Para coletar os valores foram criadas as funções *getName()* e *getEmail()*, que vão chamar o *setNameValue()* e o *setEmailValue()* com os parametros dos valores dos inputs, que por sua vez são ataulizados a cada alteração do input por conta da propriedade *onChange={}* no mesmo.
```JavaScript
const getName = (event) => setNamevalue(event.target.value)
const getEmail = (event) => setEmailvalue(event.target.value)
```
#### Enviar para a API
- O envio ddas infos ocorre dentro da função submit, que puxa o *axios.post()* com o array com as variaveis do ultimo estado puxadas, ou seja, com os valores que estão no input no momento em que o botão é clicado.
```JavaScript
const submit = () => {
        axios.post("http://localhost:3001/users/create", {  
            name: namevalue,
            email: emailvalue
        })
    }
```
- Vale destacar que a propriedade *onClick()* deve possuir uma arrowfunction para executar a função que queremos(*submit()*) apenas quando o botão for clicado.
```JavaScript
<button type="submit" onClick={() => submit()}>Criar Usuario</button>
```
