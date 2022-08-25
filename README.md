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
### Método PUT
#### Função Update
- Este método está relacionado com a função de Update do crud, que é precisa identificar o Id o qual se deja editar e as novas informações que devem ser alteradas, a função que faz essa relação com a Api fica da seguinte forma:
```JavaScript
export default function update(data, namevalue, emailvalue) {

    const id = data.id

    axios.put(`http://localhost:3001/users/${id}`, {
        name: namevalue,
        email: emailvalue
    })
    document.location.reload()
}
```
- As variaveis *namevalue* e *emailvalue* são do hook já declarado anteriormente. Já o *Id* precisa ser identificado quando clicamos no botão de Update, para tal, se criou uma função que pega as informações da chave do laço, no caso o *printresposta*, essa informação é passada como parametro *info*, e nela se pega as informações do item especifico que queremos editar.
#### Define *Data*
```JavaScript
const getArray = (info) => {
        const id = info.printresposta.id
        const name = info.printresposta.name
        const email = info.printresposta.email

        setData({ id, name, email })
    }
```
#### Hook
- O arrey de informações é setado atravez de um hook:
```JavaScript
const [data, setData] = useState({})
```
#### Modal
- Para o uso deste método e atualização do método Post, utiliza-se a lib `react-modal`, que vai gerar os models.
- ##### React Modal: https://github.com/reactjs/react-modal
```bash
npm install --save react-modal
```
- Foi utilizado o fomato proposto pela documentação.
- Vale ressaltar que quando o botão de Update é clicado, deve-se chamar *getArray()* e *openModal()*, logo chama-se *openModal()* no dim da função *getArray()*.
```JavaScript
const [modalIsOpen, setIsOpen] = useState(false);
const [data, setData] = useState({})

const openModal = () => {
setIsOpen(true);
}

const closeModal = () => {
setIsOpen(false)
}

<button onClick={() => getArray(printresposta)}>Update</button>
<Modal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}>
    <div>
        <input defaultValue={data.name} onChange={getName}></input>
        <input defaultValue={data.email} onChange={getEmail}></input>
    </div>
        <button
            onClick={() => update(data, namevalue, emailvalue)}>Submit</button>
    <button onClick={closeModal}>close</button>
</Modal>
```
- É importante ressaltar que quando o Model está em um componente, este precisa receber como parametro o *printresposta*, e deve-se definir os hooks para pegar os valores de nome e email novamente.
```JavaScript
<UpdateModel printresposta={printresposta}/>
```
### Método DELETE
- Este método foi feito de maneira muito semelhante ao método put, porem um pouco mais simples, por que não precias de novas informações para adicionar.
- Por este motivo o model recebeu o nome de *DeleteWarning* já que é um aviso de confirmação para deletar o usuario.
### Show Infos
- Foi adicionado o botão com o modal de *ShowModal*, que basicamente vai mostrar as informações detalhadas do usuario.
- O modal foi baseado no de update, porem mais simples por não precisar pegar novos valores, apenas mostrar em inputs desabilitados.
## Otimização dos Modals
- Como existiam varias funções e itens iguais em todos os Modals, se definiu um componente *ModalTemplate()*, que recebe como parametros o *printresposta* e a *acao*, que é utilizada em algumas codicionais que para definir algumas propriedades dos inputs e quais botões devem aparecer, levando as suas respectivas funções, create, update e dalete.
- As funções:
```JavaScript
const [modalIsOpen, setIsOpen] = useState(false);
const [data, setData] = useState({})

const [namevalue, setNamevalue] = useState()
const [emailvalue, setEmailvalue] = useState()


const openModal = () => {
    setIsOpen(true);
}

const closeModal = () => {
    setIsOpen(false)
}

const getName = (event) => setNamevalue(event.target.value)
const getEmail = (event) => setEmailvalue(event.target.value)

const getArray = (info) => {
    const id = info.printresposta.id
    const name = info.printresposta.name
    const email = info.printresposta.email

    setData({ id, name, email })
    openModal()
}

const acao = params.acao
```
- O retorno:
```JavaScript
<button onClick={acao != 'create' ? () => getArray(params) : () => openModal()}>{acao}</button>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}>
        <div>
            <input className='input-name'
                defaultValue={acao == 'update' || 'info' ? data.name : null}
                onChange={acao == 'update' || 'create' ? getName : null}
                disabled={acao == 'info' ? true : false}
                hidden={acao == 'delete' ? true : false}
            />

            <input className='input-email'
                defaultValue={acao == 'update' || 'info' ? data.email : null}
                onChange={acao == 'update' || 'create' ? getEmail : null}
                disabled={acao == 'info' ? true : false}
                hidden={acao == 'delete' ? true : false}
            />

            <input className='input-id'
                value={acao == 'update' || 'info' ? data.id : null}
                hidden={data.id && acao != 'delete' ? false : true}
                disabled/>
                
        </div>
        <p hidden={acao == 'delete' ? false : true}>Tem certeza que deseja deletar este Usuario?</p>
        <button
            onClick={() => create(namevalue, emailvalue)}
            hidden={acao == 'create' ? false : true}
        >Criar Usuario</button>

        <button
            onClick={() => update(data, namevalue, emailvalue)}
            hidden={acao == 'update' ? false : true}
        >Atualizar Usuario</button>

        <button
            onClick={() => deletes(data)}
            hidden={acao == 'delete' ? false : true}
        >Deletar</button>

        <button onClick={closeModal}>close</button>
    </Modal>
```