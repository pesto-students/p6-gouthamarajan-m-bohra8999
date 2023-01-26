> ## Auth

- **POST** /api/auth/register
  - _Body_:
    - name\*: string
    - username\*: string
    - password\*: string
- **POST** /api/auth/login
  - _Body_:
    - username\*: string
    - password\*: string

> ## Expense

- **GET** /api/expense/:id?

  - _Params_:
    - **from**: Date (Unix-Timestamp)
    - **to**: Date (Unix-Timestamp)

- **GET** /api/expense/all?

  - _Params_:
    - **from**: Date (Unix-Timestamp)
    - **to**: Date (Unix-Timestamp)

- **POST** /api/expense/create

  - _Body_:
    - type: string
    - amount: string

- **PUT** /api/expense/:id

  - _Body_:
    - type: string
    - amount: string

- **DELETE** /api/expense/:id
