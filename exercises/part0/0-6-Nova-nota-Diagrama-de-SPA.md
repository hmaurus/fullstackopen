# Nova nota Diagrama de SPA

```mermaid
sequenceDiagram
    participant navegador
    participant servidor

    navegador->>servidor: POST: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate servidor
    servidor-->>navegador: Status 201 Created
    deactivate servidor