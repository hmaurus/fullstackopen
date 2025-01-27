# Diagrama de SPA

```mermaid
sequenceDiagram
    participant navegador
    participant servidor

    navegador->>servidor: GET Localização (Location): https://studies.cs.helsinki.fi/exampleapp/spa
    activate servidor
    servidor-->>navegador: HTML document
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate servidor
    servidor-->>navegador: the css file
    deactivate servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate servidor
    servidor-->>navegador: the JavaScript file
    deactivate servidor

    Note right of navegador: O navegador começa a executar o código JavaScript que busca o JSON do servidor

    navegador->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate servidor
    servidor-->>navegador: [{ "content": "Obrigado pelo curso!", "date": "2025-1-1" }, ... ]
    deactivate servidor

    Note right of navegador: O navegador executa a função callback (função de retorno de chamada) que renderiza as notas