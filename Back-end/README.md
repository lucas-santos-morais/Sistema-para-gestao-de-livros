##  💻 Back - End

Nesta parte temos o código em java usando o intellij IDE versão community, foi criada pastas essencias para trabalhar com o código em partes, e feito a ligação do banco de dados. Algumas dependências foram instaladas. Caso precise saber como cadas parte funciona, busque entender por meio de pesquisas.

### 📖 Explicação 

O projeto foi criado no intellij IDE usando o maven e a versão do JDK foi 17 para rodar todas nossas dependências. Cadas arquivo aqui explicado está separado seu código na pasta especifíca.

1️⃣ - POM.XML

Antes de criar a pasta, no arquivo - pom.xml temos que configurar nossas dependência.

2️⃣ - PASTAS

Criar pastas necessárias para colocar nosso banco de dados(Uma forma de backup), criar pasta controle para manipular nosso CRUD, pasta serviço para definir nossos métodos, a pasta repositório - essa interface permite que você acesse e manipule dados da tabela Livro no banco de dados sem precisar escrever código SQL manualmente. Uma pasta para manipular os atributos usando o GET and SET.

### Nome das pastas

* model.sql (banco de dados)
* App.java (código principal para rodar aplicação)
* Livro.java (atributos e GET and SET)
* LivroService.java
* LivroController.java
* LivroRepository.java

3️⃣ - Resources

Aqui devemos criar um arquivo para conectar com nosso banco, com o nome de "apllication.properties"

4️⃣ - Class

Cada pasta deve ter o seu arquivo necessário, ou seja, com suas terminações necessárias, criar Class, Java.

5️⃣ - Integração

Foi realizado a integração com o banco e verificado se cada parte não apresenta algum erro

6️⃣ - Iniciar 

Foi iniciado o código com uma mensagem no final que retornar se o servidor está no ar, ou seja, se toda parte do backend está funcionando.

