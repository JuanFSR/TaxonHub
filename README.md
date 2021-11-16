# Requisitos do Sistema Taxonhub

## 1. Requisitos Funcionais

- **R.F.1** - O sistema deve ser capaz de acessar APIs de sites especificados (quando disponíveis) para obter dados taxonômicos da espécie (FdB/TPL) a partir de uma lista disponibilizada pelo pesquisador.

- **R.F.2** - O sistema deve ser capaz de acessar APIs de sites especificados (quando disponíveis) para obter ocorrências registradas de determinadas espécies (GBIF/SL) a partir de uma lista disponibilizada pelo pesquisador.

- **R.F.3** - O sistema deve reconhecer como parâmetro de entrada uma lista de espécies geradas pelos usuários através de um arquivo .csv, permitindo realizar a busca taxonômica quanto a pesquisa de ocorrências de um grande conjunto.

- **R.F.4** - O sistema deve permitir ao usuário editar as listas manualmente, removendo dados indesejados.

- **R.F.5** - O sistema deve ser capaz de organizar informações obtidas em listas de resultados, permitindo o download da mesma em um arquivo .csv.

### 1.1. Funções Fundamentais

- **R.FF.1** - O sistema deve ser capaz de manter os resultados durante o processo de análise, sem executar repetidamente as mesmas buscas durante a navegação.

### 1.2. Representação das Saídas

- **R.RS.1** - Depois de ter sido realizada a consulta taxonômica, será possível realizar o download e exibição dos resultados obtidos em um arquivo no formato .csv, comparando os resultados obtidos no FdB/TPL. Este arquivo conterá as seguintes colunas com os resultados obtidos em ambos sites: Nome Pesquisado, Nome Encontrado Flora do Brasil, Nome aceito Flora do Brasil, Status taxonômico Flora do Brasil, Nome encontrado The Plant List, Nome aceito Nome encontrado The Plant List, Status taxonômico Nome encontrado The Plant List, FDB x TPL Status e FDB x TPL Autor.

- **R.RS.2** - A partir da segunda lista o sistema buscará as ocorrências das espécies listadas no arquivo de entrada. Os resultados encontrados no GBIF ou SL serão armazenados em uma tabela, permitindo o download desses resultados em um arquivo .csv.

## 2. Requisitos Não Funcionais

### 2.1. Requisitos de produtos

#### 2.1.1. Usabilidade

- **R.U.1** - O sistema deve ser intuitivo em relação a execução das funcionalidades exigidas, contendo duas seções para realização da validação taxonômica e outra para busca de ocorrências das espécies. Com ajuda de ícones o objetivo será tornar mais instintivo a realização de processos como o de upload para arquivos para execução das buscas.

#### 2.1.2. Desempenho

- **R.D.1** - O sistema deve ser capaz de manter os resultados durante o processo de análise, sem executar repetidamente as mesmas buscas durante a navegação, o que resultará em um melhor desempenho.

### 2.2. Requisitos Organizacionais

#### 2.2.1. Requisitos de Implementação

- **R.I.1** - Arquitetura de projeto clara e organizada.

- **R.I.2** - Software desktop multiplataforma baseado em Electron.

- **R.I.3** - Programação em JS ou TS.

- **R.I.4** - Armazenar dados em banco local.

## 3. Fluxo dos Processos  

- **R.FP.1** - Usuário cria lista de espécies a serem buscadas.

- **R.FP.2** - Software busca e valida as espécies, retornando instâncias encontradas em FdB e TPL. (Dados: nomes encontrados, nomes aceitos, autores, informações e status taxonômicos).

- **R.FP.3** - Usuário cria segunda lista a partir dos dados obtidos com a primeira busca.

- **R.FP.4** - Software busca e retorna ocorrências das espécies da segunda lista de acordo com GBIF e SL.(Dados: similares à primeira lista, mas com informações de localização e datas).

## 4. Protótipo 
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7nvyNYGvlfMLzGFUBywQFP%2FTaxon-Hub%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
